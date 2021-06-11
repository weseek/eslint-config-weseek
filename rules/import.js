module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'import/no-unresolved': [
      'error',
      'ignorePackages',
      {
        vue: 'never',
      }
    ],
  },
};
