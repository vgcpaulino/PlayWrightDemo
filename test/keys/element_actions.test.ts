import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/theInternetLogin.page';
import { KeyPressesPage } from '../../pages/theInternetKeyPresses.page';

test.describe('Element Interaction', () => {
	test('Type / Click / Get Attributes', async ({
		page 
	}) => {
		const loginPage = new LoginPage(page);

		await loginPage.openPage();
		await loginPage.userNameInput().pressSequentially('tomsmith');
		await loginPage
			.passwordInput()
			.pressSequentially('SuperSecretPassword!');

		await expect(loginPage.userNameInput()).toHaveValue('tomsmith');
		await expect(loginPage.userNameInput()).not.toBeFocused();

		await loginPage.loginBtn().click();

		await expect(loginPage.loginConfirmation()).toBeVisible();
	});

	test('Key Press / Text Content', async ({
		page 
	}) => {
		const keyPresses = new KeyPressesPage(page);
		await keyPresses.openPage();
		await keyPresses.input().press('Control');

		await expect(keyPresses.result()).toHaveText('You entered: CONTROL');
	});
});
