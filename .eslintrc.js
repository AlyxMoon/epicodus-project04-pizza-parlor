module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    addTestsForPizza: 'readonly',
    templateTestResult: 'readonly',
    templateTestSpacer: 'readonly',
    Pizza: 'readonly',
    TestManager: 'readonly',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
