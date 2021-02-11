import { browserFixture } from '../../fixtures/browser.fixture';
import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, context, page;
browserFixture.forEach(browserType => {
    describe('Data Driven - Browser', async () => {

        beforeEach(async () => {
            browser = await getBrowser(browserType);
            context = await browser.newContext({ viewport: null });
            page = await context.newPage();
        });

        it(`Browser: ${browserType}`, async () => {
            await page.goto('http://example.com')
        });

        afterEach(async () => {
            await browser.close();
        });

    });

});

