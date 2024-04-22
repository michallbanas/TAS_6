/// <reference types="Cypress" />

describe("Kiwi.com search form test", () => {
    beforeEach(() => {
        cy.setupStorage()
        cy.visit('https://www.kiwi.com/en/')
    })
    it("change currency to NOK and search for flights to Oslo", () => {
    const destination = 'Oslo'
    const currency = 'Norwegian krone - NOK'

    cy.get('[data-test="CookiesPopup"]')
        .should('not.exist')

    cy.log('change currency to NOK')
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
    cy.get('[data-test="CurrencySelect"]').select(currency)
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.log('check if the currency has changed')
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').should('contain','NOK')

    cy.log('search for flights to Oslo')
    cy.get('[data-test="PlacePickerInput-destination"]')
        .find('[data-test="SearchField-input"]').type(destination, { delay: 500})

    cy.get('[data-test="PlacepickerModalOpened-destination"]')
        .should('be.visible')
        .contains(destination)
        .click()

    cy.get('[data-test="LandingSearchButton"]').should("have.text", "Search").click() 

    cy.wait(4000)

    cy.log('check if the currency is NOK on the flights results page')
    cy.get('[data-test="ResultCardWrapper"]')
        .eq(0)
        .within(() => {
            cy.get('[data-test="ResultCardPrice"]')
                .should("be.visible")
                .and('contain.text', 'kr')
        })

     cy.url().should("include", "results").and("includes", "oslo") 
    })
  })