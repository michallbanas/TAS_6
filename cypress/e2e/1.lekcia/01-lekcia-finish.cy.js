/// <reference types= "cypress">

before(() => {
  cy.log("Spustim sa iba raz")
})

beforeEach(() => {
  cy.log("Spustím sa pred každým testom")
  cy.visit("/quotes")
})

describe("Lekcia 1: QUOTE GENERATOR", () => {
  it("should click on the get quote button and verify it", () => {
    cy.log("Click on the get quote button")
    cy.get("[data-test='get-quote']").click()

    cy.log("Wisdom point contains correct text and is visible")
    cy.get("[data-test='wisdom-points']").should("contain", "wisdom points +1")
    cy.get(".quote-list").should("be.visible")
  })

  it("should check elements", () => {
    cy.log("Get element by class")
    cy.get(".subtitle").should("be.visible")

    cy.log("Get element by id")
    cy.get("#remove-quote").should("be.visible")

    cy.get("button").should("have.length", "2")
  })
})
