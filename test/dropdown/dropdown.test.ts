import { test, expect } from '@playwright/test';
import { DropDownPage } from '../../pages/theInternetDropDownPage.page';

let dropDownPage: DropDownPage;

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
