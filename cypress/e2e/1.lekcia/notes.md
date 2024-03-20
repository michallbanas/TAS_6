# 1. Lekcia - čo sme sa naučili

## 1.1 - čo je `it()` a čo je callback funkcia

- `it()` je funkcia, ktorá slúži na definovanie testu
- `it()` má 2 parametre:
  - prvý parameter je názov testu
  - druhý parameter je callback funkcia, ktorá obsahuje samotný test
- callback funkcia obsahuje samotný test, ktorý sa má vykonať

Dokumentácia: 
- [it()](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure)
- [callback funkcia](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

## 1.2 - `cy.visit()`

- `cy.visit()` je príkaz, ktorý slúži na otvorenie stránky
- `cy.visit()` má 1 parameter:
  - parameter je URL adresa stránky, ktorú chceme otvoriť

Dokumentácia: [cy.visit()](https://docs.cypress.io/api/commands/visit.html)

## 1.3 - `cy.get()` a práca s dokumentáciou

- `cy.get()` je príkaz, ktorý slúži na získanie elementu z DOM
- `cy.get()` má 1 parameter:
  - parameter je CSS selektor, ktorým chceme získať element

Dokumentácia: [cy.get()](https://docs.cypress.io/api/commands/get.html)  
💡 Hint: čo je DOM? - DOM znamená Document Object Model, čo je reprezentácia HTML stránky v pamäti prehliadača [DOM - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## 1.4 - `cy.click()`

- `cy.click()` je príkaz, ktorý slúži na kliknutie na element
- `cy.click()` nemá žiadne parametre, ale za to má optionálne parametre, napr:
  - `{ force: true }` - slúži na ignorovanie DOM elementu, ktorý je disabled alebo hidden

Documentácia: [cy.click()](https://docs.cypress.io/api/commands/click.html)  

## 1.5 - Overenie textu

- `should("have.text", "text")` slúži na overenie textu elementu (text sa musí byť identický) 
- `should("contain", "text")` slúži na overenie, či element obsahuje text (text sa musí nachádzať v elemente)

Dokumentácia:
- [should()](https://docs.cypress.io/api/commands/should.html)
- [text content](https://docs.cypress.io/guides/references/assertions#Text-Content)

## 1.6 - Overenie počtu elementov

- `should("have.length", 2)` slúži na overenie počtu elementov
- `should("have.length.at.least", 2)` slúži na overenie, že elementov je aspoň 2
- `should("have.length.at.most", 2)` slúži na overenie, že elementov je najviac 2

Dokumentácia:
- [should()](https://docs.cypress.io/api/commands/should.html)
- [length](https://docs.cypress.io/guides/references/assertions#Length)

## 1.7 - Retry logika

- Cypress má zabudovanú retry logiku, ktorá sa snaží opakovať príkazy, ktoré zlyhali
- Retry logika sa dá upraviť/vypnúť pomocou optionálneho parametra `{ retry: 0 }`

Dokumentácia:
- [Retry-ability](https://docs.cypress.io/guides/core-concepts/retry-ability)
- [Test retries](https://docs.cypress.io/guides/guides/test-retries)

## 1.8 - Rôzne druhy hľadania elementov: id, class, data-test

- `cy.get("#id")` - hľadanie elementu podľa id
- `cy.get(".class")` - hľadanie elementu podľa class
- `cy.get("[data-test=selector]")` - hľadanie elementu podľa data-test atribútu

Dokumentácia:
- [Selectors](https://docs.cypress.io/api/commands/get#Selector)

## 1.9 - Spustenie iba jedného testu/preskočenie testu: only, skip

- `it.only()` - spustí iba jeden test
- `it.skip()` - preskočí test

Dokumentácia:
- [only/skip](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests)

## 1.10 - `before()` vs `beforeEach()`

- `before()` - funkcia, ktorá sa spustí predtým, ako sa spustia všetky testy
- `beforeEach()` - funkcia, ktorá sa spustí predtým, ako sa spustí každý test

Dokumentácia:
- [Hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests)

## 1.11 - `cy.log()`

- `cy.log()` je príkaz, ktorý slúži na logovanie správ

Dokumentácia: [cy.log()](https://docs.cypress.io/api/commands/log.html)

## 1.12 - `describe()` a zoskupovanie testov

- `describe()` je funkcia, ktorá slúži na zoskupovanie testov

Dokumentácia: [describe()](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure)

## 1.13 - Konfigurácia a `baseUrl`

- `baseURL` je konfiguračná premenná, ktorá slúži na nastavenie základnej URL adresy pre všetky testy

Dokumentácia: [baseUrl](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl)


