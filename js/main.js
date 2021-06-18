
const eventToggleTestDisplay = () => {
  const sections = document.querySelectorAll('main > section')
  for (const section of sections) {
    section.classList.toggle('d-none')
  }
}

const addEventListeners = () => {
  document.querySelector('#input-toggle-tests')
    .addEventListener('change', eventToggleTestDisplay)
}

const main = () => {
  const testManager = new TestManager()
  addTestsForPizza(testManager)
  addTestsForOrder(testManager)
  testManager.runTests()

  const order = new Order()
  order.render()

  addEventListeners(order)
}

main()
