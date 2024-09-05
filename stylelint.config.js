export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
  ],
  plugins: [
    "stylelint-scss",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": null,
    "block-no-empty": null,
    "no-empty-source": null, 
    "no-descending-specificity": null,
  },
  ignoreFiles: [
    "**/*.js",
    "**/*.ts",
    "**/*.tsx",
    "**/*.json",
  ],
};
