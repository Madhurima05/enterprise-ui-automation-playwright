const { test } = require('@playwright/test');
const ProductsPage = require('../pages/productsPage');

test('add product test', async ({ page }) => {
  const products = new ProductsPage(page);
  await products.goto();
  await products.addProduct('Test Product');
});