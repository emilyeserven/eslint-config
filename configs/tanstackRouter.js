/**
 * @module configs/tanstackRouter
 * @description Applies TanStack Router recommended lint rules.
 */
// TODO: Import appears incorrect — should be @tanstack/eslint-plugin-router
import pluginRouter from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...pluginRouter.configs["flat/recommended"],
  // No rule overrides yet
  {
    rules: {},
  },
]);
