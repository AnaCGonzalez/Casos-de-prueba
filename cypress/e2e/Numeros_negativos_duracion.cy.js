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
      cy.get("#class_name").type("Spinning");
      cy.get("#branch_id").select("7");
      cy.get("#coach_id").select("8");
      cy.get(".el-select__input").type("INTEGRA ft BIKE UP").then(() => {
          cy.get(".el-select-dropdown__item").contains("INTEGRA ft BIKE UP").click();
        });
      cy.get("#category_id").select("27");
      cy.get("#class_type").select("event");
      cy.get("#class_capacity").type("8");
      cy.get("#start_date").clear().type("26-10-2024").type("{enter}").tab().type("16:00").type("{enter}").tab().type('-45');
  
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe