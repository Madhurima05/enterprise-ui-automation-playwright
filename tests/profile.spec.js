const { test } = require('@playwright/test');
const ProfilePage = require('../pages/profilePage');

test('update profile test', async ({ page }) => {
  const profile = new ProfilePage(page);
  await profile.goto();
  await profile.updateProfile('Madhurima', 'madhurima@test.com');
});