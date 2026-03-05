class ProfilePage {
  constructor(page) {
    this.page = page;
    this.nameInput = '#name';
    this.emailInput = '#email';
    this.saveButton = '#saveProfile';
  }

  async goto() {
    await this.page.goto('file://' + __dirname + '/../mock-site/profile.html');
  }

  async updateProfile(name, email) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.saveButton);
  }
}

module.exports = ProfilePage;