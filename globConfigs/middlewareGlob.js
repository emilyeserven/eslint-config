import { defineConfig } from "eslint/config";

import middlewareConfig from "../configs/middleware.js";
import { nonClientGlobs } from "../utils/constants.js";

export default defineConfig([
  {
    files: nonClientGlobs,
    extends: [...middlewareConfig],
  },
]);
