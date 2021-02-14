
export class DropDownPage {
    
    constructor() { }

    dropdown = async () => { return await page.$('select[id="dropdown"]'); };

    async openPage() {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOptionById(id) {
        await selectOption(await this.dropdown(), id);
    }

    async selectOptionByLabel(label) {
        await selectOption(await this.dropdown(), { label: label});
    }

    async logSelectedOptionValue() {
        var dropDown = await this.dropdown();
        var selectedOpt = await (await dropDown.$('option[selected="selected"]')).textContent();
        console.log(`Selected Option: ${selectedOpt}`);
    }
    
}

async function selectOption(element, option) {
    await element.selectOption(option); 
}
