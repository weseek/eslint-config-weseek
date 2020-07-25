const path = require('path');

module.exports = {
  extends: [
    './react',
    './typescript',
  ],
  settings: {
    // prevent import/no-unresolved
    // see: https://qiita.com/282Haniwa/items/76d56a6a7e9d0db95a33
    'import/resolver': {
      typescript: {
        config: path.join(__dirname, './webpack.config.js'),
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // It's not required since Next.js will automatically add `import React from 'react'`
    'react/react-in-jsx-scope': 'off',
  }
};
