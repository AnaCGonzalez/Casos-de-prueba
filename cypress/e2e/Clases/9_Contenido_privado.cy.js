/// <reference types="Cypress" />

describe("Contenido privado", () => {
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
      cy.get("#class_name").type("Spinning nocturno")
      cy.wait(500);
      cy.get("#branch_id").select("5")
      cy.wait(500);
      cy.get("#coach_id").select("3")
      cy.wait(500);
      cy.get(".el-select__input").type("Spinning").then(() => {
          cy.get(".el-select-dropdown__item").contains("Spinning").click()
      });
      cy.wait(500);
      cy.get("#category_id").select("3")
      cy.wait(500);
      cy.get("#class_type").select("ftf")
      cy.wait(500);
      cy.get("#class_capacity").type("25")
      cy.wait(500);
      cy.get("#start_date").clear().type("19-10-2024").type("{enter}").tab()
      .clear().type("19:00").type("{enter}").tab().type("50")
      cy.wait(1000);

      //Contenido privado
      cy.contains('a.nav-link', 'Contenido privado').click();
      cy.wait(2000);
      cy.get('a.nav-link.active').should('contain', 'Contenido privado')
      .then(() => {
        cy.get('#__BVID__649').should('be.visible').click()
      .type('Guía de meditación en PDF y enlace a video exclusivo para repaso de la clase.')
      });
      cy.wait(1000);
      

      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe

  // Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });