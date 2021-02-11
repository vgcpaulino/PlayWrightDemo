import { browserDeviceFixture } from '../../fixtures/browser.fixture';
import { getBrowser, getDevice } from '../../helpers/browserLauncher.helper';

let browser, context, page;
browserDeviceFixture.forEach(deviceBrowserName => {
    describe('Data Drive - Devices', async () => {

        beforeEach(async () => {
            browser = await getBrowser();
            context = await browser.newContext(getDevice(deviceBrowserName));
            page = await context.newPage();
        });

        it(`Device: ${deviceBrowserName}`, async () => {
            await page.goto('http://example.com')
        });

        afterEach(async () => {
            await browser.close();
        });

    });

});

