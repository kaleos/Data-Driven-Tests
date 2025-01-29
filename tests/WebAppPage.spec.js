const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { WebAppPage } = require('../pages/WebAppPage');
const testData = require('../data/testData.json');

let loginPage;
let webAppPage;

test.beforeEach(async ({ page }) => { 
  loginPage = new LoginPage(page);
  webAppPage = new WebAppPage(page);
  await page.goto(testData.baseUrl);
  await loginPage.login(testData.login.username, testData.login.password);
  await page.waitForTimeout(3000); // Add delay to ensure page is fully loaded
});

test("Verify 'Implement user authentication' is in the 'To Do' column and has the 'Feature' and 'High Priority' tag", async () => {
  await webAppPage.navigateTo(testData.testCase1.targetPage);
  let isVisible = await webAppPage.implementUserAuthVisible('Implement user authentication');
  expect(isVisible).toBe(true, 'Implement user authentication should be displayed');
  isVisible = await webAppPage.featureHighPriorityVisible('Feature', 'High Priority');
  expect(isVisible).toBe(true, 'Feature and High Priority tags should be displayed');
});

test("Verify 'Fix navigation bug' is in the 'To Do' column and has the 'Bug' tag", async () => {
  await webAppPage.navigateTo(testData.testCase2.targetPage);
  let isVisible = await webAppPage.fixNavigationBugVisible('Fix navigation bug');
  expect(isVisible).toBe(true, 'Fix navigation bug should be displayed');
  isVisible = await webAppPage.bugTagVisible('Bug');
  expect(isVisible).toBe(true, 'Bug tag should be displayed');
});

test("Verify 'Design system updates' is in the 'In Progress' column and has the 'Design' tag", async () => {
  await webAppPage.navigateTo(testData.testCase3.targetPage);
  let isVisible = await webAppPage.designSystemUpdatesVisible('Design system updates');
  expect(isVisible).toBe(true, 'Design system updates should be displayed');
  isVisible = await webAppPage.designTagVisible('Design');
  expect(isVisible).toBe(true, 'Design tag should be displayed');
});