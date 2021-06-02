+++
Date = "2021-02-18T22:46:35-06:00"
Description = "Trying to manipulate the color of a PNG using CSS filters and Machine Learning :D"
PublishDate = "2021-02-23T05:00:00-06:00"
Title = "Inverting images in dark mode, many shenanigans, and it's always StackOverflow"
Type = "post"

+++

## The Problem

Something that has been troubling me for a while is attempting to take a PNG with a transparent background and black strokes, and display it on a dark background. I've finally found my holy grail of a solution! It's _Machine learning_!

I found this while doing my regular scour of the internet when I'm confused about something like the CSS [`filter`](https://css-tricks.com/almanac/properties/f/filter/) property, and it's beautiful ✨.

I needed to color the [headphone boi]({{< relref "2021-02-18-164700" >}}), and I had messed around with `filter: invert()` and such while trying to help [Addison Crump](https://addisoncrump.info) with [his LaTeX graph diagram displaying on dark mode](https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/){{< raw-wayback href="https://web.archive.org/web/20210219045717/https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/" title="Mixed Flow Graph" >}}.

{{< figure >}}
{{< img src="headphone-boi.png" alt="a headphone boi" class="filter-image" width="800" height="600" >}}
{{< figcaption >}}
headphone boi
{{< /figcaption >}}
{{< /figure >}}

We had tried various options, such as a simple

```css
.diagram {
  filter: invert();
}
```

which turns the diagram from black to white, which is close, but it's a little harsh when the rest of the elements are a more gentle tone. We experimented with `filter: sepia()` to add some color, but Addison settled on using

```css
.diagram {
  filter: invert();
  mix-blend-mode: difference;
}
```

[`mix-blend-mode`](https://css-tricks.com/almanac/properties/m/mix-blend-mode/) tells CSS how to combine the element colors with it's background colors, as far as I understand it, so setting `mix-blend-mode: difference` takes the difference the white of the diagram with the steely blue of the background, resulting in a tone that looks like old book paper to me.

{{< figure >}}
{{< img src="mixed-flow-graph-before.png" alt="Screenshot of the website showing how the diagram is a warm and very washed out yellow on a similarly faded blue gray background" >}}
{{< figcaption >}}

<p>Tada you can see the original solution at <a href="https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/">Mixed-Flow Graphs</a>{{< raw-wayback href="https://web.archive.org/web/20210219045717/https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/" title="Mixed-Flow Graphs" >}}</p>
{{< /figcaption >}}
{{< /figure >}}

It does a great job, and does a great, simple job of making the diagram fit into the surrounding vibe, but it's not quite the same as being able to set the diagram to the same as the text color.

But what if we could?

{{< figure >}}
{{< img src="machine_learning_2x.png" alt="Man 1 stands above pile of 'data', matrices and such. Man 2: THIS is your machine learning system? Man 1: Yup! You pour the data into this big pile of linear algebra, then collect the answers on the other side. Man 2: What if the answers are wrong? Man 1: Just stir the pile until they start looking right." title="The pile gets soaked with data and starts to get mushy over time, so it's technically recurrent." >}}
{{< figcaption >}}

<p>from <a href="https://xkcd.com/1838/">https://xkcd.com/1838/</a>{{< raw-wayback href="https://web.archive.org/web/20201124035659/https://xkcd.com/1838/" title="xkcd 1838" >}}. thanks for all the laughs.</p>
{{< /figcaption >}}
{{< /figure >}}

## The Solution

What I found on StackOverflow was a ludicrous idea: implement the browser CSS filter functions as Javascript functions and then setup a small loss function and gradient descent to search the space of what filters will get you the closest color to your input color when applied to a black image with a transparent background.

CSS `filter` is based on a bunch of primitives, like `sepia()` and `invert()` and `hue-rotate`, but on the backend they essentially implement an `<feColorMatrix>` or other SVG filter types.

So in the [solution](https://stackoverflow.com/a/43960991/7644640){{< raw-wayback href="https://web.archive.org/web/20210220200039/https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991" title="Accepted StackOverflow Solution" >}} via a [codepen reimplementation](https://codepen.io/sosuke/pen/Pjoqqp){{< raw-wayback href="https://web.archive.org/web/20210220200230/https://codepen.io/sosuke/pen/Pjoqqp" title="Codepen Reimplementation of the solution" >}}, they implemented `sepia()`, `saturate()`, `hue-rotate()`, `brightness()`, and `contrast()` as Javascript functions that implement the matrix transform as a series of multiplications.

That then is fed into an <abbr>[SPSA](https://en.wikipedia.org/wiki/Simultaneous_perturbation_stochastic_approximation), or a Simultaneous Perturbation Stochastic Approximation</abbr>, which receives an array of percentages, representing the percentages passed to each of the filter primitives in `filter: sepia([1]) saturate([2]) hue-rotate([3]) brightness([4]) contrast([5])`.

Then, a [loss function](https://en.wikipedia.org/wiki/Loss_function) is set up for the SPSA so that it can judge the performance of a particular set of filter percentages. They used the RGB difference, since that is the end goal to have a filter that results in the same RGB color, in addition to the HSL (Hue Saturation Lightness Color Model) difference, since `hue-rotate()` vaguely correlates to the Hue in HSL, and `saturate()` correlates with the Saturation.

So the loss function is this:

```js
function loss(filters) {
  let color = new Color(0, 0, 0);
  color.invert(filters[0] / 100);
  color.sepia(filters[1] / 100);
  color.saturate(filters[2] / 100);
  color.hueRotate(filters[3] * 3.6);
  color.brightness(filters[4] / 100);
  color.contrast(filters[5] / 100);

  let colorHSL = color.hsl();
  return (
    Math.abs(color.r - this.target.r) +
    Math.abs(color.g - this.target.g) +
    Math.abs(color.b - this.target.b) +
    Math.abs(colorHSL.h - this.targetHSL.h) +
    Math.abs(colorHSL.s - this.targetHSL.s) +
    Math.abs(colorHSL.l - this.targetHSL.l)
  );
}
```

Then there is a step where the SPSA is used to solve in a "wide" case, to get in the ballpark of the correct color with at most 25 attempts, but more likely less. After that the SPSA is run to solve in a "narrow" case to refine the color and attempt to perfect the filters.

The algorithm stops when the it has completed the predefined number of iterations. I ended up naively altering the number of iterations in the "narrow" case from `500` iterations to [`5000`](https://codepen.io/jasikpark/pen/XWNgoEr), but according to the solution, I should be using the debug patch of the solution in order to tune the `A` and `a` parameters.

> N.B. <time class="inline" datetime="2021-02-20T14:34:34-06:00">2021.02.20</time> I think I'll update this post in the future with a better understanding of the solution, and hopefully my own iteration of perfecting the design?

<time datetime="2021-02-21T19:44:57-06:00">2021.02.21</time>

Apparently I'm dumb and you can just do this using [`<picture>` and media queries](https://webkit.org/blog/8840/dark-mode-support-in-webkit/#:~:text=Images%20and%20Dark%20Mode), since `<picture>` lets you embed media queries in it, so you just generate two different images that are served...

### References:

- 4 CSS Filters For Adjusting Color : <https://vanseodesign.com/css/4-css-filters-for-adjusting-color/>
- CSS filter generator to convert from black to target hex color : <https://codepen.io/sosuke/pen/Pjoqqp>
- How to Transform Black into any Given Color using only CSS Filters : <https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters>, <https://web.archive.org/web/20210220193004/https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991>
- Why doesn't hue rotation by +180deg and -180deg yield the original color? : <https://stackoverflow.com/questions/19187905/why-doesnt-hue-rotation-by-180deg-and-180deg-yield-the-original-color/19325417#19325417> -- This post describes why I wasn't getting anywhere with a [simple solution](https://stackoverflow.com/q/42966641/7644640), the post shows a simple setup that nearly worked for me out of the box in the sense that I got a "yellow" out of it.
