import checkdigitConfig from '@checkdigit/eslint-config';

export default [
  ...checkdigitConfig,
  {
    files: ['src/date-fns/**', 'src/date-fns-tz/**'],
    rules: {
      '@checkdigit/file-path-comment': 'off',
      'markdown/no-missing-label-refs': 'off',
      'markdown/fenced-code-language': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
