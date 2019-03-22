# eslint-config-weseek

[![npm version](https://badge.fury.io/js/eslint-config-weseek.svg)](http://badge.fury.io/js/eslint-config-weseek)

Shareable configurations of ESLint for WESEEK, Inc. based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Usage

### Basics

http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

We export following ESLint configurations for your usage.

### Entry Points

* `weseek` - Our default ESLint rules based on [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).
    * **Requirements** - `babel-eslint`, `eslint-plugin-import`
* `weseek/react` - An additional rule sets which are based on [airbnb/rules/react](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js).
    * **Requirements** - `eslint-plugin-react`

