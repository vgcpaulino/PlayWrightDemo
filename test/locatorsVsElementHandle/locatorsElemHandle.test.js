const { test, expect } = require('@playwright/test');

test.describe('Locators Vs ElementHandle', () => {
    test('Re Query', async ({ page }) => {
        await page.setContent('<html> <h1>Title Before</h1> </html>');

        const ele = await page.waitForSelector('h1');
        const loc = page.locator('h1');
        
        const eleVal1 = await ele.textContent();
        const locVal1 = await loc.textContent();

        await page.setContent('<html> <h1>Title After</h1> </html>');

        const eleVal2 = await ele.textContent();
        const locVal2 = await loc.textContent();

        expect(eleVal1).toBe(eleVal2);
        expect(locVal1).not.toBe(locVal2);
    });
});
