/// <reference types="Cypress" />

describe("Kiwi.com save cookies", () => {
  beforeEach(() => {
    cy.setupStorage()
    cy.visit("https://kiwi.com/")
  })

  it("accept cookies and check its save", () => {
    cy.getCookie("kwc_agreed").should("have.a.property", "value", "true")
  })
})

describe("Kiwi.com save currency cookies", () => {
  beforeEach(() => {
    cy.setupStorage()
    cy.visit("https://kiwi.com/")
  })

  it("set language and currency", () => {
    cy.getCookie("kwc_agreed").should("have.a.property", "value", "true")
    cy.getCookie("preferred_language").should("have.a.property", "value", "sk")
    cy.getCookie("preferred_currency").should("have.a.property", "value", "nzd")

    /* TIP:
    Ako som spomínal na hodine, môžeš si uložiť iba "nzd".
    Select to dokáže vybrať aj na základe value. 
    */
    const currency = "United States dollar - USD"
    const language = "English"

    cy.log("change currency to USD and language to English")
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
    cy.get('[data-test="CurrencySelect"]').select(currency)
    cy.get('[data-test="LanguageSelect"]').select(language)
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.getCookie("kwc_agreed").should("have.a.property", "value", "true")
    cy.getCookie("preferred_language").should("have.a.property", "value", "en")
    cy.getCookie("preferred_currency").should("have.a.property", "value", "usd")

    // doplnil by som aj overenie cez frontend - currency a language, ale to je detail.
  })
})

Cypress.Commands.add("setupStorage", () => {
  cy.setCookie("kwc_agreed", "true")
  cy.setCookie("__kwc_settings", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D")
  cy.setCookie("kw_language", "sk")
  cy.setCookie("preferred_currency", "NZD")

  cy.log("Set booking checkbox to false")
  localStorage.setItem("bookingcom_extension_default", "false")
})
