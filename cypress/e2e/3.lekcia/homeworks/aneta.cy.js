/// <reference types= ‘cypress’>

//nazov vstupneho argumentu pre premennu by mal zacinat s malym pismenom
//tzv camel case https://developer.mozilla.org/en-US/docs/Glossary/Camel_case 
function addQuote(Clicks) {
    for (let i = 0; i < Clicks; i++) {
        cy.get("[data-test='get-quote']").click();
    }
}
//nazov describe blocku by mal definovat cast aplikacie / stranku
//v tomto pripade napr: Quote Generator
describe("AddQuote", () => {
    beforeEach(() => {
        cy.visit("/quotes")
    })
    // pri testoch je fajn popisat ich z business pohladu
    //v tomto pripade: add multiple quotes
    it("Clicks the add Quote button multiple times", () => {
        addQuote(2) // call of method (example. 2)
        cy.log("Count verification")
        cy.get(".quote-list li").should("have.length", 2)
    })
})