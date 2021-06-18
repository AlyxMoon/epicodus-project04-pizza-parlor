
/* eslint-disable-next-line no-unused-vars */
const addTestsForPizza = testManager => {
  testManager.addTest({
    description: 'The pizza object should be created with default settings (medium size, tomato sauce, mozzarella cheese, no toppings)',
    func: () => new Pizza(),
    expected: (actual) => {
      return (
        actual.size === 'medium' &&
        actual.sauce === 'tomato' &&
        actual.cheese === 'mozzarella' &&
        actual.toppings.length === 0
      )
    },
  })
}
