module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    worker: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'writable',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
  },
}
