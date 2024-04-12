describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/gringottsBank")
  })

  it("display offer data", () => {
    cy.log("select fund")
    //zadanie vstupnych hodnot
    cy.get("[id=selectedFund]").select("Phoenix Feather Portfolio")
    cy.get("[id=oneTimeInvestment]").type(10000)
    cy.get("#years").type(10)
    //vyhladanie elementu podla dedikovaneho data-test atributu
    cy.get("[data-test='create-offer']").click()
    //vyhladanie elementu podla typu a textu
    cy.contains("button", "Make me an offer").click()

    cy.get("div.offer-detail").should("be.visible")

    cy.get("div.offer-detail")
      .find(".your-data")
      .find("p.period")
      .find("span")
      .should("not.be.empty")
      .and("contain.text", "10 years")

    //vyhladanie fund podla textu elementu
    cy.get("div.offer-detail")
      .find(".your-data")
      .contains("p", "Fund")
      .find("span")
      .should("not.be.empty")
      .and("contain.text", "Phoenix Feather Portfolio")
  })

  it("correct name is stored in new investment", () => {
    cy.get("#selectedFund").select("Phoenix Feather Portfolio")
    cy.get("#oneTimeInvestment").type(15000)
    cy.get("#years").type(12)
    cy.get("[data-test='create-offer']").click()
    cy.get("[data-test='customer-name']").type("Jozo")
    cy.get('[data-test="create-investment"]').click()

    cy.get("ul.investment-list")
      .find("li")
      .eq(0)
      .within(() => {
        cy.get("h4").should("contain.text", "Jozo")
        cy.contains("button", "View Details").click()
      })

    cy.get('div.modal-dialog')
      .should("be.visible")
      .within(() => {
        cy.get(".your-data").contains("p", "Name").find("span").should("have.text", "Jozo")
      })
  })
})
