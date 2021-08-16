const { test, expect } = require('@playwright/test');
const { source: axeSource } = require('axe-core');

test.describe('Accessibility Axe', () => {
    
    test('Get Acessibility Axe Results', async ({ page }) => {
        await page.goto('https://www.google.com/');
        
        await page.addScriptTag({ content: axeSource });
        const axeResults = await page.evaluate(() => {
            const result = axe
                .run()
                .then(results => {
                    console.log('Axe Accessibility execution was successful!');
                    return results;
                })
                .catch(err => {
                    console.log('An error occurred during Axe Accessibility verification!');
                    return err;
                })
            return result;
        });
        // console.log(`Accessibility Violations: ${axeResults.violations.length}`);s

        expect(axeResults.violations.length).toBeLessThanOrEqual(3);
    });

});
