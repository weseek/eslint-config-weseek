module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    require.resolve('./rules/base'),
    require.resolve('./rules/import'),
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
