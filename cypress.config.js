const { defineConfig } = require("cypress");
const { _ } = require('lodash')
const del = require('del');


module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth:1920,
  defaultCommandTimeout: 6000,
  retries: {
    openMode:2,
    runMode:2,
  },
  video: true,
  e2e: {
    // baseUrl: 'https://testautomationpractice.blogspot.com/',
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**.cy.js',
    excludeSpecPattern : ['**/1-getting-started', '**/2-advanced-examples'],
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
      //   if (results && results.video) {
      //     // Do we have failures for any retry attempts?
      //     const failures = _.some(results.tests, (test) => {
      //       return _.some(test.attempts, { state: 'failed' })
      //     })
      //     if (!failures) {
      //       // delete the video if the spec passed and no tests retried
      //       return del(results.video)
      //     }
        // }
      })
    }
  },
});
