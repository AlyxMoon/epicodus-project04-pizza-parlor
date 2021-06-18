// I prefer the new class-syntax but to satisfy objectives I'll use the function/prototype syntax for this item

/* eslint-disable-next-line no-unused-vars */
function Pizza ({
  size = 'medium',
  sauce = 'tomato',
  cheese = 'mozzarella',
  toppings = [],
} = {}) {
  this.size = size
  this.sauce = sauce
  this.cheese = cheese
  this.toppings = toppings.slice()
}

Pizza.prototype.addTopping = function (topping) {
  const index = this.toppings.indexOf(topping)

  if (index > -1) return
  this.toppings.push(topping)

  return this
}

Pizza.prototype.removeTopping = function (topping) {
  this.toppings = this.toppings.filter(existingTopping => {
    return existingTopping !== topping
  })

  return this
}

Pizza.prototype.getPrice = function () {
  console.log(this)
  const sizePrice = (pizzaSizes[this.size] || {}).price || 0
  const saucePrice = (pizzaSauces[this.sauce] || {}).price || 0
  const cheesePrice = (pizzaCheeses[this.cheese] || {}).price || 0
  const toppingPrice = this.toppings.reduce((sum, topping) => {
    return sum + ((pizzaToppings[topping] || {}).price || 0)
  }, 0)

  return sizePrice + saucePrice + cheesePrice + toppingPrice
}
