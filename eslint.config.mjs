import checkdigitConfig from '@checkdigit/eslint-config';

const eslintCommentsPlugin = checkdigitConfig.find(
  (config) =>
    config.plugins?.['@eslint-community/eslint-comments'] !== undefined,
)?.plugins?.['@eslint-community/eslint-comments'];

if (eslintCommentsPlugin === undefined) {
  throw new Error('Unable to find the ESLint comments plugin');
}

export default [
  ...checkdigitConfig,
  {
    files: ['src/date-fns/**', 'src/date-fns-tz/**'],
    plugins: {
      'eslint-comments': eslintCommentsPlugin,
    },
    rules: {
      '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
      '@checkdigit/file-path-comment': 'off',
      'eslint-comments/no-unlimited-disable': 'error',
      'markdown/no-missing-label-refs': 'off',
      'markdown/no-space-in-emphasis': 'off',
      'markdown/no-unused-definitions': 'off',
      'markdown/fenced-code-language': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
