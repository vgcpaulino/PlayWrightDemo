
describe('View Port', () => {
    
    it(`${browserName}: Null View Port`, async () => {
        context = await browser.newContext({ viewport: null });
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/');
        await page.screenshot({ path: `./screenshots/viewPort/${browserName}_null_viewport.png` });
    });

    it(`${browserName}: Setting View Port`, async () => {
        // context = await browser.newContext( { viewport: { width: 3840, height: 2160} }); // 4k
        context = await browser.newContext({ viewport: { width: 1920, height: 1080 } }); // Full HD
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/');
        await page.screenshot({ path: `./screenshots/viewPort/${browserName}_viewport.png` });
    });

});
