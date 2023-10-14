import { test, expect, request } from "@playwright/test";

let apiRequest, result, resultBody;

test.describe("Tests Playwright v 1.17", () => {
    test("Frame Locators", async ({ page }) => {
        await page.goto("http://the-internet.herokuapp.com/iframe");

        let frame, body;
        frame = page.frameLocator("#mce_0_ifr");
        body = frame.locator("#tinymce");
        await expect(body).toHaveText("Your content goes here.");

        body = page.frameLocator("#mce_0_ifr").locator("#tinymce");
        await expect(body).toHaveText("Your content goes here.");

        await body.evaluateHandle((node) => (node.innerText = ""));
        await expect(body).toHaveText("");

        await body.type("Testing");
        await expect(body).toHaveText("Testing");
    });

    test("APIs", async ({ page }, testInfo) => {
        await page.goto("http://the-internet.herokuapp.com/iframe");
        const titlePath = testInfo.titlePath;
        expect(titlePath).toStrictEqual([
            "test/versions/1.17.test.ts",
            "Tests Playwright v 1.17",
            "APIs",
        ]);

        const parallelIndex = testInfo.parallelIndex;
        expect(typeof parallelIndex).toBe("number");
    });
});
