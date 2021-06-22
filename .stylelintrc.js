// .stylelintrc.js
const { semanticOrdering } = require("stylelint-semantic-groups");

module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    /* optional by recommended */
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules", // <-- important, `@media` should go before `&:pseudo`
      "rules",
    ],
    /* the actual usage of this package */
    "order/properties-order": semanticOrdering,
  },
};
