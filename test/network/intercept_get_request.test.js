const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");

let browser, page;

describe('Intercep Requests', () => {
  for (const browserType of ["chromium", "firefox", "webkit"]) {
    
    beforeEach(async () => {
      browser = await playwright[browserType].launch({ headless: false });
      page = await browser.newPage();
    });

    it(`${browserType}:  Modifying Get Request`, async () => {
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
      await page.screenshot({ path: `./screenshots/network/${browserType}_with_Mock.png` });
    });

    it(`${browserType}:  Modifying Get Request`, async () => {
      await page.goto("https://danube-webshop.herokuapp.com/");
      await page.screenshot({ path: `./screenshots/network/${browserType}_without_Mock.png` });
    });


    afterEach(async () => {
      await browser.close();
    });

  }
});


