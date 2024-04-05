describe("Lekcia 1: Quote Generator", () => {
  before(() => {
    cy.log("I run once before all tests in the block")
  })
  beforeEach(() => {
    cy.log("I run before every test in the block")
    cy.visit("/quotes")
  })
  it("should generate a quote", () => {
    cy.log("Click on the button to generate a quote")
    cy.get("[data-test='get-quote']").click()

    cy.log("Check if the quote is generated")
    cy.get("[data-test='wisdom-points']").should("contain.text", "wisdom points +1")

    cy.log("Check if the quote container has correct length")
    cy.get(".quote-list").should("have.length", 1)
  })

  it("different selectors", () => {
    // class selector - .subtitle or [class='subtitle']
    cy.log("Get selector by class")
    cy.get(".subtitle").should("be.visible").and("have.text", "Level up by getting some wisdom")
    // id selector - #remove-quote or [id='remove-quote']
    cy.log("Get selector by id")
    cy.get("#remove-quote").should("be.visible")
    // data-test selector - [data-test='wisdom-level']
    cy.log("Get selector by data-test")
    cy.get("[data-test='wisdom-level']")
  })
})
