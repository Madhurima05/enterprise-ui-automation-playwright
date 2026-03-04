const { test, expect } = require('@playwright/test');

test('Verify homepage title', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await expect(page).toHaveTitle(/Automation/);
});