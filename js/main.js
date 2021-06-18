
const eventToggleTestDisplay = (event) => {
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
  testManager.runTests()

  addEventListeners()
}

main()
