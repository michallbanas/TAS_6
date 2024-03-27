# 3. Lekcia - čo sme sa naučili

## 3.1 - Javascript - premenné, const, let, var

- Premenné sú základným stavebným prvkom programovania
- V Javascripte máme 3 typy premenných: `const`, `let`, `var`
- `const` - konštantná hodnota, ktorá sa nedá zmeniť
- `let` - premenná, ktorá sa dá zmeniť
- `var` - starý spôsob definovania premenných, nepoužíva sa

## 3.2 - Javascript - funkcie

- Funkcie sú súbor kódu, ktorý môžeme zavolať viackrát
- Funkcie môžu prijímať parametre a vracať hodnoty

```javascript
function add(a, b) {
  return a + b;
}
```

## 3.3 - Javascript - cyklus

- Cyklus je súbor kódu, ktorý sa vykonáva opakovane

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
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