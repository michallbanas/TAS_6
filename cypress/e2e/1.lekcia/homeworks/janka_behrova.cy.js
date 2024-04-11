// <reference types= “cypress”>

beforeEach(() => {
    cy.visit("http://localhost:8080/#/quotes")
})

describe("Prva domaca uloha", () => {

    it("Hlavný titulok je viditeľný a má správny text", () => {
        //tu vies retazit metody a nemusis 2x hladat ten isty element
        //takto:   cy.get(".title").should("be.visible").should("contain.text", "Potter Quotes")
        //pripadne:  cy.get(".title").should("be.visible").and("contain.text", "Potter Quotes")
        cy.log("Viditeľnosť hlavného titulku")
        cy.get(".title").should("be.visible")

        cy.log("Text hlavného titulku je Potter Quotes")
        cy.get(".title").should("have.text", "Potter Quotes")
    })

    it("Remove Quote button je zablokovaný a má správny text", () => {
        //ak chces mozes vies dve overenia spojit, rovnako ako v predoslom teste
        cy.log("Remove Quote je disabled")
        cy.get("#remove-quote").should("be.disabled")

        cy.log("Text buttonu je Remove Quote")
        cy.get("#remove-quote").should("have.text", " Remove Quote ")
    })

    it("Get Quote button má správny text a vytvorí 2 quotes po 2 kliknutiach", () => {
        //tu by som pouzil overenie .should("contain.text", "Get Quote") a vyhodil prazdne medzery
        cy.log("Text buttonu je Get Quote")
        cy.get("[data-test='get-quote']").should("have.text", " Get Quote ")
        //na toto vieme pouzit aj for cyklus kde opakujeme tu istu akciu konecny pocet krat 
        //viac o for cykle https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

        //vyzeralo by to nasledovne
        // for (let i = 0; i < 2; i++) {
        //     cy.log(i + '. iteracia cyklu')
        //     cy.get('[data-test="get-quote"]').click()
        // }
        cy.log("2 kliknutie na Quote button")
        cy.get("[data-test='get-quote']").click()
        cy.get("[data-test='get-quote']").click()

        //ukazeme si ako sa vnarat do elementov na 2.lekcii, toto si zatial nemala ako vediet ;) 
        cy.log("Overenie 2 quotes po 2 kliknutiach na Quote button")
        cy.get(".author").should("have.length", "2")

    })

})