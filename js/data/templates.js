
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
