import { Page } from "@playwright/test";

export class AlertsPage {
    readonly page: Page;

    constructor(page: Page) { 
        this.page = page ;
    }

    alertBtn() { return this.page.locator('.example li:nth-child(1) button'); };
    confirmationAlertBtn() { return this.page.locator('.example li:nth-child(2) button'); };
    promptAlertBtn() { return this.page.locator('.example li:nth-child(3) button'); };
    result() { return this.page.locator('p[id="result"]'); };
    openPage() { return this.page.goto('https://the-internet.herokuapp.com/javascript_alerts'); }
    getResultInformation() { return this.result().textContent(); }
}
