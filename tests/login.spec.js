const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('login test', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('Madhurima', 'Password123');
});