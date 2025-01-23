// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: { ...globals.browser, process: 'readonly' } } },
  {
    rules: {
      eqeqeq: 'off',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'jsdoc/require-description': 'error',
      'jsdoc/check-values': 'error',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },

  {
    ignores: ['.node_modules/*', 'dist'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      jsdoc: jsdoc, // Reference the actual plugin object
    },
  },
];
