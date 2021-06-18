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
    pizzaSizes: 'readonly',
    pizzaSauces: 'readonly',
    pizzaCheeses: 'readonly',
    pizzaToppings: 'readonly',

    addTestsForOrder: 'readonly',
    addTestsForPizza: 'readonly',

    templatePageHeader: 'readonly',
    templatePizzaForm: 'readonly',
    templateTestResult: 'readonly',
    templateTestSpacer: 'readonly',

    Order: 'readonly',
    Pizza: 'readonly',
    TestManager: 'readonly',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
