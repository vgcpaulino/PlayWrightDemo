import { DropDownPage } from '../../pages/theInternetDropDownPage.page';

let dropDownPage;

describe('Video', () => {
    
    beforeEach(async () => {
        page = await browser.newPage({ recordVideo: { dir: 'videos/' } });
        dropDownPage = new DropDownPage();        
    });

    it(`Page Video`, async () => {
        await dropDownPage.openPage();
        await dropDownPage.selectOptionById('1');
    });

});
