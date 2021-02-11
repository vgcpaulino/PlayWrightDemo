import { browserFixture } from '../../fixtures/browser.fixture';
import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, page;
browserFixture.forEach(browserType => {

    describe('Verify Requests', () => {
        beforeEach(async () => {
            browser = await getBrowser(browserType);
            page = await browser.newPage();
        });

        it(`${browserType}:  Log Requests / Responses`, async () => {
            await page.on('request', request => {
              console.log('Request', request.method(), request.url());
            });
            await page.on('response', response => {
                console.log('Response', response.status(), response.url());
            });
            await page.goto("https://danube-webshop.herokuapp.com/");
        });

        afterEach(async () => {
            await page.close();
            await browser.close();
        });
    });

});
