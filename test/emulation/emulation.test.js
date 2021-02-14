import { browserDeviceFixture } from '../../fixtures/browser.fixture';
import { getDevice } from '../../helpers/browserLauncher.helper';

browserDeviceFixture.forEach(deviceBrowserName => {
    describe('Emulation', () => {

        beforeEach(async () => {
            context = await browser.newContext(getDevice(deviceBrowserName));
            page = await context.newPage();
            await page.goto('https://www.whatsmybrowser.org/');
        });

        it.jestPlaywrightSkip({ browsers: ['firefox'] }, 'should skip this one', async () => {
            var userAgent = await page.evaluate(() => `Browser User-Agent: ${navigator.userAgent}`);
            console.log(`${userAgent}`);
        });

    });

});