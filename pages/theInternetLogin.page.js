
export class LoginPage {
    
    constructor() { }

    userNameInput = async () => { return await page.$('#username'); };
    passwordInput = async () => { return await page.$('#password'); };
    loginBtn = async () => { return await page.$('#login > button'); };
    loginConfirmation = async () => { return await page.$('div[id="flash"]'); };

    async openPage() {
        await page.goto("https://the-internet.herokuapp.com/login");
    }

}
