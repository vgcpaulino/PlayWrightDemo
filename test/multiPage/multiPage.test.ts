import { test, expect } from "@playwright/test";

test.describe("Multi Pages", () => {
    test(`Open two Browser Windows (same browser, different context)`, async ({
        browser,
    }) => {
        const homeUrl = "https://the-internet.herokuapp.com/";
        const homePage = await browser.newPage();
        await homePage.goto(homeUrl);

        const loginUrl = "https://the-internet.herokuapp.com/login";
        const loginPage = await browser.newPage();
        await loginPage.goto(loginUrl);

        await expect(homePage).toHaveURL(homeUrl);
        await expect(loginPage).toHaveURL(loginUrl);

        expect(homePage).not.toMatchObject(loginPage);

        const homePageContext = homePage.context();
        const loginPageContext = loginPage.context();
        expect(homePageContext).not.toMatchObject(loginPageContext);

        const homePageBrowser = homePageContext.browser();
        const loginPageBrowser = loginPageContext.browser();
        expect(homePageBrowser).toMatchObject(loginPageBrowser);
    });

    test(`Open two Browser Tabs (same browser, same context)`, async ({
        context,
    }) => {
        const homeUrl = "https://the-internet.herokuapp.com/";
        const homePage = await context.newPage();
        await homePage.goto(homeUrl);

        const loginUrl = "https://the-internet.herokuapp.com/login";
        const loginPage = await context.newPage();
        await loginPage.goto(loginUrl);

        await expect(homePage).toHaveURL(homeUrl);
        await expect(loginPage).toHaveURL(loginUrl);

        expect(homePage).not.toMatchObject(loginPage);

        const homePageContext = homePage.context();
        const loginPageContext = loginPage.context();
        expect(homePageContext).toMatchObject(loginPageContext);

        const homePageBrowser = homePageContext.browser();
        const loginPageBrowser = loginPageContext.browser();
        expect(homePageBrowser).toMatchObject(loginPageBrowser);
    });
});
