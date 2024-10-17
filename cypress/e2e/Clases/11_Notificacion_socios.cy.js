/// <reference types="Cypress" />

describe("Notificacion de socios", () => {
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
      cy.get("#class_name").type("Funcional Express")
      cy.get("#branch_id").select("7")
      cy.get("#coach_id").select("8")
      cy.get(".el-select__input").type("Funcional").then(() => {
          cy.get(".el-select-dropdown__item").contains("Funcional").click()
      });
      cy.get("#category_id").select("27")
      cy.get("#class_type").select("ftf")
      cy.get("#class_capacity").type("20")
      cy.get("#start_date").clear().type("26-10-2024").type("{enter}").tab()
      .clear().type("11:00").type("{enter}").tab().type("45")
      
      cy.wait(1000);
      //Boton de notificación de socios
      cy.get('#send_notification').click({force: true});
      
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe

  // Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });