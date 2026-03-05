const { test, expect } = require('@playwright/test');
const DashboardPage = require('../pages/dashboardPage');

test('dashboard navigation test', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();
  const text = await dashboard.getWelcomeText();
  expect(text).toContain('Welcome');
});