describe('Spells', () => {

    //ak pouzivas tieto objekty iba v jednom teste, je lepsie definovat si ich v ramci toho it blocku
    const spell = {
        id: null,
        spell: "Corona",
        type: "Curse",
        effect: "house arrested forever",
        isUnforgivable: true
    }
    const newSpell = {
        spell: "Soplik",
        effect: "sneezing forever",
        type: "Curse",
        isUnforgivable: true
    }

    it.only('return list of spells', () => {
        //skus vytiahnut baseURL do samostatnej premennej a prepouzit ju v kazdom requeste nasledovne
        //const backendBaseURL = http://localhost:3000
        //cy.request(backendBaseURL + '/spells')
        cy.request('http://localhost:3000/spells').then(response => {
            cy.log(response)
            cy.log(response.body)
            cy.log(response.body[0])
            expect(response.body).to.have.length(150)
        })
    })

    it.only('get specific spell', () => {
        cy.request('http://localhost:3000/spells/5b74edfa3228320021ab6238').then(response => {
            const spell = response.body
            expect(spell.effect).to.eq('moves an object upward')
            expect(spell.isUnforgivable).to.be.false
            expect(spell.type).to.eq('Spell')
            expect(spell.spell).to.eq('Ascendio')
        })
    })


    it.only('adds new spell', () => {
        cy.request('http://localhost:3000/spells/actions/reset')
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/spells',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newSpell
        })
        cy.visit('http://localhost:8080/#/spelleology')
        cy.contains(newSpell.effect).should("be.visible").click()
        cy.contains("h3", newSpell.effect).should("be.visible")
    })

    it.only('adds new spell-negative', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/spells',
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            },
            body: newSpell
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it.only('update spell', () => {
        //toto resetovanie kuziel skus dat do beforeEach casti
        cy.request('http://localhost:3000/spells/actions/reset')
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/spells/5b74ebd5fb6fc0739646754c',
            body: spell
        })
        //skus zavolat po updatovani GET request na ten isty endpoint a over ze sa kuzlo upravilo
        cy.visit('http://localhost:8080/#/spelleology')
        cy.contains(spell.effect).click()
        cy.contains("h3", spell.effect).should("be.visible")
    })

    it.only('delete spell', () => {
        cy.request('http://localhost:3000/spells/actions/reset')
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/spells/5b74ebd5fb6fc0739646754c',
            //pri metode DELETE nepotrebujes posielat telo kuzla
            body: spell
        })
        //po vymazani skus zavolat get request na to iste ID a over ze sa ti vrati chybova hlaska / status code
        cy.visit('http://localhost:8080/#/spelleology')
        cy.contains(spell.effect).should('not.exist')
    })

    it('delete all spells', () => {
        cy.request('http://localhost:3000/spells/actions/reset')
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/spells/actions/deleteAll',
            body: spell
        })
        cy.visit('http://localhost:8080/#/spelleology')
        cy.contains("h1", "Mischief managed")
    })
})

describe('Sorting hat', () => {
    it.only('Returns a house chosen by AI-powered magical algorithm', () => {
        cy.request('http://localhost:3000/sortingHat').then(response => {
            cy.log(response)
            cy.log(response.body)
            expect(response.body.house).to.be.oneOf(["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"])
        })
    })
})