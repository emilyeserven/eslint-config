// 📦 Import necessary utilities and plugins
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import globals from "globals"; // Contains definitions for well-known global variables

import importConfig from "../configs/import.js"; // Loads a separate configuration for import rules (e.g., ordering, resolving paths)
import jsConfig from "../configs/js.js"; // Loads a separate configuration for base JavaScript rules (e.g., no unused variables, syntax checks)
import { nonClientGlobs } from "../utils/constants.js"; // Imports a list of glob patterns representing files to ignore (e.g., build scripts, Node server files)

/**
 * ESLint config for use with emstack.
 * Catches any .js, .ts, .jsx, and .tsx file and
 * ignores non-client TS files.
 *
 * Contains rules for a JS baseline as well as import rules.
 */
export default defineConfig([
  {
    // 🎯 Target Files: Specifies which files this configuration block should apply to.
    // It targets all JavaScript, TypeScript, and React/JSX files recursively.
    files: ["**/*.{js,ts,jsx,tsx}"],

    // 🚫 Ignores Files: Specifies which files within the 'files' target should be excluded.
    // It uses the imported `nonClientGlobs` array to bypass linting on files that
    // likely run in a Node.js environment (e.g., server code, configuration, or build scripts).
    ignores: nonClientGlobs,

    // 🔌 Extended Configurations: Merges rules from external configuration arrays.
    // This modular approach keeps the main config clean by pulling in all baseline JS rules and all import rules.
    extends: [...jsConfig, ...importConfig],

    // ⚙️ Language Options & Environment Setup
    languageOptions: {
      // Sets the JavaScript version used for parsing, supporting features up to ES2020.
      ecmaVersion: 2020,
      globals: {
        // Defines common global variables found in a browser environment (e.g., `window`, `document`).
        ...globals.browser,
        // Explicitly defines the Node.js global variable `__dirname` as available,
        // suggesting some browser-targeted files might still use Node environment checks.
        __dirname: true,
      },
    },
  },
]);
