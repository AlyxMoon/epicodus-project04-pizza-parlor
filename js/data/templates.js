/* eslint-disable no-unused-vars */

const templatePageHeader = ({
  ordering = false,
} = {}) => {
  const template = document.createElement('template')

  const headerContent = `
    <h1>Pete's Pizza</h1>
    <h2>pizza, it's what humans crave!</h2>
    
    <button
      id="begin-ordering"
      class="btn btn-primary mt-2"
    >Get some pizza</button>
  `.trim()

  template.innerHTML = `
    <div class="hero-content">
      ${!ordering ? headerContent : ''}
    </div>
  `.trim()

  return template.content.firstChild
}

const templatePizzaForm = ({
  pizza = {},
} = {}) => {
  const template = document.createElement('template')

  const sizeOptions = Object.entries(pizzaSizes).map(([type, data]) => {
    const selected = pizza.size === type

    return `
      <option value="${type}" ${selected ? 'selected' : ''}>
        ${type} ($${data.price})
      </option>
    `.trim()
  }).join('')

  const sauceOptions = Object.entries(pizzaSauces).map(([type, data]) => {
    const selected = pizza.sauce === type

    return `
      <option value="${type}" ${selected ? 'selected' : ''}>
        ${type} ($${data.price})
      </option>
    `.trim()
  }).join('')

  const cheeseOptions = Object.entries(pizzaCheeses).map(([type, data]) => {
    const selected = pizza.cheese === type

    return `
      <option value="${type}" ${selected ? 'selected' : ''}>
        ${type} ($${data.price})
      </option>
    `.trim()
  }).join('')

  const toppingOptions = Object.entries(pizzaToppings).map(([type, data]) => {
    const selected = pizza.toppings.includes(type)

    return `
      <div class="form-check">
        <label for="input-pizza-topping-${type}">
          <input
            type="checkbox"
            id="input-pizza-topping-${type}" 
            class="form-check-input" 
            ${selected ? 'checked' : ''}
          />
          ${type} ($${data.price})
        </label>
      </div>
    `.trim()
  }).join('')

  template.innerHTML = `
    <form id="pizzaForm" class="row">
      <div class="col-12 my-2">
        <label for="input-pizza-size">Size</label>
        <select id="input-pizza-size" name="input-pizza-size" class="form-select">
          ${sizeOptions}
        </select>
      </div>

      <div class="col-12 my-2">
        <label for="input-pizza-sauce">Sauce</label>
        <select id="input-pizza-sauce" class="form-select">
          ${sauceOptions}
        </select>
      </div>

      <div class="col-12 my-2">
        <label for="input-pizza-cheese">Cheese</label>
        <select id="input-pizza-cheese" class="form-select">
          ${cheeseOptions}
        </select>
      </div>

      <div class="col-12 my-2">
        <p>Toppings</p>
        ${toppingOptions}
      </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Order</button>
    </form>
  `.trim()

  return template.content.firstChild
}

const templateShowCurrentOrder = ({
  pizzas = [],
  price = 0,
} = {}) => {
  const template = document.createElement('template')

  template.innerHTML = `
    <span>hi</span>
  `.trim()

  return template.content.firstChild
}

const templateTestResult = ({
  description = '',
  valid = '',
  incorrectText = '',
} = {}) => {
  const template = document.createElement('template')

  const listClasses = 'list-group-item text-light ' +
    `${valid ? 'bg-success' : 'bg-danger'}`

  template.innerHTML = `
    <li class="${listClasses}">
      <h6 class="font-bold">${description}</h6>
      ${!valid ? `<p>${incorrectText}</p>` : ''}
    </li>
  `.trim()

  return template.content.firstChild
}

const templateTestSpacer = (description = '') => {
  const template = document.createElement('template')

  template.innerHTML = `
    <li class="py-3 bg-dark text-light list-group-item">
      <h3>${description}</h3>
    </li>
  `.trim()

  return template.content.firstChild
}
