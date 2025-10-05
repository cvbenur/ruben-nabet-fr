import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react/display-name": "off",
      "storybook/no-title-property-in-meta": "off",
      "react/button-has-type": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
