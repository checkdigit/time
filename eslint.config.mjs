import checkdigitConfig from '@checkdigit/eslint-config';

export default [
  ...checkdigitConfig,
  {
    rules: {
      '@checkdigit/file-path-comment': 'off',
      'markdown/no-missing-label-refs': 'off',
      'markdown/fenced-code-language': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
