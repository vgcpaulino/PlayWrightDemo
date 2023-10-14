import { PlaywrightTestConfig } from "@playwright/test";
import { TestOptions } from "./globals/customTest";
import { devices } from "@playwright/test";

let config: PlaywrightTestConfig<TestOptions> = {
    globalSetup: "./globals/globalSetup.ts",
    globalTeardown: "./globals/globalTeardown.ts",
    // reporter: [
    //     // ['junit', { outputFile: 'results.xml' }],
    //     ["./reporters/my-awesome-reporter.ts", {}],
    //     ["allure-playwright", {}],
    // ],
    use: {
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        {
            name: "ChromiumDesktop",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "ChromiumMobile",
            use: { ...devices["Pixel 5"] },
        },
        {
            name: "FirefoxDesktop",
            use: {
                ...devices["Firefox Desktop"],
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "FirefoxMobile",
            use: {
                ...devices["Pixel 5"],
                defaultBrowserType: "firefox",
                isMobile: false,
            },
        },
        {
            name: "WebkitDesktop",
            use: {
                ...devices["Desktop Safari"],
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "WebkitMobile",
            use: { ...devices["iPhone 14 Pro Max"] },
        },

        {
            name: "Desktop",
            use: {
                browserName: "chromium",
                viewport: { width: 1920, height: 1080 },
            },
        },
    ],
    reporter: [["list"]],
    testMatch: "**/*.test.ts",
    outputDir: "./test-results",
};

export default config;

function getProject(projectName, browserName, vp) {
    return {
        name: projectName,
        use: {
            browserName: browserName,
            // description: `${browserName}${projectName}`,
            viewport: { width: vp.width, height: vp.height },
        },
    };
}
