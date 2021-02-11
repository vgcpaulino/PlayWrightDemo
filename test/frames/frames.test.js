import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, page;

describe('Element Interaction', () => {

    beforeEach(async () => {
        browser = await getBrowser();
        page = await browser.newPage();
    });

    it(`Switch to iFrame`, async () => {
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

