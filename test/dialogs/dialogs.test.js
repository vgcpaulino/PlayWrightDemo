const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");

let browser, page;
let alertBtn, confirmationAlertBtn, promptAlertBtn, result;

describe('Working with Dialogs.', () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        alertBtn = await page.$('.example li:nth-child(1) button');
        confirmationAlertBtn = await page.$('.example li:nth-child(2) button');
        promptAlertBtn = await page.$('.example li:nth-child(3) button');
        result = await page.$('p[id="result"]');
    });

    it(`Alert`, async () => {
        page.on('dialog', async dialog => {
            console.log(`Dialog Type: ${dialog.type()}`);
            console.log(`Dialog Default Value: ${dialog.defaultValue()}`);
            console.log(`Dialog Message: ${dialog.message()}`);
            dialog.accept();
        });
        await alertBtn.click();
    });

    it(`Confirmation Alert - Accept`, async () => {
        page.on('dialog', async dialog => {
            console.log(`Dialog Type: ${dialog.type()}`);
            console.log(`Dialog Default Value: ${dialog.defaultValue()}`);
            console.log(`Dialog Message: ${dialog.message()}`);
            dialog.accept();
        });
        await confirmationAlertBtn.click();
        var resultText = await result.textContent();
        console.log(`Result Dialog Interaction: ${resultText}`);
    });

    it(`Confirmation Alert - Dismiss`, async () => {
        page.on('dialog', async dialog => {
            console.log(`Dialog Type: ${dialog.type()}`);
            console.log(`Dialog Default Value: ${dialog.defaultValue()}`);
            console.log(`Dialog Message: ${dialog.message()}`);
            dialog.dismiss();
        });
        await confirmationAlertBtn.click();
        var resultText = await result.textContent();
        console.log(`Result Dialog Interaction: ${resultText}`);
    });

    it(`Prompt Text Alert`, async () => {
        page.on('dialog', async dialog => {
            console.log(`Dialog Type: ${dialog.type()}`);
            console.log(`Dialog Default Value: ${dialog.defaultValue()}`);
            console.log(`Dialog Message: ${dialog.message()}`);
            dialog.accept('Testing!');
        });
        await promptAlertBtn.click();
        var resultText = await result.textContent();
        console.log(`Result Dialog Interaction: ${resultText}`);
    });

    afterEach(async () => {
        await browser.close();
    });

});
