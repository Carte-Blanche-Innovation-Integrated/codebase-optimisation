module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'testing-library'],
  rules: {
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'camelcase': [1, {properties: 'always'}],
    'jsx-quotes': [1, 'prefer-single'],
    'max-len': [
      1,
      {
        code: 150,
      },
    ],
    'new-cap': [1, {capIsNewExceptionPattern: '^With*()'}],
    'no-console': 1,
    'no-debugger': 1,
    'no-invalid-this': 0,
    'prefer-const': 0,
    'react/jsx-max-props-per-line': [1, {maximum: 1, when: 'always'}],
    'react/jsx-sort-props': [1, {ignoreCase: true}],
    'react/sort-prop-types': [1, {ignoreCase: true}],
    'sort-imports': [
      1,
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreMemberSort: true,
      },
    ],
    'no-unused-vars': 1,
  },
  settings: {
    react: {
      version: '17.0.0',
    },
  },
};
