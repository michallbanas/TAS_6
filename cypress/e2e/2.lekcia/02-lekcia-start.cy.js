describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/gringottsBank")
  })

  it("display offer data", () => {
    //TODO:
    //1. zadat vstupne udaje pre fond, investiciu a roky
    //2. kliknut na tlacidlo make me an offer
    //3. overit ze roky a fond sa spravne zobrazili v
    //naucime sa
    //1. interkciu so selectom, inputom
    //2. best practices hladania elementov (podla data test atributov,textu)
    //3. retazenie hladania elementov (hladanie elementu v elemente)
    //4. pouzitie metody within na hladanie len v konkretnom elemente
  })

  it.only("correct name is stored in new investment", () => {
    //TODO
    //1. zadajte vstupne parametre (fond, roky, investicia)
    //2. kliknite na tlacidlo make me an offer
    //3. zadajte meno
    //4. kliknite na create investment
    //5. overte ze sa vytvorila nova investicia
    //6. v nahlade investice overte spravne meno
    //7. kliknite na View details
    //8. overte ze meno je spravne vypisane
  })
})
