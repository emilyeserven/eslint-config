// 📦 Import necessary utilities and plugins for the flat configuration
import js from "@eslint/js"; // Contains ESLint's core recommended rules
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array (optional but good practice)

// 🚀 Export the configuration array
export default defineConfig([
  // --- Standard Configurations ---

  // Applies ESLint's default 'recommended' ruleset.
  // This includes essential rules for catching common problems (e.g., no unused variables, no extra semicolons).
  js.configs.recommended,

  // // This line is commented out, meaning rules from 'eslint-plugin-import' are NOT currently being used.
  // importPlugin.flatConfigs.recommended,

  // --- Custom Rule Overrides and Specific Configurations ---

  {
    rules: {

      /*
            // This section is commented out, meaning these import rules are NOT currently active.
            // If enabled, this would:
            // - Throw an error for imports that cannot be resolved ('import/no-unresolved').
            // - Ignore case sensitivity during resolution.
            // - Specifically ignore resolution warnings for 'eslint/config' and 'typescript-eslint' modules.
                  "import/no-unresolved": ["error", {
                    caseSensitive: false,
                    ignore: [
                      "eslint/config",
                      "typescript-eslint",
                    ],
                  }],
                    */

      // 💬 Rule: Controls the use of console logging.
      // - Sets the severity to 'warn' (does not break the build, just suggests fixing it).
      // - It catches all console methods (log, error, warn, info, etc.).
      "no-console": ["warn"],
    },
  },
]);
