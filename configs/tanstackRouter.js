/**
 * @module configs/tanstackRouter
 * @description Applies TanStack Router recommended lint rules.
 */
import pluginRouter from "@tanstack/eslint-plugin-router";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...pluginRouter.configs["flat/recommended"],
  // No rule overrides yet
  {
    rules: {},
  },
]);
