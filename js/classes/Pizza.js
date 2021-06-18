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
