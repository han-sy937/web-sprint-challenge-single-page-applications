///<reference types="Cypress" />

describe('Testing pizza app', () => {
    it("visits app", () => {
        cy.visit("http://localhost:3000/form");
    });

    it("types in text area", () => {
        cy.get("#special").type("I love pizza").should("have.value", "I love pizza")
    })

    it("checks checkboxes", () => {
        cy.get("#olives").check().should("be.checked");
        cy.get("#pepper").check().should("be.checked");
    })

    it("submits form", () => {
        cy.contains("Add to Order").click({force: true});
    })
   
})