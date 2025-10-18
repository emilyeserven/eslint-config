/*
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { globalIgnores } from "eslint/config";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

import importConfig from "./lintConfigs/importConfig.config.js";
import jsConfig from "./lintConfigs/jsConfig.config.js";
import middlewareConfig from "./lintConfigs/middlewareConfig.config.js";
import reactConfig from "./lintConfigs/reactConfig.config.js";
import tailwindConfig from "./lintConfigs/tailwindConfig.config.js";
import tsConfig from "./lintConfigs/tsConfig.config.js";
import tsQueryConfig from "./lintConfigs/tsQueryConfig.config.js";
// eslint-disable-next-line import/max-dependencies
import tsRouterConfig from "./lintConfigs/tsRouterConfig.config.js";
*/
// import stylisticConfig from "./lintConfigs/stylisticConfig.config.js";
import {defineConfig, globalIgnores} from "eslint/config";

import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  globalIgnores(["**/dist/**/*"]),
  stylistic.configs.recommended,
  stylistic.configs.customize({
    semi: true,
  }),
  {
    plugins: {
      "@stylistic": stylistic,
    },
  },
  {
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/object-property-newline": ["error", {
        allowAllPropertiesOnSameLine: false,
      }],
      "@stylistic/object-curly-newline": ["error", {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 1,
        },
      }],
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
      "@stylistic/brace-style": "error",
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", {
        maximum: 1,
      }],
      "@stylistic/jsx-one-expression-per-line": ["error", {
        allow: "non-jsx",
      }],
      "@stylistic/jsx-self-closing-comp": "error",
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
