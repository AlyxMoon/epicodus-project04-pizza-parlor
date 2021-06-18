
/* eslint-disable-next-line no-unused-vars */
class TestManager {
  constructor () {
    this.tests = []
  }

  addTest ({
    func = () => {},
    description = '',
    expected,
    args = [],
  } = {}) {
    this.tests.push(() => {
      const actual = func(...args)

      return {
        description: `${description}`,
        actual,
        expected,
        valid: this.checkActualEqualsExpected(actual, expected),
      }
    })
  }

  addSpacer (description = '') {
    this.tests.push(() => ({
      type: 'spacer',
      description,
    }))
  }

  runTests ({
    logResults = true,
    loggerArgs = {},
  } = {}) {
    const results = this.tests.map(test => test())

    if (!logResults) return results

    results.forEach(result => {
      if (result.type === 'spacer') {
        this.logSpacer({ result, ...loggerArgs })
      } else {
        this.logResult({ result, ...loggerArgs })
      }
    })
  }

  checkActualEqualsExpected (actual, expected) {
    if (typeof expected === 'function') {
      return expected(actual)
    }

    if (Array.isArray(actual) && Array.isArray(expected)) {
      return (
        actual.length === expected.length &&
        actual.every((a, index) => a === expected[index])
      )
    }

    return actual === expected
  }

  logResult ({
    result,
    container = '#output-tests',
    logToConsole = true,
  } = {}) {
    const actual = typeof result.actual === 'object'
      ? JSON.stringify(result.actual)
      : result.actual

    const expected = typeof result.expected === 'object'
      ? JSON.stringify(result.expected)
      : result.expected

    const incorrectText = `Incorrect | actual: ${actual} | expected: ${expected}`

    if (logToConsole) {
      console.log(`%c${result.description}`, 'font-weight: bold;')

      if (result.valid) {
        console.log('%c-- passed!', 'background-color: green')
      } else {
        console.log(
          `%c-- ${incorrectText}`,
          'background-color: #290000',
        )
      }
    }

    if (container) {
      const template = templateTestResult({
        description: result.description,
        valid: result.valid,
        incorrectText,
      })
      document.querySelector(container).append(template)
    }
  }

  logSpacer ({
    result,
    container = '#output-tests',
    logToConsole = true,
  }) {
    if (logToConsole) {
      console.log(
        `%c${result.description}`,
        'background-color: black; color: white; font-weight: bold; padding: 5px;',
      )
    }

    if (container) {
      const template = templateTestSpacer(result.description)
      document.querySelector(container).append(template)
    }
  }
}
