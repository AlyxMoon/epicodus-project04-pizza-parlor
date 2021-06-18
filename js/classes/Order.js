
/* eslint-disable-next-line no-unused-vars */
class Order {
  constructor ({
    selectors = {
      header: 'body > header',
      beginOrdering: '#begin-ordering',
      content: '.main-section',
      pizzaForm: '#pizzaForm',
    },
  } = {}) {
    this.pizzas = []
    this.selectors = selectors

    // possible states
    // intro -> when first starting app
    // making-pizza -> presents form for pizza
    // finished-pizza -> pizza has been submitted
    // finished-ordering -> all done, no more input
    this.state = 'intro'
  }

  get price () {
    return this.getPrice()
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
    this.state = 'making-pizza'
    this.pizzas.push(new Pizza())
    this.render()
  }

  handlePizzaSubmission (event) {
    event.preventDefault()

    const size = document.querySelector('#input-pizza-size').value
    const sauce = document.querySelector('#input-pizza-sauce').value
    const cheese = document.querySelector('#input-pizza-cheese').value
    const toppings = [...document.querySelectorAll('#pizzaForm input[type="checkbox"]:checked')].map(element => {
      return element.value
    })

    const pizza = this.pizzas[this.pizzas.length - 1]
    pizza.size = size
    pizza.sauce = sauce
    pizza.cheese = cheese
    pizza.toppings = toppings

    this.state = 'finished-pizza'
    this.render()
  }

  addEventListeners () {
    const elOrder = document.querySelector(this.selectors.beginOrdering)
    if (elOrder) {
      elOrder.addEventListener('click', () => this.beginOrdering())
    }

    const elPizzaForm = document.querySelector(this.selectors.pizzaForm)
    if (elPizzaForm) {
      elPizzaForm.addEventListener('submit', (event) => this.handlePizzaSubmission(event))
    }

    const btnAddPizza = document.querySelector('#action-new-pizza')
    if (btnAddPizza) {
      btnAddPizza.addEventListener('click', () => this.beginOrdering())
    }

    const btnRemovePizza = document.querySelectorAll('[data-action="remove-pizza"]')

    for (const elButton of btnRemovePizza) {
      elButton.addEventListener('click', (event) => {
        const index = event.currentTarget.dataset.pizzaIndex
        this.pizzas.splice(index, 1)
        this.render()
      })
    }
  }

  render () {
    const header = document.querySelector(this.selectors.header)
    const headerContent = templatePageHeader({
      ordering: this.state !== 'intro',
    })

    header.innerHTML = ''
    header.append(headerContent)

    if (this.state === 'intro') {
      document.querySelector(this.selectors.header).classList.remove('small')
    }

    if (this.state === 'making-pizza') {
      document.querySelector(this.selectors.header).classList.add('small')

      const activePizza = this.pizzas[this.pizzas.length - 1]

      const content = document.querySelector(this.selectors.content)
      const contentTemplate = templatePizzaForm({ pizza: activePizza })

      content.innerHTML = ''
      content.append(contentTemplate)
    }

    if (this.state === 'finished-pizza') {
      document.querySelector(this.selectors.header).classList.add('small')

      const content = document.querySelector(this.selectors.content)
      const contentTemplate = templateShowCurrentOrder({
        pizzas: this.pizzas,
        price: this.price,
      })

      content.innerHTML = ''
      content.append(contentTemplate)
    }

    this.addEventListeners()
  }
}
