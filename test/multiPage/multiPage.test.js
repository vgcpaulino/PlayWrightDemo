import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser;

describe('Multi Pages', () => {

    beforeEach(async () => {
        browser = await getBrowser();
    });

    it(`Open two Browser windows`, async () => {
        const page1 = await browser.newPage();
        const page2 = await browser.newPage();
        await page1.goto("https://the-internet.herokuapp.com/");
        await page2.goto("https://the-internet.herokuapp.com/login");
    });

    it(`Open two Browser tabs`, async () => {
        const context = await browser.newContext();
        const page1 = await context.newPage();
        const page2 = await context.newPage();
        await page1.goto("https://the-internet.herokuapp.com/");
        await page2.goto("https://the-internet.herokuapp.com/login");
    });

    it(`Open two Browser tabs - Selecting Active`, async () => {
        const context = await browser.newContext();
        const page1 = await context.newPage();
        const page2 = await context.newPage();
        await page1.goto("https://the-internet.herokuapp.com/");
        await page2.goto("https://the-internet.herokuapp.com/login");
        await page1.bringToFront();
        await page2.bringToFront();
    });

    afterEach(async () => {
        await browser.close();
    });

});
