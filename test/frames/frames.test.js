import { FramesPage } from '../../pages/theInternetFrames.pages';

let framesPage;

describe('Element Interaction', () => {

    beforeEach(async () => {
        framesPage = new FramesPage();
    });

    it(`Switch to iFrame`, async () => {
        await framesPage.openPageIFrames();
        await framesPage.typeInfoTextArea('Testing Frames');
    });

    it(`Get iFrame Info`, async () => {
        await framesPage.openPageNestedFrames();
        await framesPage.logAllPageFrames();
    });

});


