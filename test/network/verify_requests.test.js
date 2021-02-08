const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");

describe('Verify Requests', () => {
  for (const browserType of ["chromium", "firefox", "webkit"]) {

    it(`${browserType}:  Log Requests / Responses`, async () => {
      // const browser = await chromium.launch({ headless: false });
      const browser = await playwright[browserType].launch({ headless: false });
      const page = await browser.newPage();
      
      await page.on('request', request => {
        console.log('Request', request.method(), request.url());
      });

      await page.on('response', response => {
          console.log('Response', response.status(), response.url());
      })

      await page.goto("https://danube-webshop.herokuapp.com/");
      await browser.close();
    });
  }
});


