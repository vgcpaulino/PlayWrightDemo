import { chromium } from 'playwright';

export default class Browser {
    browser;
    page;
    
    constructor() {
        getBrowser();
    }

    async getBrowser() {
        this.browser = await chromium.launch({headless: false});
    }

    async openPage(url) {
        // this.page = newPage(browser);
        this.page = await this.browser.newPage();
        await this.page.goto(url);
    }


}

async function getBrowser() {
    return await chromium.launch({headless: false});
}

async function newPage(browser) {
    return await browser.newPage();
}