const { ElementHandle, Page } = require('@playwright/test');

module.exports = class AlertsPage {
    
    /**
     * @param {Page} page 
     */
    constructor(page) { 
        this.page = page;
    }

    /**
     * @returns {ElementHandle}
     */
    async alertBtn() { return await this.page.$('.example li:nth-child(1) button'); };
    
    /**
     * @returns {ElementHandle}
     */
    async confirmationAlertBtn() { return await this.page.$('.example li:nth-child(2) button'); };
    
    /**
     * @returns {ElementHandle}
     */
    async promptAlertBtn() { return await this.page.$('.example li:nth-child(3) button'); };
    
    /**
     * @returns {ElementHandle}
     */
    async result() { return await this.page.$('p[id="result"]'); };

    async openPage() {
        await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    }
    
    /**
     * 
     * @returns {String}
     */
    async getResultInformation() {
        return await (await this.result()).textContent();
    }

}
