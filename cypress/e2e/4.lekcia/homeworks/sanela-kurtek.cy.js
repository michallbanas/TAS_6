/// <reference types="Cypress" />

describe("Kiwi.com search form test", () => {
    it("change currency to NOK and search for flights to Oslo", () => {

    const destination = 'Oslo'
    const currency = 'Norwegian krone - NOK'

    cy.log('visit site and accept cookies')
    cy.visit('https://kiwi.com/')
    cy.get('[data-test="CookiesPopup-Accept"]')
        .should('have.text', 'Accept')
        .click()

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
        .find('[data-test="SearchField-input"]').type(destination)

    cy.get('[data-test="PlacepickerModalOpened-destination"]')
        .should('be.visible')
        .contains(destination)
        .click()

    cy.get('[data-test="bookingCheckbox"]') // iba malý hint, dá sa aj napr. cy.get("[data-test=bookingCheckbox] input")
        .find('input')
        .uncheck({force: true})

    cy.get('[data-test="LandingSearchButton"]').click() // overil by som aj text buttonu

    cy.wait(4000)

    cy.log('check if the currency is NOK on the flights results page')
    cy.get('[data-test="ResultCardWrapper"]')
        .eq(0)
        .find('[data-test="ResultCardPrice"]')
        .should('contain.text', 'kr')
    })
  })