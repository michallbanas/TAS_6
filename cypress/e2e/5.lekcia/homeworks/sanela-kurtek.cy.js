/// <reference types="Cypress" />

describe("Kiwi.com cookies test", () => {
  // rozdelil by som to do dvoch it blokov ako bolo v zadaní
  it("accept cookies, change currency and verify cookies for both", () => {
    /* TIP:
    Ako som spomínal na hodine, môžeš si uložiť iba "nzd".
    Select to dokáže vybrať aj na základe value. 
    */
    const currency = "New Zealand dollar - NZD"

    cy.visit("https://www.kiwi.com/en/")

    cy.log("accept cookies pop up and verify cookie")
    cy.get('[data-test="CookiesPopup-Accept"]').should("have.text", "Accept").click()

    cy.get('[data-test="CookiesPopup"]').should("not.exist")

    cy.wait(4000)

    cy.getCookie("__kwc_agreed").should("have.a.property", "value", "true")

    cy.log("change currency and verify New Zealand Currency cookie")
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
    cy.get('[data-test="CurrencySelect"]').select(currency)
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.getCookie("preferred_currency").should("have.a.property", "value", "nzd")
  })
})
