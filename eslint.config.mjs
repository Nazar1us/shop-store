import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add Prettier integration
  "prettier", // Disables conflicting ESLint rules
  "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
];

export default eslintConfig;
