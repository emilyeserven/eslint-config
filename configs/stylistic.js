// 📦 Import necessary utilities and plugins for the flat configuration
// NOTE: A large block of imports for other configs (e.g., storybook, react, tailwind) is commented out,
// indicating this file currently only focuses on basic formatting.
import stylistic from "@stylistic/eslint-plugin"; // The new plugin for purely stylistic rules
import { defineConfig, globalIgnores } from "eslint/config"; // Utility for defining the config and global ignores
import tseslint from "typescript-eslint"; // The package for running ESLint with TypeScript

// 🚀 Export the configuration array
export default defineConfig([
  // --- Base Stylistic Configurations ---

  // Applies the TypeScript ESLint plugin's stylistic configuration.
  // This enables all TypeScript-aware stylistic rules (e.g., requiring consistent type member delimiters)
  // and turns off any base ESLint rules that would conflict.
  tseslint.configs.stylistic,

  // Applies the recommended set of stylistic rules from the dedicated plugin.
  stylistic.configs.recommended,

  // Further customizes the stylistic rules.
  stylistic.configs.customize({
    // Explicitly enables or enforces semicolons at the end of statements.
    semi: true,
  }),

  // --- Plugin Registration ---
  {
    // Explicitly registers the imported 'stylistic' module under the alias '@stylistic'.
    plugins: {
      "@stylistic": stylistic,
    },
  },

  // --- Detailed Rule Overrides and Custom Formatting ---
  {
    rules: {
      // 📏 Rule: Enforces **2 spaces** for indentation.
      "@stylistic/indent": ["error", 2],

      // 💬 Rule: Enforces **double quotes** for strings.
      "@stylistic/quotes": ["error", "double"],

      // 🧱 Rule: Ensures that **object properties are placed on separate lines** if they span multiple lines.
      "@stylistic/object-property-newline": ["error", {
        allowAllPropertiesOnSameLine: false, // Explicitly disallows multiple properties on one line.
      }],

      // 🖼️ Rule: Enforces **newlines inside object literals and patterns**.
      "@stylistic/object-curly-newline": ["error", {
        // Apply to object expressions (e.g., `{ a: 1, b: 2 }`).
        ObjectExpression: {
          multiline: true, // Newlines are required if the content spans multiple lines.
          minProperties: 1, // Forces newlines if there is more than one property.
        },
        // Apply to object destructuring (e.g., `const { a, b } = obj`).
        ObjectPattern: {
          multiline: true,
          minProperties: 1,
        },
      }],

      // ⬇️ Rule: Enforces **multiline function arguments** to start on new lines.
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],

      // ⚙️ Rule: Enforces a consistent **brace style** (e.g., placing the opening brace on the same line).
      "@stylistic/brace-style": "error",

      // --- JSX Stylistic Rules ---

      // 📐 Rule: Enforces **2 spaces** for indentation of props in JSX.
      "@stylistic/jsx-indent-props": ["error", 2],

      // 📜 Rule: Forces a **maximum of one prop per line** in JSX elements.
      "@stylistic/jsx-max-props-per-line": ["error", {
        maximum: 1,
      }],

      // 💬 Rule: Controls expressions allowed per line inside JSX.
      // Allows non-JSX content (like strings or numbers) but forces JSX expressions onto new lines.
      "@stylistic/jsx-one-expression-per-line": ["error", {
        allow: "non-jsx",
      }],

      // ⚛️ Rule: Enforces **self-closing tags** for components with no children (e.g., `<Component />`).
      "@stylistic/jsx-self-closing-comp": "error",

      // 💡 Rule: Enforces **parentheses and newlines** when wrapping multiline JSX structures.
      "@stylistic/jsx-wrap-multilines": ["error", {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
      }],
    },
  },
]);
