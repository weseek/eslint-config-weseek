module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    // https://github.com/Shopify/eslint-plugin-shopify/issues/159#issuecomment-485813838
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  plugins: [
    '@typescript-eslint',
  ],
};
