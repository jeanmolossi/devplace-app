module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'class-methods-use-this': 'off',

    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'no-use-before-define': 'off',

    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'never',
        groups: [
          '/^react/',
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/style-prop-object': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
    react: { version: 'detect' },
  },
};
