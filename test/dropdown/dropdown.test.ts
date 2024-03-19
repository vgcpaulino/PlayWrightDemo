import { test, expect } from '@playwright/test';
import { DropDownPage } from '../../pages/theInternetDropDownPage.page';

let dropDownPage: DropDownPage;

test.describe('Dropdown', () => {
	test.beforeEach(async ({
		page 
	}) => {
		dropDownPage = new DropDownPage(page);
		await dropDownPage.openPage();
	});

	test('Select By Value', async () => {
		await dropDownPage.dropdown().selectOption('1');
		await expect(dropDownPage.dropdown()).toContainText('Option 1');
	});

	test('Select By Label', async () => {
		await dropDownPage.dropdown().selectOption('Option 2');
		await expect(dropDownPage.dropdown()).toContainText('Option 2');
	});
});
