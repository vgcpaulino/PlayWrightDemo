const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");

var browser, page;
var dropDown;

describe('Dropdown', () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        dropDown = await page.$('select[id="dropdown"]');
        
    });

    it(`Select By Value`, async () => {
        await dropDown.selectOption('1');
        var selectedOpt = await getSelectedOptionValue(dropDown);
        console.log(`Selected Option: ${selectedOpt}`);
    });

    it(`Select By Label`, async () => {
        await dropDown.selectOption({ label: 'Option 2'});
        var selectedOpt = await getSelectedOptionValue(dropDown);
        console.log(`Selected Option: ${selectedOpt}`);
    });

    afterEach(async () => {
        await browser.close();
    });

});

async function getSelectedOptionValue(dropDownElement) {
    return await (await dropDownElement.$('option[selected="selected"]')).textContent();
}
