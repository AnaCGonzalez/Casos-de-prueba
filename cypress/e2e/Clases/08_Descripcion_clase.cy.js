/// <reference types="Cypress" />

describe("Descripcion de la clase", () => {
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
      cy.get("#class_name").type("Yoga al amanecer")
      cy.wait(1000);
      cy.get("#branch_id").select("1")
      cy.wait(1000);
      cy.get("#coach_id").select("17")
      cy.wait(1000);
      cy.get(".el-select__input").type("Yoga").then(() => {
          cy.get(".el-select-dropdown__item").contains("Yoga").click()
      });
      cy.wait(1000);
      cy.get("#category_id").select("4")
      cy.wait(1000);
      cy.get("#class_type").select("online")
      cy.wait(1000);
      cy.get("#class_capacity").type("30")
      cy.wait(1000);
      cy.get("#start_date").clear().type("26-10-2024").type("{enter}").tab()
      .clear().type("07:00").type("{enter}").tab().type("60")
      cy.wait(1000);

      //Descripción de la clase
      cy.contains('a.nav-link', 'Contenido privado').click();
      cy.wait(2000);
      cy.contains('a.nav-link', 'Descripción de la clase').click();
      cy.wait(2000);
      cy.get('#__BVID__643').click()
      .type('Sesión de yoga matutino para revitalizar cuerpo y mente.')

      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe

  // Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });