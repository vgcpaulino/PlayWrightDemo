
export class AlertsPage {
    
    constructor() { }

    alertBtn = async () => { return await page.$('.example li:nth-child(1) button'); };
    confirmationAlertBtn = async () => { return await page.$('.example li:nth-child(2) button'); };
    promptAlertBtn = async () => { return await page.$('.example li:nth-child(3) button'); };
    result = async () => { return await page.$('p[id="result"]'); };

    async openPage() {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    }

    async logResultInformation() {
        var resultText = await (await this.result()).textContent();
        console.log(`Result Dialog Interaction: ${resultText}`);
    }

}
