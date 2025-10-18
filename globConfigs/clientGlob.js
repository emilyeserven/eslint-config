import { defineConfig } from "eslint/config";
import globals from "globals";

import clientBaselineGlob from "./clientBaselineGlob.js";
import reactBundle from "./reactBundle.js";
import tailwindConfig from "../configs/tailwind.js";

/**
 * ESLint config for use with emstack.
 * Combines rules from the clientBaselineGlob, reactBundle, and tailwind config.
 *
 * Assumes you have React, Tanstack Query+Router, and Tailwind installed.
 */
export default defineConfig([
  ...clientBaselineGlob,
  ...reactBundle,
  {
    files: ["packages/client/src/**/*.{jsx,tsx}"],
    extends: [...tailwindConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
