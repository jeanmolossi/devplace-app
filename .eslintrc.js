module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'import/no-cycle': 'off',

    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
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

    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '**/tsconfig.json',
      },
    },
  },
};
