import { defineConfig } from "eslint/config";

import reactConfig from "./react.js";
import tanstackQueryConfig from "./tanstackQuery.js";
import tanstackRouterConfig from "./tanstackRouter.js";

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
