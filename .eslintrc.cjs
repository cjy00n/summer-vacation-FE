module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ["next/babel", "next/core-web-vitals"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
