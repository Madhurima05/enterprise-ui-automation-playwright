class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = '#welcomeMsg';
  }

  async goto() {
    await this.page.goto('file://' + __dirname + '/../mock-site/dashboard.html');
  }

  async getWelcomeText() {
    return await this.page.textContent(this.welcomeMessage);
  }
}

module.exports = DashboardPage;