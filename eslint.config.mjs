import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      // 'no-console': 'error'
      indent: ['error', 2],
      'keyword-spacing': 'error',
      'no-multiple-empty-lines': 'error',
      'eol-last': ['error', 'always'],
      semi: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'operator-assignment': 'error',
      'no-inner-declarations': [
        'error',
        'functions',
        { blockScopedFunctions: 'disallow' },
      ],
    },
  },
];

// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];