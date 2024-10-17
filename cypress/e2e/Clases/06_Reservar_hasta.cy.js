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
  
    it("Campos obligatorios", () => {
      // Navegar a la sección de clases y crear una nueva clase
      cy.get('a[href="#/fitness-classes"]').click();
      cy.get('a[href="#/fitness-classes/planning/"]').click();
      cy.get('a[href="#/fitness-classes/planning/create"]').click();

      // Llenar todos los campos obligatorios
      cy.get("#class_name").type("Clase Funcional");
      cy.get("#branch_id").select("9");
      cy.get("#coach_id").select("16");
      cy.get(".el-select__input").type("Funcional").then(() => {
          cy.get(".el-select-dropdown__item").contains("Funcional").click();
        });
      cy.get("#category_id").select("33");
      cy.get("#class_type").select("ftf");
      cy.get("#class_capacity").type("25");
      cy.get("#start_date").clear().type("26-10-2024").type("{enter}").tab()
      .type("12:10").type("{enter}").tab().type("50");
      
      //Checkbox Bloquear horario de reserva hasta y agregar fecha
      cy.wait(2000);
      cy.contains('label.custom-control-label', ' Bloquear horario de reserva hasta ').click()
      cy.wait(1000);   
      cy.get('.input-group.form-control-alternative input.form-control').eq(2).clear().type('20-10-2024 09:30').type('{enter}');
      cy.wait(1000);
      
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe

  // Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});