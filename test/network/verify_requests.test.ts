import { test, expect } from '@playwright/test';

test.describe('Verify Requests', () => {

    test(`Log Requests / Responses`, async ({ page }) => {
        
        let browserRequests = [];
        page.on('request', request => {
            // console.log('Request', request.method(), request.url());
            browserRequests.push(request);
        });
        
        let browserResponses = [];
        page.on('response', response => {
            // console.log('Response', response.status(), response.url());
            browserResponses.push(response);
        });
        
        await page.goto("https://danube-webshop.herokuapp.com/");

        expect(browserRequests.length).toBe(browserResponses.length);
    });

});
