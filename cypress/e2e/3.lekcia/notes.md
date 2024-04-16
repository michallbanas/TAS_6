# 3. Lekcia - čo sme sa naučili

## 3.1 - Javascript - premenné, const, let, var

- Premenné sú základným stavebným prvkom programovania
- V Javascripte máme 3 typy premenných: `const`, `let`, `var`
- `const` - konštantná hodnota, ktorá sa nedá zmeniť
- `let` - premenná, ktorá sa dá zmeniť
- `var` - starý spôsob definovania premenných, nepoužíva sa

```javascript
const a = 5;
let b = 10;

a = 10; // error pretože konštantu nemožno zmeniť
b = 15; // ok pretože let môžeme zmeniť

```

## 3.2 - Javascript - funkcie

- Funkcie sú súbor kódu, ktorý môžeme zavolať viackrát
- Funkcie môžu prijímať parametre a vracať hodnoty

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

## 3.5 - Javascript - objekt

- Objekt je súbor hodnôt, ktoré sú uložené v jednej premennej

```javascript
const person = {
  name: 'Michaela',
  age: 32,
  city: 'Prievidza'
};
```