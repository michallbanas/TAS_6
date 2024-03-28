# 2 Lekcia - Čo sme sa dnes naučili

## 1.1. Funkcie Cypressu

Zakladne funkcie na pracu v Cypress:

- `cy.get().click()` - vyber/kliknutie na element
- `cy.get().select()` - vyber z dropdownu pomocou funkcie select
- `cy.get().type()` - vpisovanie do input fieldov

**Nezabudnúť** - `cy.contains()` nie je plnohodnotna validacia. Ak to chcete pouzit na najdenie a overenie elementu, doplne `cy.contains` o `.should("be.visible")`

## 1.2. Selectovanie elementov

- `cy.contains("selector", "text elementu")` - výber elementu na zaklade textu v elemente
- `cy.get("selector").contains("text elementu")` - alternativa k predoslemu selectu
- `data-test` - atribut, ktory sluzi na automation ucely. Pri selectovani elementov v prvom rade hladajte v elemente data-test, ak sa tam nenachadza, vypytajte si jeho pridanie od developera.
- ak si nie ste isty ako spravne selectovat elementy, pouzite Best practices od Cypressu: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements

- ak sa v strukture HTML nenechadzaju ziadne data-tests ani id, zvolte taktiku postupneho selectovania. Postupnym sposobom sa nakoniec dostanete k elementu, co potrebujete. Ak uz mate selector hotovy, mozete ho skusit pripadne optimalizovat.

  ```
   cy.get("div.offer-detail")
            .find('.your-data')
            .find('p.period')
            .find('span')
            .should('not.be.empty')
            .and('contain.text', '10 years')

  ```