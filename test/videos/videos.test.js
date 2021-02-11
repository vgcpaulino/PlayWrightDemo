
import { getBrowser } from '../../helpers/browserLauncher.helper';


let browser, page;

describe('Video', () => {
    const context = 
    beforeEach(async () => {
        browser = await getBrowser(browserType);
        page = await browser.newPage({ recordVideo: { dir: 'videos/' } });
    });

    it(`Page Video`, async () => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        var dropDown = await page.$('select[id="dropdown"]');
        await dropDown.selectOption('1');
        var selectedOpt = await getSelectedOptionValue(dropDown);
        console.log(`Selected Option: ${selectedOpt}`);
    });

    afterEach(async () => {
        await page.close();
        await browser.close();
    });

});
