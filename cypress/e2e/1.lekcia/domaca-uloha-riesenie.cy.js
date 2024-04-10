describe("Lekcia 1: QUOTE GENERATOR", () => {
  beforeEach(() => {
    cy.visit("/quotes")
  })
  it("homework", () => {
    cy.log("Overte hlavný titulok")
    cy.get("h1").should("be.visible").and("have.text", "Potter Quotes")

    cy.log("Overte, že po otvorení stránky je button remove quote zablokovaný (disabled)")
    cy.get("#remove-quote").should("be.disabled")

    cy.log("Overte že button remove quote má správny text")
    cy.get("#remove-quote").should("contain.text", "Remove Quote")

    cy.log("Overte že button add quote má správny text")
    cy.get("[data-test='get-quote']").should("be.visible").and("contain.text", "Get Quote")

    cy.log("Overte 2 quotes")
    cy.get("[data-test='get-quote']").click().click()
    cy.get(".quote-list li").should("have.length", "2")
  })
})
