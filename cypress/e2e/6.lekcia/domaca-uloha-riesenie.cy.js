describe('Spelleology', () => {

});

describe('Kiwi.com', () => {
    it('log in as valid user', () => {
        const user = {
            name: 'testaccount@furbo.sk',
            password: 'starterpack'
        }
        cy.intercept('https://auth.skypicker.com/v1/user.exists').as('userExists')
        cy.intercept('https://auth.skypicker.com/v1/user.login').as('userLogin')

        cy.visit('https://www.kiwi.com/en/')
        cy.get("[data-test=CookiesPopup-Accept]").click()

        cy.get('[data-test="TopNav-SingInButton"]').click()
        cy.get('[data-test="MagicLogin-LoginViaEmail"]').click()
        cy.get('[data-test="MagicLogin-Email"]').type(user.name)
        cy.get('[data-test="MagicLogin-Continue"]').click()
        cy.wait('@userExists')
        cy.get('[data-test="MagicLogin-PasswordInput"]').type(user.password)
        cy.contains('button', 'Sign in').click()
        cy.wait('@userLogin')
        cy.get('[data-test="MagicLogin-Password"]').should('not.exist')
        cy.get('[data-test="TopNav-AccountMenuButton"]').click()
        cy.contains(user.name).should('be.visible')
    });
});