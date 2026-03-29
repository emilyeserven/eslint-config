/**
 * @module configs/js
 * @description Extends ESLint recommended rules and warns on console usage.
 */
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    rules: {
      // TODO: Remove or re-enable import/no-unresolved config
      /*
            "import/no-unresolved": ["error", {
              caseSensitive: false,
              ignore: [
                "eslint/config",
                "typescript-eslint",
              ],
            }],
              */

      // Catch accidental console statements left after debugging
      "no-console": ["warn"],
    },
  },
]);
