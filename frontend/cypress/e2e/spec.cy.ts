describe('E2E test', () => {
  beforeEach('Go to Home page', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', '/')
  })

  it('Registers a user', () => {
    cy.contains('Register Users').click()
    cy.url().should('include', 'registerUser')

    cy.get('.firstName').type('Giga')
    cy.get('.lastName').type('Chad')
    cy.get('.email').type('Giga@email.com')
    cy.get('.password').type('I_Love_My_Little_Ponies')
    cy.contains('Submit').click()
  })

  it('Edits the user', () => {
    cy.visit('http://localhost:5173/showUser')

    cy.get('.card').filter(':contains("Giga")').contains('Edit').click()
    cy.url().should('include', 'editUser')

    cy.get('.firstName').get('input').clear()
    cy.get('.firstName').type('Twilight')
    cy.get('.lastName').clear()
    cy.get('.lastName').type('Sparkle')
    cy.get('.email').clear()
    cy.get('.email').type('I_Love_Pinkie_Pie@email.com')
    cy.get('.password').clear()
    cy.get('.password').type('IncestLord3')
    cy.contains('Confirm').click()
  })

  it('Removes user', () => {
    cy.contains('Show Users').click()
    cy.url().should('include', 'showUser')

    cy.get('.card').filter(':contains("Twilight")').contains('Delete').click()
  })
})
