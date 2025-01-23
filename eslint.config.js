import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: false,
  lessOpinionated: true,
  stylistic: {
    indent: 2,
    quotes: "single",
    semi: true,
  },
  overrides: {
    stylistic: {
      "style/arrow-parens": ["error", "always"],
    },
  },
});
