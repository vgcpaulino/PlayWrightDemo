import { getBrowser } from '../../helpers/browserLauncher.helper';
let browser, page;

describe('Java Script inside Browser', () => {

    beforeEach(async () => {
        browser = await getBrowser();
        page = await browser.newPage();
    });

    it(`Navigator`, async () => {
        await page.goto('https://www.google.com/');
        var result = await page.evaluate(() => `Browser User-Agent: ${navigator.userAgent}`);
        console.log(result);
    });

    afterEach(async () => {
        await page.close();
        await browser.close();
    });

});
