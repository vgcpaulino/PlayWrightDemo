class AdminPage {
    page;

    constructor(page) {
      this.page = page;
    }
    
    async emailInput() {
        await this.page.$('input[data-tstid="Login_Username"]');
    } 
    async passwordInput() {
        await this.page.$('input[data-tstid="Login_Password"]');
    }

    async loginBtn() {
        await this.page.$('input[data-tstid="Login_CTA"]');
    }

    async login(email, password) {
        let emailInput = await this.page.$('input[data-tstid="Login_Username"]');
        let passwordInput = await this.page.$('input[data-tstid="Login_Password"]');
        let loginBtn = await this.page.$('input[data-tstid="Login_CTA"]');

        await emailInput.type(email);
        await passwordInput.type(password);
        await loginBtn.click();
    }
    
  }
  module.exports = { AdminPage };