const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './Tests',
    timeout: 30000,
    workers: 6,
    //retries: 5, // Will retry a test up to 5x, if it fails.

    reporter: 'html',

    projects: [
        // {
        //   name: 'safari',
        //   use: {
        //       browserName: 'webkit',
        //       headless: false,
        //       viewport: { width: 1280, height: 720 },
        //       screenshot: 'off', // I have manual screenshot in testLogic
        //       video: 'retain-on-failure', // Save videos for failed tests
        //       trace: 'on-first-retry', // Capture trace for failed tests on first retry
        //     }
        // },
        {
          name: 'chrome',
          use: {
              browserName: 'chromium',
              headless: false,
              viewport: { width: 1280, height: 720 },
              screenshot: 'only-on-failure',
              video: 'retain-on-failure', // Save videos for failed tests
              trace: 'on-first-retry', // Capture trace for failed tests on first retry
              //...devices['Galaxy S9+'],
              //...devices['iPhone 13']
            }
        },
        // {
        //   name: 'edge',
        //   use: {
        //       browserName: 'chromium',
        //       channel: 'msedge',
        //       headless: false,
        //       viewport: { width: 1280, height: 720 },
        //       screenshot: 'only-on-failure',
        //       video: 'retain-on-failure', // Save videos for failed tests
        //       trace: 'on-first-retry', // Capture trace for failed tests on first retry
        //     }
        // },
        // {
        //   name: 'edge',
        //   use: {
        //       browserName: 'chromium',
        //       channel: 'msedge',
        //       headless: false,
        //       viewport: { width: 1280, height: 720 },
        //       screenshot: 'only-on-failure',
        //       video: 'retain-on-failure', // Save videos for failed tests
        //       trace: 'on-first-retry', // Capture trace for failed tests on first retry
        //     }
        // },
        // {
        //   name: 'firefox',
        //   use: {
        //       browserName: 'firefox',
        //       headless: false,
        //       viewport: { width: 1280, height: 720 },
        //       screenshot: 'only-on-failure',
        //       video: 'retain-on-failure', // Save videos for failed tests
        //       trace: 'on-first-retry', // Capture trace for failed tests on first retry
        //     }
        // },
    ],
});