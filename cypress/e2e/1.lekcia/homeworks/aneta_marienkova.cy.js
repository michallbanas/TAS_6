/// <reference types= ‘cypress’>

beforeEach(() => {
    //cy log menej popisny, bud nemusis davat alebo popisat ze otvorime stranku
    cy.log("Start before every test")
    cy.visit("/quotes")
})

describe("QUOTE GENERATOR PAGE", () => {
    //toto by bolo lepsie dat do dvoch samostatnych testov, 
    //z nazvu testu nie je jasne ze overujeme aj remove quote
    it("The page contains the main headline", () => {
        cy.log("Get element by class")
        //chyba overenie textu
        cy.get(".title").should("be.visible")
        cy.log("Button Remove Quote contains correct text")
        //hint: ak hladas element podla id vies to zapisat aj ako cy.get("#remove-quote")
        cy.get("[id='remove-quote']").should("contain.text", "Remove Quote")
    })

    it("Add Quote contains correct text", () => {
        cy.log("Button Add Quote contains correct text")
        cy.get("[data-test='get-quote']").should("contain.text", "Add Quote")
    })

    it("Button Remove Quote is blocked", () => {
        cy.log("Button Remove Quote is disabled")
        cy.get("[id='remove-quote']").should("be.disabled")
    })
    //chyba overenie po kliknuti, zaroven metoda click je zapisana nespravne (bez zatvoriek)
    it("The offer will appear after pressing the Add Quote button", () => {
        cy.log("After pressing the Add Quote button, the quote will be displayed")
        cy.get("[data-test='get-quote']").click
    })

    //po prvej lekcii ok, mozme si ukazat vnaranie do elementov
    it("Quote list contains text", () => {
        cy.log("Quote is not empty")
        cy.get("[data-test='get-quote']").click()

        cy.get(".quote-list").should("not.be.empty")
    })
    //toto je podobny test ako predosly, mozme dat do jedneho a overit text aj autora
    it("Quote list some contains text", () => {
        cy.log("Quote has text")
        cy.get("[data-test='get-quote']").click()

        cy.get(".author").should("not.be.empty")
    })

    //chyba overenie 2 a viac quotes
})