module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: "off",
    indent: [0, 4],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    quotes: [
      "single",
      {
        allowTemplateLiterals: true
      }
    ],
    "multiline-ternary": ["off"]
  }
}
