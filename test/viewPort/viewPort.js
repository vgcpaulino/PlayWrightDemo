
import playwright from "playwright";
import { chromium, firefox, webkit } from "playwright";

let browser, context, page;

describe('View Port', () => {
    for (const browserType of ["chromium", "firefox", "webkit"]) {
        beforeEach(async () => {
            browser = await playwright[browserType].launch({ headless: false });
        });

        it(`${browserType}: Null View Port`, async () => {
            context = await browser.newContext({ viewport: null });
            page = await context.newPage();
            await page.goto('https://the-internet.herokuapp.com/');
            await delay(5000);
            await page.screenshot({ path: `./screenshots/viewPort/${browserType}_null_viewport.png` });
        });

        it(`${browserType}: Setting View Port`, async () => {
            // context = await browser.newContext( { viewport: { width: 3840, height: 2160} }); // 4k
            context = await browser.newContext({ viewport: { width: 1920, height: 1080 } }); // Full HD
            page = await context.newPage();
            await page.goto('https://the-internet.herokuapp.com/');
            await delay(5000);
            await page.screenshot({ path: `./screenshots/viewPort/${browserType}_viewport.png` });
        });

        afterEach(async () => {
            await browser.close();
        });
    }
});

async function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
