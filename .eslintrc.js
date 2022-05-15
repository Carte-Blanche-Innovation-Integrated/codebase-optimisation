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

/*
--> Explanations
No-debugger rule. If you’re working against the deadlines, it’s very possible to sometimes forget to clear up the debugger code from your codebase, which can go into production and cause the browser to open the debugger. This linter rule will create an error and will warn you if there are any debugger statements in your codebase. 
https://eslint.org/docs/rules/no-debugger

No-unused-vars. It’s a usual case to declare some variables, but not end up using them. This rule negates the possibility of having unused variables, functions, and function parameters. 
https://eslint.org/docs/rules/no-unused-vars

camelCase rule. It is preferred to standardize the way you declare variables which increases the code readability and maintains consistency. This rule will make sure that all the variables declared are camelCase. 
'camelcase': [1, {properties: 'always'}],

Single quotes rule. Sometimes, inconsistency when working with strings, can be visually unappealing. Some of your codebases have strings declared with a single quote and some with double quotes. To keep it consistent, a rule for this can be added in the Linter.

Max-len rule. Having no limit to the number of characters that can be used in a single line can make the readability of your code poor. This rule restricts the number of lines that can be used in a single line. 

No-console rule. If you’re using the traditional, unadvised way of debugging, by putting in so many console statements, you can sometimes forget to clear them up. This rule triggers a warning if you have a console statement in your codebase. 

Max-props rule. If you are using a framework that allows passing props from a parent component to a child component, like React or Vue, this rule can increase the readability of your code by allowing only one prop per line. 

Sort-props. Sometimes when a component is receiving a lot of props, it can be difficult to find a specific prop you are looking for in just a look. Alphabetically ordering them could solve the problem and this rule makes sure all your props are alphabetically listed. 

Sort-import: Components might have multiple imports, and to make them more readable, you can add a rule to sort the imports alphabetically in your codebase. 

*/
