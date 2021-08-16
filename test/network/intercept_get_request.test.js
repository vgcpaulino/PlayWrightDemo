const { test, expect } = require('@playwright/test');

test.describe('Verify Requests', () => {

    test(`Intercept`, async ({ page }) => {
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
        await page.screenshot({ path: `./screenshots/network/_intercept.png` });

        const locator = page.locator('li[class="preview"]');
        await expect(locator).toHaveCount(1);
        await expect(locator).toHaveText('How to Mock a Response A. Friend ★★★★★ $0.00');
    });

});
