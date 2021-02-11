import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, page;

describe('Cookies', () => {

    beforeEach(async () => {
        browser = await getBrowser();
        page = await browser.newPage();
        await page.goto("http://demo.guru99.com/test/cookie/selenium_aut.php");
    });

    it(`Get Cookies`, async () => {
        await logAllCookies();
    });

    it(`Add New Cookie`, async () => {
        const newCookie = [{
            name: "customCookie",
            value: "customValue",
            url: "", // Optional
            domain: ".guru99.com", // Optional
            path: '/', // Optional
            expires: 2524611600, // Optional
            httpOnly: true, // Optional
            secure: true, // Optional
            sameSite: 'Strict' // Optional "Strict"|"Lax"|"None"
        }];
        await (await page.context()).addCookies(newCookie);
        await logAllCookies();
    });

    it(`Delete ALL Cookies`, async () => {
        await addCookie();
        await (await page.context()).clearCookies();
        await logAllCookies();
    });

    it(`Delete ONE Cookie`, async () => {
        await addCookie();
        await logAllCookies();
        // Get all cookies;
        const cookies = await getAllCookies();
        // Get all cookies from the variable execpt the one that will be removed;
        var cookiesToKeep = cookies.filter(cookie => cookie.name != 'customCookie');
        // Remove all cookies;
        await (await page.context()).clearCookies();
        // Add all the other cookies;
        await (await page.context()).addCookies(cookiesToKeep);;
        await logAllCookies();
    });

    afterEach(async () => {
        await browser.close();
    });

});

async function getAllCookies() {
    return await (await page.context()).cookies();
}

async function logAllCookies() {
    var cookies = await getAllCookies();
    console.log(`Qty of Cookies: ${cookies.length}`);
    cookies.forEach(cookie => {
        console.log(`Cookie Name: ${cookie.name} || Cookie Value: ${cookie.value}`);
    });
}

async function addCookie() {
    const newCookie = [{
        name: "customCookie",
        value: "customValue",
        url: "", // Optional
        domain: ".guru99.com", // Optional
        path: '/', // Optional
        expires: 2524611600, // Optional
        httpOnly: true, // Optional
        secure: true, // Optional
        sameSite: 'Strict' // Optional "Strict"|"Lax"|"None"
    }];
    await (await page.context()).addCookies(newCookie);
}

