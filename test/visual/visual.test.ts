import { test, expect } from "@playwright/test";

test.describe("Playwright Visual Tests @visual", () => {
    test("Visual Test", async ({ page }) => {
        await page.goto("https://playwright.dev");

        await expect(page).toHaveScreenshot({
            animations: "disabled",
            fullPage: true,
            scale: "css",
        });
    });
});
