/**
 * @module configs/tanstackQuery
 * @description Applies TanStack Query recommended lint rules.
 */
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...pluginQuery.configs["flat/recommended"],
  // No rule overrides yet
  {
    rules: {},
  },
]);
