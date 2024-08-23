const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    standar_user: "standard_user",
    locked_user: "locked_out_user",
    problem_user: "problem_user",
    password: "secret_sauce",
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
    specPattern:'**/*cy.js'
  },
  
});
