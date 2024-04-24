describe("Spelleology", () => {
  it("should return empty response", () => {
    cy.intercept("GET", "**/spells", []).as("getSpell")
    cy.visit("/spelleology")
    cy.wait("@getSpell")
    cy.contains("h1", "Mischief managed").should("be.visible")
  })

  it("should replace the response by one fake spell", () => {
    const fakeSpell = {
      id: 182,
      spell: "Aparecium",
      type: "Curse",
      effect: "causes the victim to suffer almost intolerable pain",
      isUnforgivable: false,
    }
    cy.intercept("GET", "**/spells", [fakeSpell]).as("getSpell")
    cy.visit("/spelleology")
    cy.wait("@getSpell")
    cy.contains(fakeSpell.effect).should("be.visible")
  })
})

describe("Kiwi.com", () => {
  beforeEach(() => {
    cy.setupStorage()
  })
  it("log in as valid user", () => {
    const user = {
      name: "testaccount@furbo.sk",
      password: "starterpack",
    }
    cy.intercept("https://auth.skypicker.com/v1/user.exists").as("userExists")
    cy.intercept("https://auth.skypicker.com/v1/user.login").as("userLogin")

    cy.visit("https://www.kiwi.com/en/")

    cy.get('[data-test="TopNav-SingInButton"]').click()
    cy.get('[data-test="MagicLogin-LoginViaEmail"]').click()
    cy.get('[data-test="MagicLogin-Email"]').type(user.name)
    cy.get('[data-test="MagicLogin-Continue"]').click()
    cy.wait("@userExists")
    cy.get('[data-test="MagicLogin-PasswordInput"]').type(user.password)
    cy.contains("button", "Sign in").click()
    cy.wait("@userLogin")
    cy.get('[data-test="MagicLogin-Password"]').should("not.exist")
    cy.get('[data-test="TopNav-AccountMenuButton"]').click()
    cy.contains(user.name).should("be.visible")
  })
})
