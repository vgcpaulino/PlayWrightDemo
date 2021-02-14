import { source as axeSource } from 'axe-core';

describe('Accessibility Axe', () => {

    it(`Get Acessibility Axe Results`, async () => {
        await page.goto('https://www.google.com/');
        // Adds the script to be called;
        await page.addScriptTag({ content: axeSource }); 
        // Execute Axe and get out the results;
        var axeResults = await page.evaluate(() => {
            var result = axe
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
        console.log(`Accessibility Violations: ${axeResults.violations.length}`);
    });

});
