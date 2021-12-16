const { ElementHandle, Page } = require('@playwright/test');

module.exports = class KeyPressesPage {
    
    /**
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * @returns {ElementHandle}
     */
    async input() { return await this.page.$('input[id="target"]'); };
    
    /**
     * @returns {ElementHandle}
     */
    async result() { return await this.page.$('p[id="result"]'); };

    async openPage() {
        await this.page.goto("https://the-internet.herokuapp.com/key_presses");
    }

    async pressKeyLogResult(key) {
        await (await this.input()).press(key);
        var resultText = await result.textContent();
        console.log(`Key Press Result: ${resultText}`);
    }

}
