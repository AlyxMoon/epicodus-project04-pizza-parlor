
/* eslint-disable no-unused-vars */

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
