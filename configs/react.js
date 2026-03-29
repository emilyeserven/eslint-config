/**
 * @module configs/react
 * @description Configures React, Hooks, and React Refresh plugins with JSX runtime support.
 */
import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default defineConfig([
  reactPlugin.configs.flat.recommended,

  // Supports the new JSX transform (no need to import React in every file)
  reactPlugin.configs.flat["jsx-runtime"],

  reactHooks.configs["recommended-latest"],

  // HMR support for Vite dev server
  reactRefresh.configs.vite,

  {
    settings: {
      react: {
        // Ensures plugin rules match the installed React version
        version: "detect",
      },
    },
  },

  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },

  {
    plugins: {
      react: reactPlugin,
    },
  },

  {
    rules: {
      // Improve readability when a JSX element has multiple props
      "react/jsx-first-prop-new-line": ["warn", "multiline"],

      // Allow function children for TanStack Form's render-prop pattern
      "react/no-children-prop": [
        "error",
        {
          allowFunctions: true,
        },
      ],
    },
  },
]);
