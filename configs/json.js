// 📦 Import necessary utilities and plugins for the flat configuration
import stylistic from "@stylistic/eslint-plugin"; // The new plugin for purely stylistic rules
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array

// 🚀 Export the configuration array
export default defineConfig([
  // --- Custom Rule Overrides and Plugin Registration ---
  {
    rules: {
      // ❌ Disabled: Disables the rule that governs **quoting property names**.
      // In JSON, property names *must* be double-quoted strings (e.g., `"key": "value"`).
      // Disabling this rule ensures ESLint won't conflict with a code formatter (like Prettier)
      // which is already enforcing the correct JSON format.
      "@stylistic/quote-props": 0,

      // ❌ Disabled: Disables the rule concerning **semicolons**.
      // Semicolons are not valid syntax in JSON, so this rule is irrelevant and disabled.
      "@stylistic/semi": 0,

      // ❌ Disabled: Disables the rule that enforces or prohibits **trailing commas**.
      // Trailing commas are *invalid* in standard JSON files. Disabling this rule allows
      // a dedicated formatter to enforce the strict JSON rule of "no trailing commas."
      "@stylistic/comma-dangle": 0,
    },

    // ⚙️ Plugin Registration:
    // Registers the imported 'stylistic' module under the alias '@stylistic'.
    // This makes the formatting rules available to check the JSON file's content.
    plugins: {
      "@stylistic": stylistic,
    },
  },
]);
