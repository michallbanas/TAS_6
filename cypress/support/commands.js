Cypress.Commands.add("setupStorage", () => {
  cy.setCookie("__kwc_agreed", "true")
  cy.setCookie("__kwc_settings", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D")

  cy.log("Set booking checkbox to false")
  localStorage.setItem("bookingcom_extension_default", "false")
})
