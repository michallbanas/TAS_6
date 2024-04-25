## 7 Lekcia - Co sme sa naucili o API Testing:

- Testovanie API sa zameriava na overovanie funkčnosti aplikačného rozhrania.
- Používame HTTP požiadavky na komunikáciu s API, pričom najbežnejšie sú GET, POST, PUT a DELETE.
- Dôležité je rozumieť kódovým stavom HTTP odpovedí (napr. 200 OK, 404 Not Found), ktoré poskytujú informácie o výsledku požiadavky.
- všetky stavy nájdete tu [httpstatuses.io](https://httpstatuses.io/)


## Použitie `cy.request()` v Cypress:

- `cy.request()` je metóda v nástroji Cypress na vykonanie HTTP požiadavky v teste.
- Pomocou nej môžeme testovať API z priamo z testovacieho prostredia, bez nutnosti interakcie s používateľským rozhraním.
- Špecifikujeme metódu, URL a prípadné ďalšie parametre ako query string alebo telo požiadavky.
- [link na dokumentáciu](https://docs.cypress.io/api/commands/request)

## Spracovanie odpovede a overovanie:

- Po vykonaní požiadavky spracujeme odpoveď pomocou `.then()`, kde môžeme overiť stavový kód a obsah odpovede.
- Testujeme očakávané hodnoty v odpovedi pomocou konštruktov ako `expect()`.

## Jednoduchý príklad `cy.request()` na endpoint `spells` z PotterAPI:

```javascript
cy.request({
  method: 'GET', // Špecifikujeme metódu GET, pretože žiadame údaje.
  url: 'http://localhost:3000/spells', // URL endpointu, kde sú dostupné kúzla.
})
.then((response) => {
  // V overovacej časti .then() overujeme úspešnosť požiadavky a obsah odpovede.
  expect(response.status).to.eq(200); // Overenie, že stavový kód je 200 OK.
  expect(response.body).to.be.an('array'); // Overenie, že odpoveď je v poli (zozname).
  // Ďalšie testy alebo spracovanie odpovede...
});
```
