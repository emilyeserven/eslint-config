// 📦 Import necessary utilities and plugins for the flat configuration
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import tseslint from "typescript-eslint"; // The package for running ESLint with TypeScript

// 🚀 Export the configuration array
export default defineConfig([
  // --- Custom Rule Overrides and Configuration ---
  {
    rules: {
      // 📐 Rule: Configures the TypeScript-specific unused variable check.
      // This rule requires the plugin to be registered (in the block below).
      "@typescript-eslint/no-unused-vars": ["error", {
        // Sets the severity to 'error'.
        // Ignores unused arguments in function signatures.
        // This is crucial for middleware functions (e.g., `(req, res, next) => {...}`),
        // where `req` or `next` might not be used in a particular handler.
        args: "none",
      }],

      // ⚠️ Rule: The base ESLint rule for unused variables.
      // This is often run alongside the TS version to catch non-type-specific unused variables.
      // It's configured identically to the TS version.
      "no-unused-vars": ["error", {
        args: "none",
      }],
    },
  },

  // --- Plugin Registration ---
  {
    // ⚙️ Plugin Registration:
    // Registers the TypeScript ESLint plugin so its rules (like the one above) can be used.
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
]);
