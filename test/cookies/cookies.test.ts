import { test, expect, Cookie } from '@playwright/test';

test.describe('Cookies', () => {

    test('Get all Cookies', async ({ context, page }) => {
        await page.goto('https://www.guru99.com/');
        const cookies = await context.cookies();
        expect(cookies.length).toBeGreaterThan(0);
    });

    test('Add new Cookie', async ({ context, page }) => {
        await page.goto("http://demo.guru99.com/test/cookie/selenium_aut.php");

        const browserCookies = await context.cookies();
        browserCookies.push({
            name: "customCookie",
            value: "customValue",
            domain: ".guru99.com",
            path: '/',
            sameSite: 'Lax'
        } as Cookie);

        await context.addCookies(browserCookies);
        const cookies = await context.cookies();
        const cookie = cookies.filter(cookie => cookie.name === 'customCookie')[0];

        expect(cookie.name).toBe('customCookie');
    });

    test('Delete ALL Cookies', async ({ context, page }) => {
        await page.goto("http://demo.guru99.com/test/cookie/selenium_aut.php");

        await context.clearCookies();

        const cookiesAfter = await context.cookies();
        expect(cookiesAfter.length).toBe(0);
    });

});
