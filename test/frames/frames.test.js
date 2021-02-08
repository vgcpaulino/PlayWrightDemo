const playwright = require("playwright");
const { chromium, firefox, webkit } = require("playwright");

let browser, page;

describe('Element Interaction', () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
    });

    it(`Switch to iFrame`, async () => {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/iframe');

        var iFrameEle = await (await page.$('iframe')).contentFrame();
        var textAreaEle = await iFrameEle.$('body[id="tinymce"]');
        await textAreaEle.type('Testing Frames');
    });

    it(`Get iFrame Info`, async () => {
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
        var mainFrame = page.mainFrame();
        dumpFrameTree(mainFrame, '');
    });

    afterEach(async () => {
        await browser.close();
    });
});


function dumpFrameTree(frame, indent) {
    console.log(indent + frame.url());
    for (const child of frame.childFrames()) {
        dumpFrameTree(child, indent + '  ');
    }
}
