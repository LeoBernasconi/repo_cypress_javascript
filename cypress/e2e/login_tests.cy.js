import {LoginPage} from '../page_objects/login_page';

const login_page = new LoginPage();


describe('Login tests', () => {
    let credentials;   

    before(() =>{
        cy.fixture('credentials').then((data) => {
            credentials = data;
        });
    })

    beforeEach(() =>{
        cy.visit('/');
    })

    it('Login OK', () =>{
        login_page.username_input().clear().type(credentials.standar_user);
        login_page.password_input().clear().type(credentials.password);
        login_page.login_button().click();
        cy.url().should('include', 'inventory');      
    })

    it('Login sending an empty username', () =>{
        login_page.username_input().clear();
        login_page.password_input().clear().type(credentials.password);
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username is required").should('be.visible');
    })

    it('Login sending an non-registered user', () =>{
        login_page.username_input().clear().type("non_registered_user");
        login_page.password_input().clear().type(credentials.password);
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username and password do not match any user in this service").should('be.visible');
    })

    it('Login sending an empty password', () =>{
        login_page.username_input().clear().type(credentials.standar_user);
        login_page.password_input().clear();
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Password is required").should('be.visible');
    })

    it('Login sending an incorrect password', () =>{
        login_page.username_input().clear().type(credentials.standar_user);
        login_page.password_input().clear().type("wrong_password");
        login_page.login_button().click();
        login_page.error_message().should('be.visible');
        cy.contains("Epic sadface: Username and password do not match any user in this service").should('be.visible');
    })

    it('Login with a locked user', () =>{
        login_page.username_input().clear().type(credentials.locked_user);
        login_page.password_input().clear().type(credentials.password);
        login_page.login_button().click();
        cy.contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible');
    })

})





