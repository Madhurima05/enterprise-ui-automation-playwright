const { test } = require('@playwright/test');
const SettingsPage = require('../pages/settingsPage');

test('settings toggle test', async ({ page }) => {
  const settings = new SettingsPage(page);
  await settings.goto();
  await settings.toggleNotifications(true);
});