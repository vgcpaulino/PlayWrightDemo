const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");
const axeSource = require('axe-core').source;

let browser, context, page;

describe('Accessibility Axe', () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
    });

    it(`Get Acessibility Axe Results`, async () => {
        await page.goto('https://www.google.com/');
        // Adds the script to be called;
        await page.addScriptTag({ content: axeSource }); 
        // Execute Axe and get out the results;
        var axeResults = await page.evaluate(() => {
            var result = axe
            .run()
            .then(results => {
                console.log('Axe Accessibility execution was successful!');
                return results;
            })
            .catch(err => {
                console.log('An error occurred during Axe Accessibility verification!');
                return err;
            })
            return result;
        });
        console.log(`Accessibility Violations: ${axeResults.violations.length}`);
    });


    afterEach(async () => {
        await browser.close();
    });

});
