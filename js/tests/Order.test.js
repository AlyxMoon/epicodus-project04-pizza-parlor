
/* eslint-disable-next-line no-unused-vars */
const addTestsForOrder = testManager => {
  testManager.addSpacer('class Order()')

  testManager.addTest({
    description: 'The order object should be created with default settings (empty pizza array)',
    func: () => new Order(),
    expected: (actual) => {
      return actual.pizzas.length === 0
    },
  })

  testManager.addTest({
    description: 'Order.addPizza() adds a pizza to the list',
    func: () => {
      const order = new Order()
      return order.addPizza({ size: 'small', sauce: 'none' })
    },
    expected: (actual) => {
      return (
        actual.pizzas.length === 1 &&
        actual.pizzas[0].size === 'small' &&
        actual.pizzas[0].sauce === 'none'
      )
    },
  })

  testManager.addTest({
    description: 'Order.getPrice() returns the price of all pizzas combined',
    func: () => {
      const order = new Order()
      order.addPizza({ size: 'small', sauce: 'none' })
      order.addPizza({
        cheese: 'none',
        toppings: ['pepperoni', 'pineapple', 'mushroom'],
      })
      return order.getPrice()
    },
    expected: 13.5,
  })
}
