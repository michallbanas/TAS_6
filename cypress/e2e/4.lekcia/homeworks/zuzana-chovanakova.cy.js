/// <reference types="Cypress" />

describe("homework", () => {
  it("Flying to Oslo", () => {
    cy.visit("https://www.kiwi.com/sk/")
    cy.get('[data-test="CookiesPopup-Accept"]').click()
    cy.get('[data-test="TopNav"]')
      .find(".items-center") // Toto je v podstate nadbytočné, element sa nájde aj bez classy + 33 elementov má túto classu, čiže kludne vymazať tento riadok :)
      .find('[data-test="TopNav-RegionalSettingsButton"]')
      .click()

    cy.get('[data-test="RegionalSettingsModal"]').should("be.visible")
    cy.get(".orbit-select-container") // data test CurrencySelect by som použil priamo v get miesto classy a tým pádom find nie je potrebné.
      .find('[data-test="CurrencySelect"]')
      .select("nok")
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.get('[data-test="PlacePickerInput-destination"]').type("Oslo") // Oslo alebo ktorúkoľvek inú destináciu si môžeš uložiť do premennej nech to môžme prepoužiť jednoduchšie
    cy.get('[data-test="PlacePickerRow-wrapper"]').should("be.visible")
    cy.get('[data-test="PlacepickerModalOpened-destination"]').contains("Oslo").click()

    cy.get('[data-test="bookingCheckbox"]') // iba malý hint, dá sa aj napr. cy.get("[data-test=bookingCheckbox] input")
      .find("input")
      .uncheck({ force: true })

    cy.get('[data-test="LandingSearchButton"]').click() // overil by som aj text buttonu
    cy.wait(6000)
    cy.get('[data-test="ResultCardPrice"]').should("include.text", "kr")
  })
})
