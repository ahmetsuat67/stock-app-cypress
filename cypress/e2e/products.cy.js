describe("products-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });

  it("products", () => {
    cy.login();
    cy.get("[data-test='titleProducts']")
      .contains("Products")
      .should("be.visible")
      .click({ force: true });
    cy.get("[data-test='productsHeader']")
      .contains("Products")
      .should("be.visible");
   
    cy.get("[data-test='productsBtn']", { timeout: 20000 })
      .contains("NEW PRODUCT")
      .should("be.visible")
      .click({ force: true });
    cy.get("[data-test='productsCat']", { timeout: 20000 }).contains(
      "Categories"
    );

    cy.get('[data-test="selectCat"] > #category').click({ force: true });
    cy.get("[data-test='Drink']").click({ force: true });
    cy.get("[data-test='productsBrands']").contains("Brands");
    cy.get('[data-test="selectBrand"] > #brand').click({ force: true });
    cy.get("[data-test='Test Brand']").click({ force: true });
    cy.get("#name")
      .should("be.visible")
      .click({ force: true });
    cy.get("#name-label").contains("Product Name").should("be.visible");
    cy.get("[data-test='productsName']")
      .should("be.visible")
      .click({ force: true })
      .type("Test Product");

    cy.get("[data-test='productsSbmt']")
      .contains("Submit")
      .should("be.visible")
      .click({ force: true });
    cy.get(
      '[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
    ).should("be.visible");
    cy.get(
      '[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
    ).should("be.visible");
    cy.get(
      '[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
    ).should("be.visible");
    cy.get(
      ".MuiDataGrid-columnHeader--numeric > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer"
    ).should("be.visible");
    cy.get(
      '[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
    ).should("be.visible");
    cy.get("[data-testid='DeleteForeverIcon']")
      .should("be.visible")
      .first()
      .click({ force: true });
  });
});
