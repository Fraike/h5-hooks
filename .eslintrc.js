/** @format */

module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'], //定义文件继承的子规范
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
    semi: ['error', 'never'], // 禁止使用分号
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
