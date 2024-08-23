# repo_cypress_javascript

## Technologies
-Automation framework: Cypress
-Language: Javascript
-Testing libraries: Mocha + Chai

## Set up
1. On the project root --> npm install cypress --save-dev
2. Create the file credentials.json in cypress/fixtures/ and set it up:
    {
        "standar_user": "",
        "locked_user": "",
        "problem_user": "",
        "error_user": "",
        "visual_user": "",
        "password": ""
    }   

## Running test
1. npx cypress run --> Run all tests in headless mode.

## Debugging tests
1. Run "npx cypress open".
2. Select "E2E Testing".
2. Select browser.
3. Select spec file.
