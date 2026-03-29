/**
 * @module configs/stylistic
 * @description Enforces formatting conventions: 2-space indent, double quotes, and strict JSX layout rules.
 */
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  // TS-aware stylistic rules (e.g., consistent type member delimiters)
  tseslint.configs.stylistic,

  stylistic.configs.recommended,

  stylistic.configs.customize({
    semi: true,
  }),

  {
    plugins: {
      "@stylistic": stylistic,
    },
  },

  {
    rules: {
      // Match project standard: 2-space indent
      "@stylistic/indent": ["error", 2],

      // Match project standard: double quotes
      "@stylistic/quotes": ["error", "double"],

      // One property per line for readable diffs
      "@stylistic/object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],

      // Consistent newlines in object literals and destructuring
      "@stylistic/object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],

      // Keep multiline function args readable
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],

      // Consistent brace placement (same-line opening brace)
      "@stylistic/brace-style": "error",

      // --- JSX rules ---

      // Match 2-space indent for JSX props
      "@stylistic/jsx-indent-props": ["error", 2],

      // One prop per line for readable diffs
      "@stylistic/jsx-max-props-per-line": [
        "error",
        {
          maximum: 1,
        },
      ],

      // Allow inline text but force JSX expressions onto new lines
      "@stylistic/jsx-one-expression-per-line": [
        "error",
        {
          allow: "non-jsx",
        },
      ],

      // Self-close components with no children (e.g., <Component />)
      "@stylistic/jsx-self-closing-comp": "error",

      // Wrap multiline JSX in parens with newlines for clarity
      "@stylistic/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
        },
      ],
    },
  },
]);
