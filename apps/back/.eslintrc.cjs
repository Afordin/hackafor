module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "standard",
  ignorePatterns: ["dist", ".eslintrc.cjs", "package.json"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
