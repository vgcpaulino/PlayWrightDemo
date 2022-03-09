import { Page } from "@playwright/test";

export class LoginPage {    
    readonly page: Page;
    
    constructor(page: Page) { 
        this.page = page;
    }

    async userNameInput() { return await this.page.waitForSelector('#username'); };
    
    async passwordInput() { return await this.page.waitForSelector('#password'); };
    
    async loginBtn() { return await this.page.waitForSelector('#login > button'); };
    
    async loginConfirmation() { return await this.page.waitForSelector('div[id="flash"]'); };

    async openPage() {
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

}
