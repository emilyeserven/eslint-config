import main from "./index.js";
import {defineConfig} from "eslint/config";
export default defineConfig([
    {
        files: ["**/*.js"],
        extends: [main],
    },
])