const { ElementHandle, Page } = require('@playwright/test');

module.exports = class LoginPage {    
    
    /**
     * @param {Page} page 
     */
    constructor(page) { 
        this.page = page;
    }

    /**
     * @returns {ElementHandle}
     */
    async userNameInput() { return await this.page.waitForSelector('#username'); };
    
    /**
     * @returns {ElementHandle}
     */
    async passwordInput() { return await this.page.waitForSelector('#password'); };
    
    /**
     * @returns {ElementHandle}
     */
    async loginBtn() { return await this.page.waitForSelector('#login > button'); };
    
    /**
     * @returns {ElementHandle}
     */
    async loginConfirmation() { return await this.page.waitForSelector('div[id="flash"]'); };

    async openPage() {
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

}
