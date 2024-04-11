// <reference types="cypress">

beforeEach(() => {
    cy.visit("/quotes")

})

describe("QUOTE GENERATOR PAGE", () => {
    it("should check page title", () => {
        cy.log("Check Page Title")
        //1. pri tomto overeni vies retazit metody cy.get('.title').should('be.visible').should("contain", "Potter Quotes")
        //2. ak chces overit presny text, pouzil by som metodu .should('have.text','Potter Quotes')
        cy.get('.title').should('be.visible')
        cy.get('.title').should("contain", "Potter Quotes")
    })

    it("should verify remove quote button text", () => {
        cy.log("Check Remove Quote Button Text")
        //1. pouzil by som assertion should('contain.text', 'Remove Quote')
        // nakolko overenie .should("contain", "Remove Quote") overuje ci sa text v elementoch ktore su vnutri daneho elementu (vnorene)
        cy.get('#remove-quote').should("contain", "Remove Quote")
    })

    it("should verify add quote button text", () => {
        cy.log("Check Add Quote Button Text")
        cy.get('[data-test="get-quote"]').should("contain", "Get Quote")
    })

    it("should verify remove quote button is disabled", () => {
        cy.log("Check if the Remove Quote button is disabled")
        cy.get('#remove-quote').should('be.disabled')
    })

    it.only("should verify quotes", () => {
        cy.log("Verify two quotes")
        //na toto vieme pouzit aj for cyklus kde opakujeme tu istu akciu konecny pocet krat 
        //viac o for cykle https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

        //vyzeralo by to nasledovne
        // for (let i = 0; i < 2; i++) {
        //     cy.log(i + '. iteracia cyklu')
        //     cy.get('[data-test="get-quote"]').click()
        // }
        cy.get('[data-test="get-quote"]').click()
        cy.get('.quote-list').should('be.visible')
        cy.get('[data-test="get-quote"]').click()
        cy.get('.quote-list').should('be.visible')

        cy.get('[data-test="wisdom-points"]').should("contain", "wisdom points +2")
        //tu mozeme overit aj pocet quotes elementov na stranke, vysvetlime si na hodine ale mozme to spravit nasledovne
        //najdeme hlavny element (ul = unordered-list) v nom najdeme jednotlive li elementy (li = list item) a overime ich pocet
        cy.get('ul.quote-list').find('li').should('have.length', 2)

    })

})