import { defineConfig } from "eslint/config";
import globals from "globals";

import tsConfig from "../configs/ts.js";
import { nonClientGlobs } from "../utils/constants.js";

/**
 * ESLint config for use with emstack.
 * Catches any .ts file and ignores non-client TS files.
 */
export default defineConfig([
  {
    files: ["**/*.{ts}"],
    ignores: nonClientGlobs,
    extends: [...tsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        __dirname: true,
      },
    },
  },
]);
