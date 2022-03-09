import { Page } from "@playwright/test";

export class AlertsPage {
    readonly page: Page;

    constructor(page: Page) { 
        this.page = page ;
    }

    async alertBtn() { return await this.page.$('.example li:nth-child(1) button'); };
    async confirmationAlertBtn() { return await this.page.$('.example li:nth-child(2) button'); };
    async promptAlertBtn() { return await this.page.$('.example li:nth-child(3) button'); };
    async result() { return await this.page.$('p[id="result"]'); };
    async openPage() { await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts'); }
    async getResultInformation() { return await (await this.result()).textContent(); }
}
