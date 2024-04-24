it("display selected currency in itinerary detail", () => {
  const destination = "Oslo"
  //cy nespadne, lebo sme mu dodali celu URL, cize ignor base url v configu
  cy.visit("https://www.kiwi.com/en/?origin=vienna-austria")
  cy.get("[data-test=CookiesPopup-Accept]").click()
  cy.get('[data-test="TopNav-RegionalSettingsButton"]').click()
  cy.get('[data-test="CurrencySelect"]').select("nok")
  cy.contains("button", "Save & continue").click()
  cy.log("type destination")
  cy.get("[data-test=PlacePickerInput-destination]").type(destination)
  cy.contains("[data-test=PlacePickerRow-wrapper]", destination).eq(0).click()
  cy.get("[data-test=bookingCheckbox] input").click({ force: true })
  cy.get("[data-test=LandingSearchButton]").click()
  cy.wait(6000)
  cy.get('[data-test="ResultCardWrapper"]')
    .eq(0)
    .should("be.visible")
    .within(() => {
      cy.get('[data-test="ResultCardPrice"]').should("contain.text", "kr")
    })
})
