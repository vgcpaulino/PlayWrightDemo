import { browserFixture } from '../../fixtures/browser.fixture';
import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, context, page;

browserFixture.forEach(browserType => {
    describe('View Port', () => {

        beforeEach(async () => {
            browser = await playwright[browserType].launch({ headless: false });
        });

        it(`${browserType}: Null View Port`, async () => {
            context = await browser.newContext({ viewport: null });
            page = await context.newPage();
            await page.goto('https://the-internet.herokuapp.com/');
            await page.screenshot({ path: `./screenshots/viewPort/${browserType}_null_viewport.png` });
        });

        it(`${browserType}: Setting View Port`, async () => {
            // context = await browser.newContext( { viewport: { width: 3840, height: 2160} }); // 4k
            context = await browser.newContext({ viewport: { width: 1920, height: 1080 } }); // Full HD
            page = await context.newPage();
            await page.goto('https://the-internet.herokuapp.com/');
            await page.screenshot({ path: `./screenshots/viewPort/${browserType}_viewport.png` });
        });

        afterEach(async () => {
            await browser.close();
        });

    });
});
