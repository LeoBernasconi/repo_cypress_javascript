# repo_cypress_javascript

## Technologies
- <u>Automation framework:</u> Cypress
- <u>Language:</u> Javascript
- <u>Testing libraries:</u> Mocha + Chai

## Set up
1. On the project root --> npm install cypress --save-dev
2. Create the file credentials.json in cypress/fixtures/ and set it up:
```json
    {
        "standar_user": "",
        "locked_user": "",
        "problem_user": "",
        "error_user": "",
        "visual_user": "",
        "password": ""
    }   

## Running test
Run all tests in headless mode.
```
npx cypress run
```

## Debugging tests
1. Run "npx cypress open".
2. Select "E2E Testing".
2. Select browser.
3. Select spec file.
