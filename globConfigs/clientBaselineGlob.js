import { defineConfig } from "eslint/config";
import globals from "globals";

import importConfig from "../configs/import.js";
import jsConfig from "../configs/js.js";
import { nonClientGlobs } from "../utils/constants.js";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: nonClientGlobs,
    extends: [...jsConfig, ...importConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        __dirname: true,
      },
    },
  },
]);
