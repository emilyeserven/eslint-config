import { defineConfig } from "eslint/config";
import globals from "globals";

import reactConfig from "../configs/react.js";
import tanstackQueryConfig from "../configs/tanstackQuery.js";
import tanstackRouterConfig from "../configs/tanstackRouter.js";

export default defineConfig([
  {
    files: ["packages/client/src/**/*.{js,jsx,ts,tsx}"],
    extends: [...tanstackQueryConfig, ...tanstackRouterConfig],
  },
  {
    files: ["packages/client/src/**/*.{jsx,tsx}"],
    extends: [...reactConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
