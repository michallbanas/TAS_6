

it("correct name is stored in new investment", () => {
    // Pred každým get by som použil cy.log() na zalogovanie toho čo robíme, nech je to čitateľné :)
    cy.get('#selectedFund').select('Galleon Guardian Fund')
    cy.get('#oneTimeInvestment').type('1500')
    cy.get('#years').type('15)')
    cy.get('[data-test="create-offer"]').click()
    cy.get('#customerName').type("Jozef")
    cy.get('[data-test="create-investment"]').click()
    cy.contains('h4', 'Investment issued for') // Find <ul> element
        .find('span')
        .should('contain.text', 'Jozef')
    cy.get('#showDetail').click()

    // Vyhol by som sa takýmto data-attribútom (s číslami) a zvolil miesto toho classu napr. .modal-body
    cy.get('div[data-v-6b91d680]')
        .contains('p[data-v-6b91d680]', 'Name: Jozef') // tak isto aj tu stačí: ('p', 'Name: Jozef')
        .should('be.visible');
}
)