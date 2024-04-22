/*
Celkovo kód vyzerá dobre, ale nerozdeľoval by som ho do 3 blokov.
Ideálne je to mať v jednom bloku a oddelené cy.log()

Všimol som si ešte, že ti chýba odkliknutie booking checkboxu. 
Aby sa nám po kliknutí na search button neotvorili dva taby (booking) a (search results).
*/

describe("Let do Osla", () => { 
    it("select currency NOK and go to Oslo", () => {
      const destination ='Oslo'
      cy.visit('https://www.kiwi.com/en/?origin=vienna-austria')
      cy.get('[data-test="CookiesPopup-Accept"]')
      .should('have.text', 'Accept')
      .click()
     // Select NOK currency
    cy.log("select currency NOK ")
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').click ()
    cy.get('[data-test="CurrencySelect"]').select("Norwegian krone - NOK")
    cy.get('[data-test="SubmitRegionalSettingsButton"]').click ()
    cy.get('[data-test="TopNav-RegionalSettingsButton"]').should("contain.text", "NOK")
  
    // Search for flights to Oslo
    cy.get('[data-test="SearchFieldItem-destination"]')
      .find('[data-test="SearchField-input"]')
      .type(destination)
  
    cy.get ('[data-test="PlacepickerModalOpened-destination"]').should ('be.visible')
    .contains(destination)
    .click()
    //cy.get('[data-test="PlacePickerRow-wrapper"]').select(destination)
    cy.get('[data-test="LandingSearchButton"]').click() // overil by som aj text buttonu
  
    // Check if the correct page is opened
    })
    it("check url", () => {
      cy.wait(6000)
      cy.url().should('eq', 'https://www.kiwi.com/en/search/results/kosice-slovakia/oslo-norway')  
    }) 
  
    it("currency check", () => {
      cy.wait(6000)
       cy.log("currency check")
       cy.get('[data-test="ResultList-results"]') 
          .eq(0)
          .find('[data-test="ResultCardPrice"]')
          .should('not.be.empty')
          .should('have.text','kr')
  
          cy.get('[data-test="ActiveSorter-quality"]').should('have.text','kr') // super, že si overila aj inde currency ako v result card. 
        }) 
    })
  