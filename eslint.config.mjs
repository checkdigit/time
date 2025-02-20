import checkdigitConfig from '@checkdigit/eslint-config';

export default [
  ...checkdigitConfig,
  {
    rules: {
      'yml/no-empty-mapping-value': 'off',
      'markdown/fenced-code-language': 'off',
      'markdown/no-missing-label-refs': 'off',
      '@checkdigit/object-literal-response': 'off',
      '@typescript-eslint/no-deprecated': 'off',
      'unicorn/import-style': 'off',
      '@checkdigit/invalid-json-stringify': 'off',
      'unicorn/prefer-math-min-max': 'off',
      'unicorn/no-length-as-slice-end': 'off',
      'no-useless-assignment': 'off',
      'no-secrets/no-secrets': 'off',
      'unicorn/no-await-expression-member': 'off',
    },
  },
];
