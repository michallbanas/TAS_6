describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/gringottsBank")
  })

  it("display message when investment list is empty", () => {
    cy.get(".no-investments-message").should("be.visible").and("have.text", "No investments yet. Make your first one!")
  })

  it("create multiple investments", () => {
    for (let index = 0; index < 2; index++) {
      cy.get("#selectedFund").select("Phoenix Feather Portfolio")
      cy.get("#oneTimeInvestment").type(15000)
      cy.get("#years").type(12)
      cy.get("[data-test='create-offer']").click()
      cy.get("[data-test='customer-name']").type("Jozo")
      cy.get('[data-test="create-investment"]').click()
    }

    cy.get("ul.investment-list").find("li").should("have.length", 2)
  })

  it.only("delete an investment", () => {
    cy.get("#selectedFund").select("Phoenix Feather Portfolio")
    cy.get("#oneTimeInvestment").type(15000)
    cy.get("#years").type(12)
    cy.get("[data-test='create-offer']").click()
    cy.get("[data-test='customer-name']").type("Jozo")
    cy.get('[data-test="create-investment"]').click()

    cy.get("ul.investment-list").find("li").contains("button", "Delete").click()

    cy.get("ul.investment-list").find("li").should("have.length", 0)

    cy.get(".no-investments-message").should("be.visible").and("have.text", "No investments yet. Make your first one!")
  })
})
