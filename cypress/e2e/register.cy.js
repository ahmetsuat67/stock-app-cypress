describe('stock register', () => {
  it('register', () => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1200, 1200)
    cy.url().should('include', '/')
    cy.get('[data-test="registerLink"]').contains("Don't you have an account?").click({ force: true })
    cy.url().should("include", "/register");
    cy.get("[data-test='registerHeader']").contains("Register")
    cy.get("[data-test='userName']")
      .should("be.visible").type("alberttest")
    cy.get("[data-test='firstName']")
      .should("be.visible").type("albert")
    cy.get("[data-test='lastName']")
      .should("be.visible").type("test")
    cy.get("[data-test='email']")
      .should("be.visible").type("alberttest@gmail.com")
    cy.get("[data-test='password']")
      .should("be.visible").type("Clarusway1.")
    cy.get("[data-test='sbmtRegister']")
      .should("be.visible").click({ force: true });
    cy.url().should("include", "/stock");
   
    
  })

})