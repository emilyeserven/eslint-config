import { defineConfig } from "eslint/config";
import globals from "globals";

import clientBaselineGlob from "./clientBaselineGlob.js";
import reactBundle from "./reactBundle.js";
import tailwindConfig from "../configs/tailwind.js";

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
