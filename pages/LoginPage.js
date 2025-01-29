const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput =  '//input[@id="username"]',
        this.passwordInput =  '//input[@id="password"]',
        this.signInBtn =  '//button[contains(text(),"Sign in")]'
        
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInBtn);
  }
}

module.exports = { LoginPage };