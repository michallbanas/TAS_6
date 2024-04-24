describe("Sorting hat", () => {
  it("wait for the response", () => {
    cy.intercept("**/sortingHat").as("sortHat")
    cy.visit("http://localhost:8080/#/sortingHat")
    cy.get('[data-test="sort-button"]').click()
    cy.wait("@sortHat")
    cy.get('[data-test="house-result"]').should("not.be.empty")
  })

  it("replace the response", () => {
    const response = {
      sortingHatSays: "hello world",
      house: "Samorin",
    }
    cy.intercept("**/sortingHat", response).as("sortHat")
    cy.visit("http://localhost:8080/#/sortingHat")
    cy.get('[data-test="sort-button"]').click()
    cy.wait("@sortHat")
  })
})

describe("Quote generator", () => {
  it.only("wait for the response", () => {
    cy.intercept("**/quote").as("getQuote")
    cy.visit("http://localhost:8080/#/quotes")
    cy.get('[data-test="get-quote"]').click()
    cy.wait("@getQuote")
  })
})
