class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addProductBtn = '#addProduct';
    this.productNameInput = '#productName';
    this.saveBtn = '#saveProduct';
  }

  async goto() {
    await this.page.goto('file://' + __dirname + '/../mock-site/products.html');
  }

  async addProduct(name) {
    await this.page.click(this.addProductBtn);
    await this.page.fill(this.productNameInput, name);
    await this.page.click(this.saveBtn);
  }
}

module.exports = ProductsPage;