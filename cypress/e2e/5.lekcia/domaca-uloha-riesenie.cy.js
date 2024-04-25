/// <reference types="Cypress" />

describe("Homework pt. I", () => {
  beforeEach(() => {
    cy.visit("https://www.kiwi.com/en/")
  })

  it("should verify acceppted cookies", () => {
    cy.get('[data-test="CookiesPopup-Accept"]').should("have.text", "Accept").click()

    cy.log("Visually verify that the cookie banner is not visible")
    cy.get('[data-test="CookiesPopup"]').should("not.exist")

    cy.wait(2000)

    cy.log("Verify that the cookie banner is not visible in the cookies")
    cy.getCookie("__kwc_agreed").should("have.a.property", "value", "true")
  })
})

describe("Homework pt. II", () => {
  beforeEach(() => {
    cy.setupStorage()
    cy.visit("https://www.kiwi.com/en/")
  })

  it("should verify NZD currency", () => {
    const currency = "NZD"

    cy.log(`change currency to ${currency}`)
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
    cy.get('[data-test="CurrencySelect"]').select(currency.toLowerCase())
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click()

    cy.log("Visually verify that the currency has changed")
    cy.contains("[data-test='TopNav-RegionalSettingsButton']", currency).should("be.visible")
    cy.contains("[data-test='TopNav-RegionalSettingsButton']", "nzd", { matchCase: false }).should("be.visible")

    cy.log("Verify that the currency has changed in the cookies")
    cy.getCookie("preferred_currency").should("have.a.property", "value", currency.toLowerCase())
  })
})
