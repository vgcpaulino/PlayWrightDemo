const { ElementHandle, Page } = require('@playwright/test');

module.exports = class DropDownPage {
    
    /**
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * @returns {ElementHandle}
     */
    async dropdown() { 
        return await this.page.waitForSelector('select[id="dropdown"]'); 
    };

    async openPage() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOptionById(id) {
        await selectOption(await this.dropdown(), id);
    }

    async selectOptionByLabel(label) {
        await selectOption(await this.dropdown(), { label: label});
    }

    async getSelectedOptionValue() {
        const dropDown = await this.dropdown();
        const selectedOpt = await (await dropDown.$('option[selected="selected"]')).textContent();
        return selectedOpt;
    }    
}

async function selectOption(element, option) {
    await element.selectOption(option); 
}
