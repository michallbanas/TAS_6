/// <reference types= ‘cypress’>

describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("/gringottsBank")
  })

  it("Display a message when the investment list is empty", () => {
    cy.get(".no-investments-message").should("be.visible").and("have.text", "No investments yet. Make your first one!")
  })

  it("Creating multiple investments", () => {
    for (let i = 0; i < 4; i++) {
      cy.get("#selectedFund").select("Death Eater Dominance Fund")
      cy.get("#oneTimeInvestment").type("17000")
      cy.get("#years").type("20")
      cy.get('[data-test="create-offer"]').click()
      cy.get('[data-test="customer-name"]').type("Aneta")
      cy.get('[data-test="create-investment"]').click()
    }
    cy.get("ul.investment-list").find("li").should("have.length", 4)
  })

  it("Delete investment", () => {
    // Chýbajú mi tu logy, nech vieme, čo sa deje, inak je kód nice :)
    cy.get("#selectedFund").select("Death Eater Dominance Fund")
    cy.get("#oneTimeInvestment").type("17000")
    cy.get("#years").type("20")
    cy.get('[data-test="create-offer"]').click()
    cy.get('[data-test="customer-name"]').type("Aneta")
    cy.get('[data-test="create-investment"]').click()
    cy.get("ul.investment-list").find("li").contains("button", "Delete").click()
    // zvolil by som ešte dodatočné overenie, napr. cy.get("ul.investment-list").find("li").should("have.length", 0)
  })
})
