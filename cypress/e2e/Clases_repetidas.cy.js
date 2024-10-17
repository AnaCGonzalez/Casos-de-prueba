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
      cy.get("#class_name").type("Boxeo");
      cy.get("#branch_id").select("1");
      cy.get("#coach_id").select("1");
      cy.get(".el-select__input").type("prueba layout").then(() => {
          cy.get(".el-select-dropdown__item").contains("prueba layout").click()
        });
      cy.get("#category_id").select("25");
      cy.get("#class_type").select("ftf");
      cy.get("#class_capacity").type("8");
      cy.get("#start_date").clear().type("19-10-2024").type("{enter}").tab()
      .type("17:00").type("{enter}").tab().type("60");
      
      //Checkbox Repetir todos los...
      cy.wait(2000);
      cy.contains('label.custom-control-label', ' Repetir todos los ').click()
      cy.wait(1000); 
      
      // Verificar si el checkbox está seleccionado
      const dias = ['Domingos', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábados'];  
      let diaMarcado = false;

      dias.forEach(dia => {
        cy.contains('label.custom-control-label', dia)
          .prev('input.custom-control-input')
          .then($checkbox => {
            if ($checkbox.is(':checked')) {
              cy.log(`${dia}`);
              cy.wrap($checkbox).uncheck({ force: true });
              diaMarcado = true;
              return false;
            }
          })
      });
      cy.wait(2000);

      //Seleccionar los dias
      const diasSeleccionados = ['Domingos', 'Martes', 'Jueves'];
      diasSeleccionados.forEach(dia => {
        cy.contains('label.custom-control-label', dia).prev('input.custom-control-input').check({ force: true })
      });
      //Hasta el dia
      cy.wait(2000);
      cy.get('.input-group.form-control-alternative input.form-control').eq(2).clear().type('27-10-2024').type('{enter}');
      
      // Guardar
      cy.contains("button", "Guardar").click();
    });
  }); // Cierre de describe