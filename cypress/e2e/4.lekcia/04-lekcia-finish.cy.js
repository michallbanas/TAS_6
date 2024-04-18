/// <reference types="Cypress" />

describe("testing of search form", () => {
  it("should test search form and btns", () => {
    const destination = 'London'

    cy.visit('https://www.kiwi.com/en/?origin=vienna-austria')
    cy.get('[data-test="CookiesPopup-Accept"]')
      .should('have.text', 'Accept')
      .click()
    cy.get('[data-test="CookiesPopup"]').should('not.exist')
    //4. overenie ze button explore je visible

    cy.get('[data-test="SearchPlaceField-destination"]')
      .find('[data-test="SearchField-input"]')
      .type(destination)
    cy.get('[data-test="PlacepickerModalOpened-destination"]')
      .should('be.visible')
      .contains(destination)
      .click()

    cy.url().should('include', 'destination=london-united-kingdom');
    cy.get('[data-test="bookingCheckbox"]')
      .find('input')
      .uncheck({ force: true })
    cy.contains('[data-test="LandingSearchButton"]', 'Search').click()
    cy.wait(4000)
    cy.get('[data-test="ResultCardWrapper"]')
      .eq(0)
      .find('[data-test="ResultCardPrice"]')
      .should('not.be.empty')
  })
})
