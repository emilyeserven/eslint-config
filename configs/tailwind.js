/**
 * @module configs/tailwind
 * @description Enables Tailwind CSS class linting via eslint-plugin-better-tailwindcss.
 */
import eslintParserTypeScript from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default defineConfig([
  {
    languageOptions: {
      // TS parser required to understand JSX class attributes
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },

    rules: {
      // Non-critical suggestions (e.g., class ordering)
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,

      // Critical errors (e.g., unknown class names)
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
    },

    settings: {
      "better-tailwindcss": {
        // Resolves available Tailwind classes from the project's CSS entry point
        entryPoint: "./src/index.css",
      },
    },
  },
]);
