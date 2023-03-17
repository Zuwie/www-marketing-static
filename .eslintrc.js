module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'next', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'next',
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'no-return-assign': 'off',
        'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['cProps']}],
        'func-names': ['error', 'as-needed'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}],
        'jsx-a11y/media-has-caption': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'internal',
              },
            ],
            'newlines-between': 'ignore',
          },
        ],
      },
    },
  ],
};
