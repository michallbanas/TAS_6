## API Testing základy:

- Testovanie API sa zameriava na overovanie funkčnosti aplikačného rozhrania.
- Používame HTTP požiadavky na komunikáciu s API, pričom najbežnejšie sú GET, POST, PUT a DELETE.
- Dôležité je rozumieť kódovým stavom HTTP odpovedí (napr. 200 OK, 404 Not Found), ktoré poskytujú informácie o výsledku požiadavky.
-- všetky stavy nájdete tu [httpstatuses.io](https://httpstatuses.io/)


## Použitie `cy.request()` v Cypress:

- `cy.request()` je metóda v nástroji Cypress na vykonanie HTTP požiadavky v teste.
- Pomocou nej môžeme testovať API z priamo z testovacieho prostredia, bez nutnosti interakcie s používateľským rozhraním.
- Špecifikujeme metódu, URL a prípadné ďalšie parametre ako query string alebo telo požiadavky.

## Spracovanie odpovede a overovanie:

- Po vykonaní požiadavky spracujeme odpoveď pomocou `.then()`, kde môžeme overiť stavový kód a obsah odpovede.
- Testujeme očakávané hodnoty v odpovedi pomocou konštruktov ako `expect()`.

## Dôležité zváženia:

- Pri testovaní API je dôležité mať na pamäti konkrétne potreby a požiadavky aplikácie, a testovať príslušné endpointy a scenáre.
- Zabezpečujeme, aby testy boli spoľahlivé, opakovateľné a nezávislé od prostredia.

Tieto poznámky by mali študentom poskytnúť základné informácie a usmernenia pre ďalšie testovanie API pomocou Cypress a metódy `cy.request()`. Ak majú študenti nejaké otázky alebo potrebujú ďalšie vysvetlenie, vždy im môžeš poskytnúť ďalšiu
