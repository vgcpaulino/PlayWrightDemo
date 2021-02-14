
describe('Verify Requests', () => {

    it(`${browserName}:  Log Requests / Responses`, async () => {
        await page.on('request', request => {
            console.log('Request', request.method(), request.url());
        });
        await page.on('response', response => {
            console.log('Response', response.status(), response.url());
        });
        await page.goto("https://danube-webshop.herokuapp.com/");
    });

});
