//nespravny nazov describe blocku
//nazov describe blocku by mal definovat cast aplikacie / stranku
//v tomto pripade napr: Quote Generator
describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/quotes")
  })

  function addQuote(qty) {
    for (let n = 0; n < qty; n++) cy.get('[data-test="get-quote"]').click()
  }
  // pri testoch je fajn popisat ich z business pohladu
  //v tomto pripade: add multiple quotes
  it("add qute", () => {
    // nazov premennej moze byt viac popisny, napr numberOfQuotes
    const qty = 7
    addQuote(qty)

    cy.get(".quote-list li").should("have.length", qty)
  })
})
