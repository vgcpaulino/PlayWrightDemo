const { test, expect } = require('@playwright/test');
const FramesPage = require('../../pages/theInternetFrames.pages');

let framesPage;

test.describe('Frames Interaction', () => {

    test.beforeEach(async ({ page }) => {
        framesPage = new FramesPage(page);
    });

    test(`Switch to iFrame`, async () => {
        await framesPage.openPageIFrames();
        await framesPage.typeInfoTextArea('Testing Frames');
        
        const frameText = await (await framesPage.textArea()).innerText();
        expect(frameText).toBe('Testing FramesYour content goes here.');
    });

    test(`Get iFrame Info`, async ({ page }) => {
        framesPage = new FramesPage(page);

        await framesPage.openPageNestedFrames();

        const mainFrame = page.mainFrame();
        const arrayFrames = mainFrame.childFrames();
    
        const childFrame = arrayFrames[0].childFrames();
        expect(childFrame.length).toBe(3);
    });

});
