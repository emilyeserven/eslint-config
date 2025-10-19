// 📦 Import necessary utilities and plugins for the flat configuration
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import reactPlugin from "eslint-plugin-react"; // Core plugin for React syntax and conventions
import reactHooks from "eslint-plugin-react-hooks"; // Plugin for enforcing rules of Hooks
import reactRefresh from "eslint-plugin-react-refresh"; // Plugin for Hot Module Replacement (often used with Vite)
import globals from "globals"; // Utility to define global variables (like 'window' or 'self')

// 🚀 Export the configuration array
export default defineConfig([
  // --- Standard Configurations ---

  // Applies the recommended set of React rules (e.g., component naming, prop types, etc.).
  reactPlugin.configs.flat.recommended,

  // Configures rules for the new JSX transform (where you don't need to import React
  // at the top of every file containing JSX).
  reactPlugin.configs.flat["jsx-runtime"],

  // Applies the recommended rules for React Hooks (e.g., Rules of Hooks).
  reactHooks.configs["recommended-latest"],

  // Adds rules necessary for fast refresh/HMR to work correctly (often used in Vite/modern dev setups).
  reactRefresh.configs.vite,

  // --- Settings ---
  {
    settings: {
      react: {
        // Automatically determines the installed React version. This is critical for
        // ensuring the React plugin rules are compatible with your specific version.
        version: "detect",
      },
    },
  },

  // --- Language Options (Environment Setup) ---
  {
    languageOptions: {
      // Inherits language options (like parser configuration) from the React recommended config.
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        // Defines global variables available in a Service Worker context (e.g., 'self', 'caches').
        ...globals.serviceworker,
        // Defines common global variables available in a browser environment (e.g., 'window', 'document').
        ...globals.browser,
      },
    },
  },

  // --- Plugin Registration (Explicitly Registering React) ---
  {
    plugins: {
      // Explicitly registers the core React plugin for use.
      react: reactPlugin,
    },
  },

  // --- Custom Rules/Overrides ---
  {
    rules: {
      // 🛠️ Rule: Enforces that if a JSX element has multiple props, the first prop starts on a new line.
      // This is a stylistic rule intended to improve readability of multi-line JSX.
      "react/jsx-first-prop-new-line": ["warn", "multiline"],
    },
  },
]);
