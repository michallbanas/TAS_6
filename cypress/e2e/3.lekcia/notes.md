# 3. Lekcia - čo sme sa naučili

## 3.1 - Javascript - premenné, const, let, var

- Premenné sú základným stavebným prvkom programovania
- V Javascripte máme 3 typy premenných: `const`, `let`, `var`
- `const` - konštantná hodnota, ktorá sa nedá zmeniť
- `let` - premenná, ktorá sa dá zmeniť
- `var` - starý spôsob definovania premenných, nepoužíva sa
- Môžeme si to predstaviť ako CD a CD-RW. CD je konštantná hodnota, ktorú nemožno zmeniť, nemôžeme znovu zapísať niečo na CD,  zatiaľ čo CD-RW je premenná, ktorú môžeme zmeniť, je možné znovu zapísať niečo na CD-RW.

```javascript
const a = 5;
let b = 10;

a = 10; // error pretože konštantu nemožno zmeniť
b = 15; // ok pretože let môžeme zmeniť

```

## 3.2 - Javascript - funkcie

- Funkcie sú súbor kódu, ktorý môžeme zavolať viackrát
- Funkcie môžu prijímať parametre a vracať hodnoty
- Je to skvelý spôsob na znovupoužiteľnosť kódu

```javascript
funkcia logName() {
  console.log('Michaela');
}
```

```javascript
funkcia logNameWithParameter(name) {
  console.log(name)
}

logNameWithParameter('Michaela');
```

## 3.3 - Javascript - cyklus

- Cyklus je súbor kódu, ktorý sa vykonáva opakovane

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i); // vypíše čísla od 0 do 9
}
```

## 3.4 - Javascript - podmienky

- Podmienky sú súbor kódu, ktorý sa vykonáva iba ak je splnená podmienka

```javascript
if (a > b) {
  // vykonaj akciu
}
```

Hint: V JavaScripte sa porovnávajú hodnoty pomocou `===` a nie `==`. `==` porovnáva iba hodnoty, zatiaľ čo `===` porovnáva aj typy.

```javascript
const a = 5
const b = '5'

if (a === b) {
  // tento kód sa nikdy nevykoná pretože a je číslo 5 a b je string '5'
}

if (a == b) {
  // tento kód sa vykoná pretože nezáleží na type, ale iba na hodnote (5 a '5' sú rovnaké v tomto prípade)
}
```

## 3.5 - Javascript - objekt

- Objekt je súbor hodnôt, ktoré sú uložené v jednej premennej
- Pozrime sa na príklad nižšie, kde máme objekt `michaleala_invest`. Je to ako keď idete do banky a otvoríte si investičný účet, kde máte uložené informácie o sebe a o investovaných peniazoch. 

```javascript
const michaleala_invest = {
  name: 'Michaela',
  age: 32,
  city: 'Prievidza',
  isInvestor: true,
  amount: 1000
  years: 5
};
```