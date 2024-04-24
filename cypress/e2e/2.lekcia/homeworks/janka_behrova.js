/// <reference types= “cypress”>

beforeEach(() => {
  cy.visit("http://localhost:8080/#/gringottsBank")
})

describe("Gringottbank", () => {
  it("Zobrazenie hlášky No investments yet", () => {
    /* Stačí ísť cez cy.get(".no-investments-message") a overiť visibilitu + text
           Takto je to príliš závislé od jednotlivých elementov, ktoré sa môžu zmeniť. 
        */
    cy.get("div.mx-5")
      .find("div.no-investments-message")
      .find("p")
      .and("contain.text", "No investments yet. Make your first one!")

    cy.get("ul.investment-list").should("not.be.visible")
  })

  it("Zadanie viacerých investícií a overenie počtu", () => {
    for (let i = 0; i < 5; i++) {
      cy.log(i + ". iteracia cyklu")
      cy.get("#selectedFund").select("Galleon Guardian Fund")

      cy.get("#oneTimeInvestment").type("15000")

      cy.get("#years").type("10")

      cy.get("[data-test='create-offer']").click()

      cy.get("[data-test='customer-name']").type("Janka")

      cy.get("[data-test='create-investment']").click()
    }
    cy.get(".my-2").should("have.length", "5")
  })

  it("Vymazanie investície tlačidlom Delete", () => {
    for (let i = 0; i < 5; i++) {
      cy.log(i + ". iteracia cyklu")
      cy.get("#selectedFund").select("Galleon Guardian Fund")
      cy.get("#oneTimeInvestment").type("15000")
      cy.get("#years").type("10")
      cy.get("[data-test='create-offer']").click()
      cy.get("[data-test='customer-name']").type("Janka")
      cy.get("[data-test='create-investment']").click()
    }

    for (let i = 0; i < 3; i++) {
      cy.log(i + ". iteracia cyklu")
      cy.contains("button", "Delete").click()
    }
    cy.get(".my-2") // radšej by som zvolil cy.get("ul.investment-list").find("li")
      .should("have.length", "2")
  })
})
