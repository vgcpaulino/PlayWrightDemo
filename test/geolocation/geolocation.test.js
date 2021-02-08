const { webkit, devices } = require('playwright');
const iPhone11 = devices['iPhone 11 Pro'];

describe('Geolocation Test', () => {
    it('Google Maps', async () => {
        const browser = await webkit.launch({ headless: false});
        const context = await browser.newContext({
            ...iPhone11,
            locale: 'en-US',
            geolocation: { longitude: -71.086601, latitude: 42.348251 },
            permissions: ['geolocation']
        });

        const page = await context.newPage();
        await page.goto('https://maps.google.com');
        await page.click('button[class*="ml-button-my-location-fab"]');
        await page.click('button[class*="ml-button-my-location-fab"]');
        await page.waitForRequest(/.*preview\/pwa/);
        await page.screenshot({ path: 'tempNew.png' });
        await page.reload();
        var currentUrl = await page.url();
        console.log(`Current Url: ${currentUrl}`);
        await browser.close();

    });
});