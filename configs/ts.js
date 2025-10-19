// 📦 Import necessary utilities and plugins
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import tseslint from "typescript-eslint"; // The package for running ESLint with TypeScript

// 🚀 Export the configuration array
export default defineConfig([
  // --- Standard Configurations ---

  // 🤝 Applies the standard set of recommended rules for TypeScript.
  // This includes essential rules like disallowing unused variables and requiring
  // explicit types for functions in certain places.
  tseslint.configs.recommended,

  // 🚨 Applies an extra set of stricter, more opinionated rules.
  // This configuration emphasizes code correctness, safety, and readability,
  // often catching potential runtime issues that the recommended config misses
  // (e.g., disallowing non-null assertions and forcing stricter interface definitions).
  tseslint.configs.strict,

  // --- Custom Rule Override ---
  {
    rules: {
      // 🚫 Rule: Controls the usage of TypeScript directive comments (like @ts-ignore, @ts-nocheck).
      "@typescript-eslint/ban-ts-comment": ["error", {
        // Sets the severity to 'error', meaning any violation breaks the build.

        // 💬 Exception: Allows the use of '// @ts-expect-error' only if it is accompanied
        // by a description explaining why the error is expected and suppressed.
        "ts-expect-error": "allow-with-description",

        // Other directive comments (like @ts-ignore, @ts-nocheck) are implicitly banned by default
        // when using the recommended and strict configs, reinforcing code quality.
      }],
    },
  },
]);
