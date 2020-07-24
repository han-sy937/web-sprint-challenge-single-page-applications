///<reference types="Cypress" />

describe('Testing pizza app', () => {
    it("visits app", () => {
        cy.visit("http://localhost:3000");
    })
   
})