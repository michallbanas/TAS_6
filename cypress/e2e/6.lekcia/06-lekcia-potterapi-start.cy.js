//TODO
//1.ukazat definovanie route
//2.ukazat ako pockat na odpoved zo servera
//3.ukazat ako nahradit odpoved zo servera
describe('Sorting hat', () => {
    it('wait for the response', () => {
        cy.visit('http://localhost:8080/#/sortingHat')
        cy.get('[data-test="sort-button"]').click()
        cy.wait(3000)
        cy.get('[data-test="house-result"]').should('not.be.empty')
    })

    it('replace the response', () => {
        cy.visit('http://localhost:8080/#/sortingHat')
        cy.get('[data-test="sort-button"]').click()
        cy.get('[data-test="house-result"]').should('have.text', 'Samorin')
    })
});

//SAMOSTATNA PRACA
describe('Quote generator', () => {
    it.only('wait for the response', () => {
        cy.visit('http://localhost:8080/#/quotes')
        cy.get('[data-test="get-quote"]').click()
    });
})