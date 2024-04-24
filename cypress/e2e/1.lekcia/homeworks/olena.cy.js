//tato before cast tu nemusi byt nakolko nespusta ziadny kod
before(() => {
  cy.log("Spustim sa iba raz")
})
beforeEach(() => {
  cy.visit("http://localhost:8080/#/quotes")
})

describe("QUOTE GENERATOR", () => {
  //homework
  it("check h1", () => {
    cy.log("check title")
    //tu vies retazit metody a nemusis 2x hladat ten isty element
    //takto:   cy.get(".title").should("be.visible").should("contain.text", "Potter Quotes")
    //pripadne:  cy.get(".title").should("be.visible").and("contain.text", "Potter Quotes")
    cy.get(".title").should("be.visible")
    cy.get(".title").should("contain.text", "Potter Quotes")
  })

  it("check if button remove quote disabled", () => {
    cy.log("check remove quote button")
    //tu nemusis kliknut na button nakolko je po otvoreni stranky disabled
    cy.get("#remove-quote").click({ force: true })
    cy.get("#remove-quote").should("be.disabled")
  })

  it("check button remove quote with correct text ", () => {
    cy.log("button 'remove quote' text")
    cy.get("#remove-quote").should("contain.text", "Remove Quote")
  })

  it("check button add quote with correct text ", () => {
    cy.log("button 'add quote' text")
    //tu nemusis davat medzery do overovania, nakolko contain text neoveruje presne text elementu ale iba overi ci sa tam cast ktoru si zadala nachadza
    cy.get("[data-test='get-quote']").should("contain.text", " Get Quote ")
  })

  it("check 2 quotes", () => {
    cy.log("2 quote")
    cy.get("[data-test='get-quote']").click().click()
    cy.get(".quote-list li").should("have.length", 2)
  })
})
