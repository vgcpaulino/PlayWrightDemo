const { test, expect } = require('@playwright/test');
const DropDownPage = require('../../pages/theInternetDropDownPage.page');

let dropDownPage;

test.describe('Dropdown', () => {

    test.beforeEach(async ({ page }) => {
        dropDownPage = new DropDownPage(page);
        await dropDownPage.openPage();
    });

    test(`Select By Value`, async () => {
        await dropDownPage.selectOptionById('1');
        expect(await dropDownPage.getSelectedOptionValue()).toBe('Option 1');
    });

    test(`Select By Label`, async () => {
        await dropDownPage.selectOptionByLabel('Option 2');
        expect(await dropDownPage.getSelectedOptionValue()).toBe('Option 2');
    });

});
