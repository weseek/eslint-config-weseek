module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  env: {
  },
  globals: {
  },
  plugins: [
    'vue'
  ],
  rules: {
    'semi': ['error', 'always'],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
};
