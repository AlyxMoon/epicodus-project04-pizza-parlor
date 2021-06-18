
/* eslint-disable-next-line no-unused-vars */
const addTestsForPizza = testManager => {
  testManager.addSpacer('class Pizza()')

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
      toppings: ['pepperoni', 'mushroom'],
    }],
    expected: (actual) => {
      return (
        actual.size === 'large' &&
        actual.sauce === 'none' &&
        actual.cheese === 'feta' &&
        actual.toppings.length === 2 &&
        actual.toppings[0] === 'pepperoni' &&
        actual.toppings[1] === 'mushroom'
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

  testManager.addTest({
    description: 'Pizza.removeTopping() will remove that topping from the list',
    func: () => {
      const pizza = new Pizza({ toppings: ['pineapple', 'sausage', 'mushroom'] })
      pizza.removeTopping('sausage')
      return pizza.toppings
    },
    expected: ['pineapple', 'mushroom'],
  })

  testManager.addTest({
    description: 'Pizza.removeTopping() will do nothing if the topping is not in the list',
    func: () => {
      const pizza = new Pizza({ toppings: ['pineapple', 'sausage', 'mushroom'] })
      pizza.removeTopping('anchovies')
      return pizza.toppings
    },
    expected: ['pineapple', 'sausage', 'mushroom'],
  })

  testManager.addTest({
    description: 'Pizza.getPrice() list the correct price based on set ingredients (prices determined from data/pizzaOptions.js) with default ingredients',
    func: () => {
      const pizza = new Pizza()
      return pizza.getPrice()
    },
    expected: 9,
  })

  testManager.addTest({
    description: 'Pizza.getPrice() list the correct price based on set ingredients (prices determined from data/pizzaOptions.js) with some changed ingredients',
    func: () => {
      const pizza = new Pizza({
        size: 'large',
        cheese: 'none',
        toppings: ['pepperoni'],
      })
      return pizza.getPrice()
    },
    expected: 17.5,
  })
}
