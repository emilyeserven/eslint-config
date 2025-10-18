import { defineConfig } from "eslint/config";

import importConfig from "./configs/import.js";
import stylisticConfig from "./configs/stylistic.js";

export default defineConfig([
  ...stylisticConfig,
  ...importConfig,
]);
