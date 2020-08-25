+++
date = "2018-09-03T11:27:43-05:00"
tags = ["math", "javascript", "github"]
title = "How to Add MathJax to Your Hugo Blog"
type = "post"
+++

N.B. The repository seems to have moved to https://github.com/theNewDynamic/gohugo-theme-ananke/, I moved about half of the links to the new url.

[Hugo Documentation](https://gohugo.io/content-management/formats/#enable-mathjax)
to find out what it said about it. It just said to add the MathJax script to a
partial template that would be included in every page that needed MathJax, such
as the footer partial template.

The problem was that I am using my theme as a git submodule, which means that I
cannot edit anything within it without making a pull request to the remote
repository, in this case being https://github.com/budparr/gohugo-theme-ananke.
So I asked [Bud Parr](https://github.com/budparr), the author of the theme, how
to add this script to the partial template without editing the theme.

In this [github issue](https://github.com/budparr/gohugo-theme-ananke/issues/129),
[Bud Parr](https://github.com/budparr) answered my question, stating that all I
needed to do was make a duplicate of
<https://github.com/theNewDynamic/gohugo-theme-ananke/blob/master/layouts/partials/site-scripts.html>,
which is a partial template for adding scripts to every page, and move the
duplicate from `/themes/ananke/layouts/partials/site-scripts.html` to
`/layouts/partials/site-scripts.html`.

After that, I updated my script to include [David Granjon's](https://web.archive.org/web/20190702200819/https://divadnojnarg.github.io/blog/mathjax/)
improvements to setting up MathJax with Hugo, which involved making MathJax not
skip code blocks and fixing the CSS of codeblocks that MathJax decided were
math. But you can really just copy and paste it.

{{< gist jasikpark f07f3bf8bbf11a731425bf14825360fd >}}
