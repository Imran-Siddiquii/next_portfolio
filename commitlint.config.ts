module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'test', 'revert'],
    ],
    'header-max-length': [2, 'always', 100],
  },
};
