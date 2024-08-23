export class LoginPage{

    error_message() {
        return cy.get(".error-message-container h3");
    }

    login_button() {
        return cy.get("#login-button");
    }

    password_input() {
        return cy.get("#password");
    }

    username_input() {
        return cy.get("#user-name");
    }

}
