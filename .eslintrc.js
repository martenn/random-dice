module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/camelcase': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/display-name': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
}