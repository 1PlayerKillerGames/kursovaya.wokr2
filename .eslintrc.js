module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: false }],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", names: "never" }
    ],
    "multiline-ternary": "off"
  }
}