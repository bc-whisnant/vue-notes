// https://docs.cypress.io/api/introduction/api.html
let inputProcess = () => {
  const testingVal = 'Testing 123'
  cy.get('textarea').type(testingVal)
  cy.get('.btn').click()
  cy.get('.note-box').contains(testingVal)
}

let deleteProcess = () => {
  cy.get('.trash').click()
  cy.get('.note-box').should('not.exist')
}

let checkForAlert = () => {
  cy.get('.btn').click()
  cy.on('window:alert', txt => {
      expect(txt).to.contains('Please enter a note')
  })
}

describe('Page Is Loading Correctly', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Notes')
  })
})


describe('Submission Without Value Throws Alert', () => {
  it('Throws alert when empty value is submitted', () => {
    checkForAlert()
  })
})


describe('Input Submission Works Correctly', () => {
  it('Input is functioning correctly', () => {
    inputProcess()
  })
})

describe('Deleting Todo Works Correctly', () => {
  it('Deletes a todo', () => {
    deleteProcess()
  })
})

describe('Deleting Todo Works Correctly', () => {
  it('Testing', () => {
    cy.get('.note-box').contains('123456')
  })
})
