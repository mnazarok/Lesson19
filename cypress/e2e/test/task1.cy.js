import registration  from "../src/mainPage.js";
 

const site ="https://guest:welcome2qauto@qauto.forstudy.space";
const SignUp = () => {
    cy.visit(site);
    cy.contains("button", "Sign up").click();
}

 //перевірка поля Field name
describe("test field Name", () => {
    //перевірка пустого поля
    it("Empty field", () => {
        SignUp();
        cy.get(registration.firstName).click();
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name required").and("have.css", "color", "rgb(220, 53, 69)");
    });

     //перевірка з не валідною датою
     it("Wrong data", () => { 
        SignUp();
        cy.get(registration.firstName).type("1234");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name is invalid").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з одним символом
    it("Wrong data", () => { 
        SignUp();
        cy.get(registration.firstName).type("a");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з 21 символом
    it("Wrong data1", () => { 
        SignUp();
        cy.get(registration.firstName).type("abcqweqweqweqweqweqweqweqwe");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });


});