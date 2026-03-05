class SettingsPage {
  constructor(page) {
    this.page = page;
    this.enableNotifications = '#enableNotifications';
  }

  async goto() {
    await this.page.goto('file://' + __dirname + '/../mock-site/settings.html');
  }

  async toggleNotifications(value) {
    const isChecked = await this.page.isChecked(this.enableNotifications);
    if (isChecked !== value) {
      await this.page.click(this.enableNotifications);
    }
  }
}

module.exports = SettingsPage;