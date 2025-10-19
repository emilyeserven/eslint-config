// 📦 Import necessary utilities and plugins for the flat configuration
import { defineConfig } from "eslint/config"; // Utility for defining the flat config array
import importPlugin from "eslint-plugin-import"; // The plugin containing import-related rules

// 🚀 Export the configuration array
export default defineConfig([
  // --- Standard Configurations ---

  // Applies the recommended set of import rules (e.g., no unused imports, etc.)
  importPlugin.flatConfigs.recommended,
  // Extends the import rules to better handle TypeScript-specific imports/syntax
  importPlugin.flatConfigs.typescript,

  // --- Custom Rule Overrides and Specific Configurations ---

  {
    rules: {
      // 🛠️ Rule: Enforces a consistent and logical order for imports.
      "import/order": ["error", {
        // Defines the required order for different import types
        "groups": ["type", "builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
        // A specific configuration to group 'react' as a 'builtin' and position it first among builtins.
        "pathGroups": [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        // Excludes 'type' imports from being affected by the 'pathGroups' ordering logic.
        "pathGroupsExcludedImportTypes": ["type"],
        // Forces a blank line between different import groups.
        "newlines-between": "always",
        // Sorts imports within the same group alphabetically (case-insensitive).
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
      }],

      // 📐 Rule: Enforces using the `import type` syntax for type-only imports at the top level.
      // E.g., `import type { MyType } from './file'` instead of `import { type MyType } from './file'`
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

      // 🚫 Rule: Disallows imports that don't export anything (side-effect imports).
      // The `allow` option is an exception for CSS imports, which are inherently for side effects (loading styles).
      "import/no-unassigned-import": ["error", {
        allow: ["**/*.css"],
      }],

      // ⬇️ Rule: Ensures there's a newline after the last import statement.
      "import/newline-after-import": "error",

      // 📦 Rule: Prevents importing packages using relative paths (e.g., `import '../package-name'`).
      "import/no-relative-packages": "error",

      // 🧭 Rule: Prevents using absolute paths on the file system (e.g., `/Users/user/project/file.js`).
      "import/no-absolute-path": "error",

      // ♊ Rule: Disallows importing the same module multiple times.
      "import/no-duplicates": "error",

      // 🔄 Rule: Prevents a module from importing itself, which leads to infinite loops.
      "import/no-self-import": "error",

      // ❌ Rule: Disallows CommonJS syntax (`require()`, `module.exports`), enforcing ES Modules.
      "import/no-commonjs": "error",

      // ⚖️ Rule: Sets a maximum number of dependencies a file can have (10, in this case).
      // It's a 'warn' severity and ignores imports only used for types.
      "import/max-dependencies": ["warn", {
        max: 10,
        ignoreTypeImports: true,
      }],

      // --- Temporarily Disabled Rules ---

      /* Causing errors, turning off for now. */
      // Disabled: Type errors often arise when using TypeScript or complex environments.
      "import/default": 0,
      "import/no-named-as-default-member": 0,
      "import/no-unresolved": 0, // Disabled: Typically handles by the `import/resolver` setting below.
    },
  },

  // --- Global Settings for the Import Plugin ---

  {
    settings: {
      // Configuration for how ESLint resolves imported modules.
      "import/resolver": {
        // Tells the import plugin to use TypeScript's path resolution logic (via tsconfig.json).
        typescript: true,
        // Also enables standard Node.js module resolution.
        node: true,
      },
    },
  },
]);
