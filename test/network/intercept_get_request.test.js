
describe('Verify Requests', () => {

    it(`${browserName}: Intercept`, async () => {
        const mockResponseObject = [
            {
                id: 1,
                title: "How to Mock a Response",
                author: "A. Friend",
                genre: "business",
                price: "0.00",
                rating: "★★★★★",
                stock: 65535,
            },
        ];
        await page.route("https://danube-webshop.herokuapp.com/api/books", (route) =>
            route.fulfill({
                contentType: "application/json",
                body: JSON.stringify(mockResponseObject),
            })
        );
        await page.goto("https://danube-webshop.herokuapp.com/");
        await page.screenshot({ path: `./screenshots/network/${browserName}_intercept.png` });
    });

    it(`${browserName}: Intercept`, async () => {
        await page.goto("https://danube-webshop.herokuapp.com/");
        await page.screenshot({ path: `./screenshots/network/${browserName}_without_intercept.png` });
    });


});
