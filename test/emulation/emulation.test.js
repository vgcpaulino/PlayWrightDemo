const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");
const { devices } = require("playwright");
let browser, context, page;


describe('Emulation', () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
    });

    it(`Chrome - iPhone`, async () => {
        context = await browser.newContext(devices['iPhone 11 Pro Max']);
        page = await context.newPage();
        await page.goto('https://www.whatsmybrowser.org/');
        var userAgent = await page.evaluate(() => `Browser User-Agent: ${navigator.userAgent}`);
        console.log(`${userAgent}`);
    });

    it(`Chrome - Pixel 2`, async () => {
        context = await browser.newContext(devices['Pixel 2 XL']);
        page = await context.newPage();
        await page.goto('https://www.whatsmybrowser.org/');
        var userAgent = await page.evaluate(() => `Browser User-Agent: ${navigator.userAgent}`);
        console.log(`${userAgent}`);
    });

    afterEach(async () => {
        await browser.close();
    });

});
