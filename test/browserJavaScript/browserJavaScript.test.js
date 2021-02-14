
describe('Java Script inside Browser', () => {

    it(`Navigator`, async () => {
        await page.goto('https://www.google.com/');
        var result = await page.evaluate(() => `Browser User-Agent: ${navigator.userAgent}`);
        console.log(result);
    });

});
