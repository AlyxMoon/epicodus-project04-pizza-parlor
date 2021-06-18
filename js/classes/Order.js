
/* eslint-disable-next-line no-unused-vars */
class Order {
  constructor ({
    selectors = {
      header: 'body > header',
      beginOrdering: '#begin-ordering',
      content: '.main-section',
    },
  } = {}) {
    this.pizzas = []
    this.selectors = selectors
    this.state = 'not-ordering'
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

  beginOrdering () {
    this.state = 'begin-ordering'
    this.render()
  }

  addEventListeners () {
    const elOrder = document.querySelector(this.selectors.beginOrdering)
    if (elOrder) {
      elOrder.addEventListener('click', () => this.beginOrdering())
    }
  }

  render () {
    const ordering = this.state !== 'not-ordering'

    const header = document.querySelector(this.selectors.header)
    const headerContent = templatePageHeader({ ordering })

    header.innerHTML = ''
    header.append(headerContent)

    if (ordering) {
      document.querySelector(this.selectors.header).classList.add('small')
    } else {
      document.querySelector(this.selectors.header).classList.remove('small')
    }

    this.addEventListeners()
  }
}
