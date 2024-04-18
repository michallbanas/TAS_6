describe("Quote Generator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/#/quotes");
    });

    it("Get Quote", () => {
        //metoda by mala byt mimo testu
        //v metode chyba vstupny parameter na pocet kliknuti
        function addQuote() {
            cy.get('[data-test="get-quote"]').click();
        }

        const pocet = 4;
        for (let i = 0; i < pocet; i++) {
            addQuote();
        }
        //tu vies overit pocet wisdom points na zaklade premennej "pocet"
        cy.get('div.row.wisdom-level.col-md-10.mx-auto')
            .find('p[data-test="wisdom-points"]')
            .should('be.visible')
            .contains('4')

        //doplnit overenie poctu quotes cez cy.get(".quote-list li").should("have.length", pocet)

    });
}); 