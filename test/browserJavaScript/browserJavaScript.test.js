const { test, expect } = require('@playwright/test');

test.describe('Java Script inside Browser', () => {
    
    test('Get User Agent from Navitagor', async ({ page }) => {
        await page.goto('https://www.google.com/');
        const userAgent = await page.evaluate(() => navigator.userAgent);;
        expect(userAgent).not.toBeUndefined();
    });

});
