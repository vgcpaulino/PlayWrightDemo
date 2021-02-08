import playwright from "playwright";
import { chromium, firefox, webkit } from "playwright";

var browser, page;
var dropDown;

describe('Select Browser Executable', () => {

    it(`Chrome`, async () => {
        var browser = await chromium.launch({ headless: false, executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" });
        var page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/');
        await browser.close();
    });
    
});

