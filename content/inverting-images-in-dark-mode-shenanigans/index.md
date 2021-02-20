+++
Title = "Inverting images in dark mode, many shenanigans, and it's always StackOverflow"
Type = "post"
Date = "2021-02-18T22:46:35-06:00"
Draft = "true"
+++

Something that has been troubling me for a while is attempting to take a PNG with a transparent background and black strokes, and display it on a dark background. I've finally found my holy grail of a solution! It's _Machine learning_!

I found this while doing my regular scour of the internet when I'm confused about something like CSS [`filter`](https://css-tricks.com/almanac/properties/f/filter/) property, and it's beautiful ✨.

I needed to color the headphone boi in [2021-02-18-164700]({{< relref "2021-02-18-164700" >}}), and I had messed around with `filter: invert()` and such while trying to help [Addison Crump](https://addisoncrump.info) with [his Latex graph diagram displaying on dark mode](https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/){{< raw-wayback href="https://web.archive.org/web/20210219045717/https://addisoncrump.info/academia/tamu/schadenfreude/theory/mixed-flow-graph/" title="Mixed Flow Graph" >}}. We had tried various options, such as a simple

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
{{< img src="machine_learning_2x.png" alt="Man 1 stands above pile of 'data', matrices and such. Man 2: THIS is your machine learning system? Man 1: Yup! You pour the data into this big pile of linear algebra, then colect the answers on the other side. Man 2: What if the answers are wrong? Man 1: Just stir the pile until they start looking right." title="The pile gets soaked with data and starts to get mushy over time, so it's technically recurrent." >}}
{{< figcaption >}}

<p>from <a href="https://xkcd.com/1838/">https://xkcd.com/1838/</a>{{< raw-wayback href="https://web.archive.org/web/20201124035659/https://xkcd.com/1838/" title="xkcd 1838" >}}. thanks for all the laughs.</p>
{{< /figcaption >}}
{{< /figure >}}

What I found on StackOverflow was a ludicrous idea: implement the browser CSS filter functions as Javascript functions and then setup a small loss function and gradient descent to search the space of what filters will get you the closest color to your input color when applied to a black image with a transparent background.

References:

- 4 CSS Filters For Adjusting Color : <https://vanseodesign.com/css/4-css-filters-for-adjusting-color/>
- CSS filter generator to convert from black to target hex color : <https://codepen.io/sosuke/pen/Pjoqqp>
- https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters : <https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters>
- Why doesn't hue rotation by +180deg and -180deg yield the original color? : <https://stackoverflow.com/questions/19187905/why-doesnt-hue-rotation-by-180deg-and-180deg-yield-the-original-color/19325417#19325417> -- This post describes why I wasn't getting anywhere with a [simple solution](https://stackoverflow.com/q/42966641/7644640), the post shows a simple setup that nearly worked for me out of the box in the sense that I got a "yellow" out of it.

I ended up using [this answer](https://stackoverflow.com/a/43960991/7644640) via a [codepen reimplementation](https://codepen.io/sosuke/pen/Pjoqqp) of it in the [comments](https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters#comment94067212_43960991). I to improve my results, I took the `500` iterations set in `solve.narrow()` and [set it to `5000`](https://codepen.io/jasikpark/pen/XWNgoEr), which in a normal sorta thing, might lead to overfitting to the value, but since we're working with a clear set of values and a vaguely provably correct loss function, I believe it was fine.

Apparently the solution uses [SPSA](https://en.wikipedia.org/wiki/Simultaneous_perturbation_stochastic_approximation)
