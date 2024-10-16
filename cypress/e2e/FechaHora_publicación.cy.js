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
      cy.get("#class_name").type("Zumba");
      cy.get("#branch_id").select("1");
      cy.get("#coach_id").select("30");
      cy.get(".el-select__input").type("PRUEBA LAYOUT").then(() => {
          cy.get(".el-select-dropdown__item").contains("PRUEBA LAYOUT").click();
        });
      cy.get("#category_id").select("24");
      cy.get("#class_type").select("ftf");
      cy.get("#class_capacity").type("5");
      cy.get("#start_date").clear().type("26-10-2024").type("{enter}").tab().type("09:30").type("{enter}").tab().type("20");
      
      //Checkbox Fecha/Hora publicación
      cy.contains('label.custom-control-label', 'Fecha/Hora Publicación').click();
      cy.wait(2000);
      cy.contains('label.custom-control-label', 'Fecha/Hora Publicación').click();
      cy.wait(1000); 
      
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe