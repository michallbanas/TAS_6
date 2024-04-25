/// <reference types="Cypress" />

describe("Overenie cookie a spravne vybratie meny", () => {
  beforeEach(() => {
    cy.setupStorage()
    cy.visit("https://www.kiwi.com/en/")
  })

  it("Overenie ulozenia cookie - Currency", () => {
    // rozdelil by som to do dvoch it blokov ako bolo v zadaní
    cy.get('[data-test="CookiesPopup"]').should("not.exist")

    /* TIP:
    Ako som spomínal na hodine, môžeš si uložiť iba "nzd".
    Select to dokáže vybrať aj na základe value. 
    */
    const currency = "New Zealand dollar - NZD"

    cy.log("change currency to NZD")
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
    cy.get('[data-test="CurrencySelect"]').select(currency)
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.log("check if the currency has changed")
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').should("contain", "NZD")

    // chýba overenie  cez cy.getCookie()
  })
})
