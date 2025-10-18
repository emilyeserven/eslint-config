import { defineConfig } from "eslint/config";

import reactConfig from "./react.js";
import tanstackQueryConfig from "./tanstackQuery.js";
import tanstackRouterConfig from "./tanstackRouter.js";

export default defineConfig([
  ...reactConfig,
  ...tanstackQueryConfig,
  ...tanstackRouterConfig,
]);
