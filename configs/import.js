/**
 * @module configs/import
 * @description Enforces consistent import ordering, type-import style, and bans CommonJS require syntax.
 */
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  {
    rules: {
      // Enforce grouped, alphabetized imports with React first
      "import/order": [
        "error",
        {
          "groups": [
            "type",
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "pathGroups": [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          "pathGroupsExcludedImportTypes": ["type"],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Prefer `import type { X }` over inline `import { type X }` for cleaner tree-shaking
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

      // Imports should actually use what they bring in; CSS is the exception since it just applies styles
      "import/no-unassigned-import": [
        "error",
        {
          allow: ["**/*.css"],
        },
      ],

      // Visually separate imports from application code
      "import/newline-after-import": "error",

      // Use package names, not relative paths between packages
      "import/no-relative-packages": "error",

      // Prevent filesystem absolute paths (e.g., /Users/...)
      "import/no-absolute-path": "error",

      // Catch accidental duplicate imports of the same module
      "import/no-duplicates": "error",

      // Prevent circular self-references
      "import/no-self-import": "error",

      // ESM only — no require() or module.exports
      "import/no-commonjs": "error",

      // Flag files with too many dependencies as a complexity signal
      "import/max-dependencies": [
        "warn",
        {
          max: 10,
          ignoreTypeImports: true,
        },
      ],

      /* Causing type-resolution errors; disabled until resolver config is stable */
      "import/default": 0,
      "import/no-named-as-default-member": 0,
      "import/no-unresolved": 0,
    },
  },

  {
    settings: {
      "import/resolver": {
        // Use tsconfig paths for module resolution
        typescript: true,
        node: true,
      },
    },
  },
]);
