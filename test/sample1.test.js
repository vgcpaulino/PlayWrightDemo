const { chromium } = require('playwright');
const { webkit } = require('playwright');

const assert = require('assert');
let browser;
let page;

import { getChrome } from '../helpers/browser.helper';

describe('Test Suite', () => {
    before(async () => {
        // browser = await chromium.launch({ headless: false });
        browser = await getChrome();
        // browser = await webkit.launch({ headless: false });
    });

 
    beforeEach(async () => {
        page = await browser.newPage();
    });


    it('should work', async () => {
        await page.goto('https://www.example.com/');
        assert.equal(await page.title(), 'Example Domain');
    });
    
    afterEach(async () => {
        await page.close();
    });

    after(async () => {
        await browser.close();
    });


});






