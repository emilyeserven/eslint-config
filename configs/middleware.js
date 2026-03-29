/**
 * @module configs/middleware
 * @description Relaxes unused-variable rules for Express-style middleware signatures (req, res, next).
 */
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    rules: {
      // Middleware signatures require all params (req, res, next) even if unused
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none",
        },
      ],

      // Mirror the TS rule for plain JS middleware files
      "no-unused-vars": [
        "error",
        {
          args: "none",
        },
      ],
    },
  },

  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
]);
