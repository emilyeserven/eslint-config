import { defineConfig } from "eslint/config";
import globals from "globals";

import jsConfig from "../configs/js.js";

export default defineConfig([
  {
    files: ["**/*.config.{js,ts}"],
    extends: [...jsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

  },
]);
