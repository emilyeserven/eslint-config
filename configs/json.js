/**
 * @module configs/json
 * @description Disables stylistic rules that conflict with JSON syntax (semicolons, trailing commas, quote-props).
 */
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      // JSON requires double-quoted keys; let the formatter handle it
      "@stylistic/quote-props": 0,

      // Semicolons are invalid in JSON
      "@stylistic/semi": 0,

      // Trailing commas are invalid in JSON
      "@stylistic/comma-dangle": 0,
    },

    plugins: {
      "@stylistic": stylistic,
    },
  },
]);
