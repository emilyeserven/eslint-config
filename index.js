import { defineConfig, globalIgnores } from "eslint/config";

import stylisticConfig from "./configs/stylistic.js";
import clientGlobConfig from "./globConfigs/clientGlob.js";
import configGlobConfig from "./globConfigs/configGlob.js";
import jsonGlobConfig from "./globConfigs/jsonGlob.js";
import middlewareGlobConfig from "./globConfigs/middlewareGlob.js";
import tsGlobConfig from "./globConfigs/tsGlob.js";

export default defineConfig([
  globalIgnores(["**/dist/**/*"]),
  ...stylisticConfig,
  ...tsGlobConfig,
  ...clientGlobConfig,
  ...configGlobConfig,
  ...jsonGlobConfig,
  ...middlewareGlobConfig,
]);
