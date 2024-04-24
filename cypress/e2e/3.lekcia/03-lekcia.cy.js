const meno = "Michal"

const michal_invest = {
  fund: "Phoenix Feather Portfolio",
  amount: 1000,
  years: 5,
  secret: true,
}

const zaneta_invest = {
  fund: "Basilisk Bonds",
  amount: 5000,
  years: 7,
  secret: false,
}

function addInfo(fond, investicia, roky, tajne) {
  if (tajne === true) {
    cy.log("Investicia je tajna")
  }

  cy.get("#selectedFund").select(fond)
  cy.get("#oneTimeInvestment").type(investicia)
  cy.get("#years").type(roky)
}

describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/gringottsBank")
  })

  it("Simple using function", () => {
    addInfo(michal_invest.fund, michal_invest.amount, michal_invest.years, michal_invest.secret)
  })

  it("correct name is stored in new investment", () => {
    addInfo(zaneta_invest.fund, zaneta_invest.amount, zaneta_invest.years, zaneta_invest.secret)

    cy.get("[data-test='create-offer']").click()
    cy.get("[data-test='customer-name']").type(meno)
    cy.get('[data-test="create-investment"]').click()

    cy.get("ul.investment-list")
      .find("li")
      .eq(0)
      .within(() => {
        cy.get("h4").should("contain.text", meno)
        cy.contains("button", "View Details").click()
      })

    cy.get("div.modal-dialog")
      .should("be.visible")
      .within(() => {
        cy.get(".modal-body").contains("p", "Name").should("contain.text", meno)
      })
  })
})
