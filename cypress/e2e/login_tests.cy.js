import {LoginPage} from '../page_objects/login_page';

const login_page = new LoginPage();

describe('Login tests', () => {
    const locked_user = Cypress.env('standar_user');
    const password = Cypress.env('password');
    const standar_user = Cypress.env('standar_user');

    beforeEach(() =>{
        cy.visit('/');
    })

    it('Login OK', () =>{
        login_page.username_input().clear();
        login_page.username_input().type(standar_user);
        login_page.password_input().clear();
        login_page.password_input().type(password);
        login_page.login_button().click();
        cy.url().should('include', 'inventory');      
    })

    it('Login sending an empty username', () =>{
        login_page.username_input().clear();
        login_page.password_input().clear();
        login_page.password_input().type(password);
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username is required").should('be.visible');
    })

    it('Login sending an non-registered user', () =>{
        login_page.username_input().clear();
        login_page.username_input().type("non_registered_user");
        login_page.password_input().clear();
        login_page.password_input().type(password);
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username and password do not match any user in this service").should('be.visible');
    })

    it('Login sending an empty password', () =>{
        login_page.username_input().clear();
        login_page.username_input().type("non_registered_user");
        login_page.password_input().clear();
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Password is required").should('be.visible');
    })

    it('Login sending an incorrect password', () =>{
        login_page.username_input().clear();
        login_page.username_input().type("non_registered_user");
        login_page.password_input().clear();
        login_page.password_input().type(password);
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username and password do not match any user in this service").should('be.visible');
    })

    it('Login with a locked user', () =>{
        login_page.username_input().clear();
        login_page.username_input().type(locked_user);
        login_page.password_input().clear();
        login_page.password_input().type(password);
        login_page.login_button().click();
        cy.url().should('include', 'inventory');
    })

})
