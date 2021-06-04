+++
Title = "Netlify CMS is confusing"
Date = 2021-06-04T18:45:28.174Z
Type = "post"
Draft = true
isMath = false
+++

Setting up [Netlify CMS](https://netlifycms.org) has been interesting since the configuration is in YAML and the custom shortcode plugins have very unclear errors:

`Sent invalid data to remark. Plugin: twitter. Value: {{< twitter 1034811356611051520 >}}. Data: {"tid":"1034811356611051520"} 2 remarkShortcodes.js:53:16`

Also apparently it needs `identifier_field: "Title"` since my frontmatter variables are all capitalized, and Netlify CMS looks for `title` by default.

{{< img src="netlify-cms.png" alt="Netlify CMS Splash" title="Netlify CMS" class="rounded-lg" >}}
