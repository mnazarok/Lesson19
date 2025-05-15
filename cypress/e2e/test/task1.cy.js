import registration  from "../src/mainPage.js";
import login  from "../src/login.js";
import { faker} from "@faker-js/faker";

const site ="https://guest:welcome2qauto@qauto.forstudy.space";

let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        firstName = firstName.replace(/[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ]/g, '');
        lastName = lastName.replace(/[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ]/g, '');
        const email = faker.internet.email({ firstName, lastName });
        const password = faker.internet.password(12, true, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/, '!@#');



//  перевірка поля Field name
describe("test field Name", () => {
    beforeEach(() => {
        cy.visit(site);
        cy.contains("button", "Sign up").click();
    });

    //перевірка пустого поля
    it("Empty field", () => {
        cy.get(registration.firstName).click();
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name required").and("have.css", "color", "rgb(220, 53, 69)");
    });

     //перевірка з не валідною датою
     it("Wrong data", () => { 
        cy.get(registration.firstName).type("1234");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name is invalid").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з одним символом
    it("Wrong data", () => { 
        cy.get(registration.firstName).type("a");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з 21 символом
    it("Wrong data1", () => { 
        cy.get(registration.firstName).type("abcqweqweqweqweqweqweqweqwe");
        cy.get(registration.lastName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });

});

//перевірка поля Last Name name
describe("test field Last Name", () => {
    beforeEach(() => {
        cy.visit(site);
        cy.contains("button", "Sign up").click();
    });
    
    //перевірка пустого поля
    it("Empty field", () => {
        cy.get(registration.lastName).click();
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Last name required").and("have.css", "color", "rgb(220, 53, 69)");
    });

     //перевірка з не валідною датою
     it("Wrong data", () => { 
        cy.get(registration.lastName).type("1234");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Last name is invalid").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з одним символом
    it("Wrong data", () => { 
        cy.get(registration.lastName).type("a");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Last name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з 21 символом
    it("Wrong data1", () => { 
        cy.get(registration.lastName).type("abcqweqweqweqweqweqweqweqwe");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Last name has to be from 2 to 20 characters long").and("have.css", "color", "rgb(220, 53, 69)");
    });

});

//перевырка поля Email
describe("test field Email", () => {
    beforeEach(() => {
        cy.visit(site);
        cy.contains("button", "Sign up").click();
    });

    // не валідні дані
    it("Wrong Date", () => {
        cy.get(registration.email).type("test.com");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Email is incorrect").and("have.css", "color", "rgb(220, 53, 69)");
    });
    
    //пусте поле
    it("test Empty field", () => {
        cy.get(registration.email).click();
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Email required").and("have.css", "color", "rgb(220, 53, 69)");
    });
});

//перевірка поля Password
describe("test password field", () => {
    beforeEach(() => {
        cy.visit(site);
        cy.contains("button", "Sign up").click();
    });

    it("empty field", () => {
        cy.get(registration.password).click();
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password required").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка з 1 символом
    it("1 symbols", () => {
        cy.get(registration.password).type("a");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка  більше 15 символів
    it("more 15", () => {
        cy.get(registration.password).type("qwertyuiopasdF1aa");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка  тільки маленькі букви
    it("only small letter", () => {
        cy.get(registration.password).type("qwertyuiop1");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка  тільки великі букви
    it("only capital letter", () => {
        cy.get(registration.password).type("QWEWQEQWEWQE1");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").and("have.css", "color", "rgb(220, 53, 69)");
    });

    //перевірка  тільки цифри
    it("only numbers", () => {
        cy.get(registration.password).type("123456789");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").and("have.css", "color", "rgb(220, 53, 69)");
    });

});

//перевірка Re-enter password
describe("Re-enter password", () => {
    beforeEach(() => {
        cy.visit(site);
        cy.contains("button", "Sign up").click();
    });

    it("Emtyfield", () => {
        cy.get(registration.repeatPassword).click();
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Re-enter password required").and("have.css", "color", "rgb(220, 53, 69)");
    });

    it("Password do not match", () => {
        cy.get(registration.password).type("Starapps23");
        cy.get(registration.repeatPassword).type("Starapps2");
        cy.get(registration.firstName).click();
        cy.get(".invalid-feedback").should("be.visible").and("contain.text", "Passwords do not match").and("have.css", "color", "rgb(220, 53, 69)");
    });

    describe("register button", () => {
        beforeEach(() => {
            cy.visit(site);
            cy.contains("button", "Sign up").click();
        });

        it("disabled button", () => {
            cy.contains('button', 'Register').should("be.disabled");
        });
    });

    
    describe("success registration", () => {
        beforeEach(() => {
            cy.visit(site);
            cy.contains("button", "Sign up").click();
        });

        it("success registration", () => {
            cy.get(registration.firstName).type(firstName);
            cy.get(registration.lastName).type(lastName);
            cy.get(registration.email).type(email);
            cy.get(registration.password).type(password, { sensitive: true })
            cy.get(registration.repeatPassword).type(password, { sensitive: true });
            cy.contains('button', 'Register').click({ force: true });
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
    });  

  describe("success Log in", ()=> {
    logInUser(email,password);
    
  })
});

function logInUser(email,password) {
    it("login", () =>{
        cy.visit(site);
        cy.get('.header_signin').click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.contains('button', 'Login').click({ force: true });
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

}



    