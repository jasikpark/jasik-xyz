/** @type {import('netlify-cms-core').EditorComponentOptions} */
export let OptimizedImgShortcode = {
  id: "optimized-img",
  label: "Optimized Image",
  fields: [
    {
      name: "src",
      label: "Image Source",
      widget: "image",
    },
    {
      name: "alt",
      label: "Image Alt",
      widget: "string",
    },
    {
      name: "title",
      label: "Image Title",
      widget: "string",
    },
    {
      name: "extras",
      label: "Extra Attributes",
      widget: "string",
    },
  ],
  pattern:
    /{{< img src="([a-zA-Z0-9-_ ]+)" alt="([\S ]+)" title="([\S ]+)"([\S ]*) >}}/,
  fromBlock: function (match) {
    return {
      src: match[1],
      alt: match[2],
      title: match[3],
      extras: match[4],
    };
  },
  toBlock: function (obj) {
    return `{{< img src="${obj.src}" alt="${obj.alt}" title="${obj.title}" ${obj.extras} >}}`;
  },
  toPreview: function (obj) {
    return `<img src="${obj.src}" alt="${obj.alt}" title="${obj.title}" ${obj.extras} />`;
  },
};
