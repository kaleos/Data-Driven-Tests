const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MobileAppPage } = require('../pages/MobileAppPage');
const testData = require('../data/testData.json');

let loginPage;
let mobileAppPage;

test.beforeEach(async ({ page }) => { 
  loginPage = new LoginPage(page);
  mobileAppPage = new MobileAppPage(page);

  await page.goto(testData.baseUrl);
  await loginPage.login(testData.login.username, testData.login.password);
});

test("Verify 'Push notification system' is in the 'To Do' column and has the 'Feature' tag", async () => {
  await mobileAppPage.navigateTo(testData.testCase4.targetPage);
  let isVisible = await mobileAppPage.pushNotificationSystemVisible('Push notification system');
  expect(isVisible).toBe(true, 'Push notification system should be displayed');
  isVisible = await mobileAppPage.featureTagVisible('Feature');
  expect(isVisible).toBe(true, 'Feature tag should be displayed');
});

test("Verify 'Offline mode' is in the 'Progress' column and has the 'Feature' and 'High Priority' tag", async () => {
  await mobileAppPage.navigateTo(testData.testCase5.targetPage);
  let isVisible = await mobileAppPage.offlineModeVisible('Offline mode');
  expect(isVisible).toBe(true, 'Offline mode should be displayed');
  isVisible = await mobileAppPage.featureHighPriorityVisible('Feature', 'High Priority');
  expect(isVisible).toBe(true, 'Feature and High Priority tags should be displayed');
});

test("Verify 'App icon design' is in the 'Done' column and has the 'Design' tag", async () => {
  await mobileAppPage.navigateTo(testData.testCase6.targetPage);
  let isVisible = await mobileAppPage.appIconDesignVisible('App icon design');
  expect(isVisible).toBe(true, 'App icon design should be displayed');
  isVisible = await mobileAppPage.designTagVisible('Design');
  expect(isVisible).toBe(true, 'Design tag should be displayed');
});