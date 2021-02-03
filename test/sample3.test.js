import { chromium } from 'playwright';
import assert from 'assert';

let browser, page;

describe('Sample 3', () => {
    before(async () => {
        browser = await chromium.launch({ headless: false });
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    it('Test 1', async () => {
        await page.goto('https://todobackend.com/client/index.html?https://todo-backend-express-knex.herokuapp.com/');
        
        let testData = {
            title: 'Injected (non) completed Todo',
            order: null,
            completed: false
        };
        await page.route('https://todo-backend-express-knex.herokuapp.com/', async(route, request) => {
            await route.fulfill ({
                status: 200,
                body: JSON.stringify([testData])
            })
          });

        // await page.goto('https://todobackend.com/client/index.html?https://localhost:1080/api/users');
        var a = 1;
    });


    afterEach(async () => {
        await page.close();
    });

    after(async () => {
        await browser.close();
    });

});






