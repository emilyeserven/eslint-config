// 📦 Import necessary utilities and plugins
import eslintParserTypeScript from "@typescript-eslint/parser"; // The parser needed to understand TypeScript and JSX syntax
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"; // The plugin dedicated to Tailwind CSS rules

// 🚀 Export the configuration array
export default defineConfig([
  {
    // --- Language and Parsing Setup ---
    languageOptions: {
      // ✍️ Parser: Tells ESLint to use the TypeScript parser.
      // This allows ESLint to correctly understand TypeScript syntax (e.g., interfaces, generics)
      // and JSX syntax, which is essential for linting React/Tailwind code.
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaFeatures: {
          // ⚛️ Enables support for JSX syntax.
          jsx: true,
        },
      },
    },

    // --- Plugin Registration ---
    plugins: {
      // Registers the imported Tailwind CSS plugin under the alias "better-tailwindcss".
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },

    // --- Rule Configuration ---
    rules: {
      // ⚠️ Includes all recommended rules from the plugin set to 'warn' severity.
      // These rules typically cover non-critical but helpful suggestions for Tailwind usage.
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,

      // ❌ Includes all recommended rules from the plugin set to 'error' severity.
      // These rules usually cover critical errors like using unknown class names or violating core rules.
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
    },

    // --- Plugin Settings ---
    settings: {
      "better-tailwindcss": {
        // 📌 Specifies the entry point CSS file for Tailwind.
        // The plugin uses this file to correctly identify which Tailwind classes are
        // actually available in the project, often referencing the `@tailwind` directives.
        entryPoint: "./src/index.css",
      },
    },
  },
]);
