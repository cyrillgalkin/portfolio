import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      // Require arrow functions instead of function expressions
      'prefer-arrow-callback': 'error',

      // Allow empty interface declarations that extend a single type
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],

      // Require template literals instead of string concatenation
      'prefer-template': 'error',

      // Show warning for declared but unused variables
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  }),
];

export default eslintConfig;