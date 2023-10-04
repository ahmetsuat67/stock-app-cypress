describe("register-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });

  it("register", () => {
    cy.url().should("include", "/");
    cy.get("[data-test='registerLink']")
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/register");
    cy.get("[data-test='registerHeader']").contains("Register").should("be.visible");
    cy.get("[data-test='userName']")
      .should("be.visible").type("asptest1")
    cy.get("[data-test='firstName']")
      .should("be.visible").type("asp1")
    cy.get("[data-test='lastName']")
      .should("be.visible").type("test1")
    cy.get("[data-test='email']")
      .should("be.visible").type("asptest1@gmaail.com")
    cy.get("[data-test='password']")
      .should("be.visible").type("Clarusway1.")
    cy.get("[data-test='sbmtRegister']")
      .should("be.visible").click({ force: true });
    cy.url().should("include", "/stock");
    cy.get("[data-test='logoutBtn']", { timeout: 20000 }).should("be.visible").click();

  });
});
