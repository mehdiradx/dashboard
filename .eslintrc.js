module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error', { semi: true }],
    'react/jsx-uses-react': 'error',
    'react/prop-types': 'off', // TODO: fix it
  },
};
