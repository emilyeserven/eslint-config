/**
 * @module configs/ts
 * @description Extends typescript-eslint recommended + strict rules, with underscore-prefix unused-var pattern.
 */
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  tseslint.configs.recommended,

  // Stricter rules for correctness and safety (e.g., no non-null assertions)
  tseslint.configs.strict,

  {
    rules: {
      // Allow @ts-expect-error only with a description explaining why
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
        },
      ],

      // Base rule gives false positives with TS syntax; use @typescript-eslint version below
      "no-unused-vars": "off",

      // Unused vars prefixed with _ are intentional (e.g., destructuring to omit)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
