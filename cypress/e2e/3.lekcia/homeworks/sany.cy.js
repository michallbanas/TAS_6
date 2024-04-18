describe("PotterQuotes", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/#/quotes")
    })

    function addQuote(numberofClicks) {
        for (let i = 0; i < numberofClicks; i++) {
            cy.get('[data-test="get-quote"]').click()
        }
    }

    it("clicks on Get Quote 5 times and verifies the number of generated quotes", () => {
        //pocet kliknuti mozes vytiahnut do samostatnej premennej
        //priklad: const numberOfClicks = 5
        //a nasledne prepouzit v teste
        addQuote(5)
        cy.get('ul.quote-list').find('li').should('have.length', 5)

    })
})