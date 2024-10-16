/// <reference types="Cypress" />
//Para que funcione los comandos

describe("Todos los campos obligatorios", () => {
    it("Campos obligatorios", () => {
        //Entramos a la pagina
        cy.visit("http://atom-admin-dev.s3-website-us-east-1.amazonaws.com/#/login")
        cy.get("#email").type("ana.caro@yopmail.com")
        cy.get("#password").type("Atom12345")
        cy.get(".btn").click()

        //Click a la seccion de clases
        cy.get("#app > div > div > div > nav > ul > li:nth-child(3) > div > a").click()

        //Click al boton de Planear clases
        cy.get("#mainContainerFluid > div > div.card > ul > li:nth-child(1) > a").click()

        //Click al boton de Crear clase
        cy.get("#mainContainerFluid > div > div:nth-child(2) > div > div > div.row > div.text-right.col-md-4 > a").click()

        //------- Llenar todos los campos obligatorios -------
        //Nombre de la clase
        cy.get("#class_name").type("Clase de prueba")

        //Sucursal
        cy.get("#branch_id").select("1")

        //Instructor/Coach
        cy.get("#coach_id").select("17")

        //Categorias
        cy.get(".el-select__input").type("Pilates")
        cy.get(".el-select-dropdown__item").contains("Pilates").click()

        //Salon
        cy.get("#category_id").select("31")

        //Tipo de clase
        cy.get("#class_type").select("ftf")

        //Capacidad
        cy.get("#class_capacity").type("5")

        //Fecha
        cy.get("#start_date").clear().type("22-10-2024")

        //Hora de inicio
        cy.get("#start_time").clear().type("10:30").type("{enter}");

        //Duracion (Minutos)
        cy.get("#__BVID__600").type("50")
        
        //------- Guardar -------
        cy.get('.btn.btn-primary').click();
    })

})//Cierre de describe