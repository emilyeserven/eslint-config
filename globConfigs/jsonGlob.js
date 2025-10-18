import { defineConfig } from "eslint/config";
import globals from "globals";

import jsConfig from "../configs/js.js";
import jsonConfig from "../configs/json.js";

/**
 * ESLint config for use with emstack.
 * Catches any .json file.
 */
export default defineConfig([
  {
    files: ["**/*.json"],
    extends: [...jsConfig, ...jsonConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
