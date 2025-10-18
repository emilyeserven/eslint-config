import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      "@stylistic/quote-props": 0,
      "@stylistic/semi": 0,
      "@stylistic/comma-dangle": 0,
    },
    plugins: {
      "@stylistic": stylistic,
    },
  },
]);
