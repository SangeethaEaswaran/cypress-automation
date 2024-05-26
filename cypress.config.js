const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth:1920,
  defaultCommandTimeout: 6000,
  retries: 2,
  e2e: {
    // baseUrl: 'https://testautomationpractice.blogspot.com/',
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**.cy.js',
    excludeSpecPattern : ['**/1-getting-started', '**/2-advanced-examples'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // specPattern: 'cypress\integration\test.js'
      // excludeSpecPattern : ['**/1-getting-started', '**/2-advanced-examples'],
    },
  },
});
