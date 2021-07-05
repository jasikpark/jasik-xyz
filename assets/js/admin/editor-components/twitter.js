/** @type {import('netlify-cms-core').EditorComponentOptions} */
export let TwitterShortcode = {
  id: "twitter",
  label: "Twitter",
  fields: [
    {
      name: "tid",
      label: "Tweet id",
      widget: "string",
    },
  ],
  pattern: /{{< twitter ([a-zA-Z0-9]+) >}}/,
  fromBlock: function (match) {
    return {
      tid: match[1],
    };
  },
  toBlock: function (obj) {
    return `{{< twitter ${obj.tid} >}}`;
  },
  toPreview: function (obj) {
    return `{{< twitter ${obj.tid} >}}`;
  },
};
