module.exports = {
    env: {
      es2021: true,
      node: true,
    },
    extends: [
      'airbnb-base',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      "@remix-run/eslint-config",
      "@remix-run/eslint-config/node"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-useless-constructor': 'off',
      'max-len': 'off',
      'import/no-cycle': 'off',
    },
  };
  