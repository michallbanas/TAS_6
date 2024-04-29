//nezabudnut vyhodit .only z testov :)
describe("Spelleology", () => {
    it.only("Return empty response", () => {
        cy.intercept("**/spells", []).as("spell")
        cy.visit("http://localhost:8080/#/spelleology")
        cy.wait("@spell")

        cy.contains("h1", "Mischief managed").should("be.visible")
    })

    it.only("Replace the spell by own spell", () => {
        //nazov premennej mozes dat popisnejsi, napr spell
        // spell musis vlozit do pola, nakolko stranka ocakava ako odpoved pole hodnot
        //priklad  cy.intercept("**/spells", [response] ).as("sortspell")

        const response = {
            id: "5b74eee93228320021ab6243",
            spell: "Cheering",
            type: "Charm",
            effect: " makes a person upset ",
            isUnforgivable: false
        }
        cy.intercept("**/spells", response).as("sortspell")
        //url nie je uplne spravna
        cy.visit("http://localhost:8080/spelleology#/spelleology")
        cy.wait("@sortspell")

        cy.contains("li", response.effect).should("be.visible").click()
        cy.contains("h3", response.effect).should("be.visible")
    })
})

describe('Kiwi-main page', () => {
    it.only("Log in account", () => {
        //tuto premennu by som nazval viac popisne, napr: user
        const id = {
            email: "testaccount@furbo.sk",
            heslo: "starterpack"
        }

        cy.log("Cookies accept")
        cy.setCookie("__kwc_agreed", "true")
        cy.setCookie("__kwc_settings", "%7B%22marketing%22%3Atrue%2C%22analytics%22%3Atrue%7D")

        //tu si mozes skratit url taktiez pomocou **
        //nazvy aliasov mozes dat podla endpointov: userExists a userLogin
        cy.intercept("https://auth.skypicker.com/v1/user.exists").as("email_response")
        cy.intercept("https://auth.skypicker.com/v1/user.login").as("password_response")

        cy.visit("https://www.kiwi.com/en/")

        cy.log("Enter e-mail and wait for a response")
        cy.contains('[data-test="TopNav-SingInButton"]', "Sign in").click()
        cy.get('[data-test="MagicLogin-LoginViaEmail"]').click()
        cy.get('[data-test="MagicLogin-Email"]').type(id.email)
        cy.contains('[data-test="MagicLogin-Continue"]', "Continue").click()
        cy.wait("@email_response")

        cy.log("Enter password and wait for a response")
        cy.get('[data-test="MagicLogin-PasswordInput"]').type(id.heslo)
        cy.contains("button", "Sign in").click()
        cy.wait("@password_response")

        cy.log("Login verification")
        cy.get('[data-test="TopNav-AccountMenuButton"]').should("be.visible").click()
        //tu by som radsej hladal ten element pomocou cy.contains metody
        cy.get('[class*="block space-y-xxs space-x-none w-full"]').find("p").should("contain.text", id.email)
    })
})