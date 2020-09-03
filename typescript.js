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
  rules: {
    // respect eslint-config-airbnb
    // see: https://github.com/airbnb/javascript/blob/5b462a04cdfebba712a3df18926edfcb4103d2a9/packages/eslint-config-airbnb-base/rules/best-practices.js#L88-L94
    '@typescript-eslint/no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],
  }
};
