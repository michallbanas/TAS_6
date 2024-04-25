describe("Kiwi.com search form test", () => {
  beforeEach(() => {
    cy.setCookie("__kwc_agreed", "true")
    cy.setCookie("__kwc_settings", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D")
  })

  it("verification of cookie storage", () => {
    cy.visit("https://www.kiwi.com/en/")
    cy.getCookie("__kwc_agreed").should("have.a.property", "value", "true")
  })

  it("verification of cookie storage - Currency", () => {
    /*
    Máš to správne - technicky, len teda bolo
    v úlohe, že currency treba vykkikať manuálne. 
    */
    cy.setCookie("preferred_currency", "nzd")
    cy.visit("https://www.kiwi.com/en/")
    cy.getCookie("preferred_currency").should("have.a.property", "value", "nzd") // prepoužívaš "nzd", čo by mohlo byť uložené v premennej.
    // doplnil by som aj overenie cez frontend - currency a language, ale to je detail.
  })
})
