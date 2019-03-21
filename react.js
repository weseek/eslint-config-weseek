module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'airbnb/rules/react',
    require.resolve('./rules/base'),
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
  },
};
