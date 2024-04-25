# 6 Lekcia - Co sme sa naucili o Intercept

`cy.intercept()` je príkaz v Cypress, ktorý umožňuje interakciu so sieťovou komunikáciou vášho webového testovania. Hlavné funkcie tohto príkazu zahŕňajú:

- **Čakanie na odpoveď zo servera:** Použitím `cy.intercept()` môžeme sledovať sieťové požiadavky a čakať na ich odpoveď. To umožňuje synchronizáciu testov s dynamickým obsahom zo servera.

- **Nahradenie odpovede zo servera:** Okrem sledovania požiadaviek môžeme tiež nahradzovať odpovede zo servera pomocou `cy.intercept()`. Toto je užitočné na testovanie rôznych scenárov, ako sú chybové stavy alebo situácie so špecifickými dátami.

- **Získavanie informácií o komunikácii s backendom:** `cy.intercept()` nám umožňuje získať informácie o komunikácii medzi našou aplikáciou a backendom. To môže zahrňovať detaily o posielaných a prijatých dátach, stavové kódy a ďalšie.

## Príklad použitia:

Tu je príklad použitia `cy.intercept()` v Cypress teste:

```javascript
describe("Sorting hat", () => {
  it("čakanie na odpoveď", () => {
    // Nastavenie interceptu na sledovanie požiadaviek na endpoint **/sortingHat
    cy.intercept("**/sortingHat").as("sortHat")
    cy.visit("http://localhost:8080/#/sortingHat")
    cy.get('[data-test="sort-button"]').click()
    // Čakanie na odpoveď zo servera pomocou zaregistrovaného aliasu "sortHat"
    cy.wait("@sortHat")
    cy.get('[data-test="house-result"]').should("not.be.empty")
  })

  it("nahradenie odpovede", () => {
    // Definovanie vlastnej odpovede zo servera
    const response = {
      sortingHatSays: "hello world",
      house: "Samorin",
    }
    // Nastavenie interceptu na nahradenie odpovede na **/sortingHat
    cy.intercept("**/sortingHat", response).as("sortHat")
    cy.visit("http://localhost:8080/#/sortingHat")
    cy.get('[data-test="sort-button"]').click()
    // Čakanie na odpoveď zo servera pomocou zaregistrovaného aliasu "sortHat"
    cy.wait("@sortHat")
    // Overenie, že na stránke sa zobrazí nahradená hláška
    cy.get('[data-test="result-message"]').should('have.text',sortingHatSays)
    cy.get('[data-test="house-result"]').should('have.text',house)
  })
})
```