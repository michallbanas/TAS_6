beforeEach(() => {
  cy.log("Spustím sa pred každým testom")
  cy.visit("http://localhost:8080/#/quotes")
})

it("should visit quotes generator page", () => {
  cy.log("Title contains correct text and is visible")
  //tu vies retazit metody a nemusis 2x hladat ten isty element
  //takto:   cy.get(".title").should("be.visible").should("contain.text", "Potter Quotes")
  //pripadne:  cy.get(".title").should("be.visible").and("contain.text", "Potter Quotes")
  cy.get(".title").should("contain", "Potter Quotes")
  cy.get(".title").should("be.visible")
})

it("should check remove button text", () => {
  cy.log("Remove button contains correct text")
  //1. pouzil by som assertion should('contain.text', 'Remove Quote')
  // nakolko overenie .should("contain", "Remove Quote") overuje ci sa text v elementoch ktore su vnutri daneho elementu (vnorene)
  cy.get("#remove-quote").should("contain", "Remove Quote")
})

it("should check add button text", () => {
  cy.log("Get button contains correct text")
  cy.get("[data-test='get-quote']").should("contain", "Get Quote")
})

it("should check remove button disabled", () => {
  cy.log("Remove button is disabled")
  cy.get("#remove-quote").should("be.disabled")
})

it("should visit quotes generator page", () => {
  cy.log("Click twice on the get quote button")
  //na toto vieme pouzit aj for cyklus kde opakujeme tu istu akciu konecny pocet krat
  //viac o for cykle https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

  //vyzeralo by to nasledovne
  // for (let i = 0; i < 2; i++) {
  //     cy.log(i + '. iteracia cyklu')
  //     cy.get('[data-test="get-quote"]').click()
  // }
  cy.get("[data-test='get-quote']").click()
  cy.get("[data-test='get-quote']").click()

  cy.log("Wisdom point contains correct text and is visible")
  cy.get("[data-test='wisdom-points']").should("contain", "wisdom points +2")
  cy.get(".quote-list").should("be.visible")
  //tu mozeme overit aj pocet quotes elementov na stranke, vysvetlime si na hodine ale mozme to spravit nasledovne
  //najdeme hlavny element (ul = unordered-list) v nom najdeme jednotlive li elementy (li = list item) a overime ich pocet
})
