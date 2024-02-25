/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off", // Desactiva la regla de react-in-jsx-scope
    "react/prop-types": [2, { ignore: ["className"] }], // Desactiva la regla de prop-types para className
  },
};
