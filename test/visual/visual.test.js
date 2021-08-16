const { test, expect } = require('@playwright/test');

test.describe('Playwright Visual Tests @visual', () => {

    test('Visual Test', async ({ page }) => {
        await page.goto('https://playwright.dev');
        expect(await page.screenshot()).toMatchSnapshot('landing.png');
    });

});
