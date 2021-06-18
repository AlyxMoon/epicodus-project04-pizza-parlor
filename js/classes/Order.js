
/* eslint-disable-next-line no-unused-vars */
class Order {
  constructor () {
    this.pizzas = []
  }

  addPizza (pizzaOptions) {
    this.pizzas.push(new Pizza(pizzaOptions))
    return this
  }

  getPrice () {
    return this.pizzas.reduce((sum, pizza) => {
      return sum + pizza.getPrice()
    }, 0)
  }
}
