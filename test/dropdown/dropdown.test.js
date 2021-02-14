import { DropDownPage } from '../../pages/theInternetDropDownPage.page';

let dropDownPage;

describe('Dropdown', () => {

    beforeEach(async () => {
        dropDownPage = new DropDownPage();
        await dropDownPage.openPage();
    });

    it(`Select By Value`, async () => {
        await dropDownPage.selectOptionById('1');
        await dropDownPage.logSelectedOptionValue();
    });

    it(`Select By Label`, async () => {
        await dropDownPage.selectOptionByLabel('Option 2');
        await dropDownPage.logSelectedOptionValue();
    });
});
