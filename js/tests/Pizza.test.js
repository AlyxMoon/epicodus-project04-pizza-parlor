
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

  testManager.addTest({
    description: 'The pizza object should be created with the default settings overriden by provided arguments',
    func: (args) => new Pizza(args),
    args: [{
      size: 'large',
      sauce: 'none',
      cheese: 'feta',
      toppings: ['pepperoni', 'mushrooms'],
    }],
    expected: (actual) => {
      return (
        actual.size === 'large' &&
        actual.sauce === 'none' &&
        actual.cheese === 'feta' &&
        actual.toppings.length === 2 &&
        actual.toppings[0] === 'pepperoni' &&
        actual.toppings[1] === 'mushrooms'
      )
    },
  })

  testManager.addTest({
    description: 'Pizza.addTopping() will add that topping to the list',
    func: () => {
      const pizza = new Pizza({ toppings: ['pepperoni'] })
      pizza.addTopping('sausage')
      return pizza.toppings
    },
    expected: ['pepperoni', 'sausage'],
  })

  testManager.addTest({
    description: 'Pizza.addTopping() will not add a topping already in the list',
    func: () => {
      const pizza = new Pizza({ toppings: ['pineapple'] })
      pizza.addTopping('pineapple')
      return pizza.toppings
    },
    expected: ['pineapple'],
  })
}
