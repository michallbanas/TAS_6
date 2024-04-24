/// <reference types= "cypress">

function addQuote(numberOfClicks) {
  // iteruje sa číslo menšie ako numberOfClicks pretože sa začína od 0
  for (let i = 0; i < numberOfClicks; i++) {
    /*
        Ak je 0 menšia ako 3, tak sa klikne na button
        Ak je 1 menšie ako 3, tak sa klikne na button
        Ak je 2 menšie ako 3, tak sa klikne na button
         */
    cy.get("[data-test='get-quote']").click()
  }
}

describe("Lekcia 3: HOMEWORK", () => {
  beforeEach(() => {
    cy.visit("/quotes")
  })
  it("Click on button by custom function", () => {
    const pocetKlikov = 3
    addQuote(pocetKlikov)

    cy.log("Overenie, že po kliknutí na button sa zobrazí správny počet quotes")
    cy.get(".quote-list li").should("have.length", pocetKlikov)
  })
})
