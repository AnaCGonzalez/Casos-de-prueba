/// <reference types="Cypress" />

describe("Todos los campos obligatorios", () => {
    before(() => {
      // Entramos a la página
      cy.visit("http://atom-admin-dev.s3-website-us-east-1.amazonaws.com/#/login");
      cy.get("#email").type("ana.caro@yopmail.com");
      cy.get("#password").type("Atom12345");
      cy.get(".btn").click();
      cy.wait(5000)
    });
  
    it("Todos los campos obligatorios", () => {
      // Navegar a la sección de clases y crear una nueva clase
      cy.get('a[href="#/fitness-classes"]').click();
      cy.get('a[href="#/fitness-classes/planning/"]').click();
      cy.get('a[href="#/fitness-classes/planning/create"]').click();
  
      // Llenar todos los campos obligatorios
      cy.get("#class_name").type("Barre Avanzado");
      cy.get("#branch_id").select("2");
      cy.get("#coach_id").select("9");
      cy.get(".el-select__input").type("Barre").then(() => {
          cy.get(".el-select-dropdown__item").contains("Barre").click();
        });
      cy.get("#category_id").select("5");
      cy.get("#class_type").select("ftf");
      cy.get("#class_capacity").type("-8");
      cy.get("#start_date").clear().type("19-10-2024").type("{enter}").tab().type("18:00").type("{enter}").tab().type('50');
  
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe

  // Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});