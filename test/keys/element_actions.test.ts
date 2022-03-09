import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/theInternetLogin.page';
import { KeyPressesPage } from '../../pages/theInternetKeyPresses.page';
import { getElementAttribute, getElementValue } from '../../helpers/elementAttributes.helper';

test.describe('Element Interaction', () => {

  test(`Type / Click / Get Attributes`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openPage();

    const userNameInput = await loginPage.userNameInput();
    const userPasswordInput = await loginPage.passwordInput();
    const loginBtn = await loginPage.loginBtn();

    await userNameInput.type('tomsmith');
    await userPasswordInput.type('SuperSecretPassword!');

    const userNameInputText = await getElementValue(userNameInput);
    expect(userNameInputText).toBe('tomsmith');

    const userNameInputAutoFocus = await getElementAttribute(page, userNameInput, 'autofocus');
    expect(userNameInputAutoFocus).toBeFalsy();

    await loginBtn.click();
    const loginConfirmation = await loginPage.loginConfirmation();
    const isVisible = await loginConfirmation.isVisible();
    expect(isVisible).toBeTruthy();
  });

  test(`Key Press / Text Content`, async ({ page }) => {
    const keyPresses = new KeyPressesPage(page);
    await keyPresses.openPage();

    const input = await keyPresses.input();
    await input.press('Control');
    
    const result = await keyPresses.result();
    const resultText = await result.textContent();
    expect(resultText).toBe('You entered: CONTROL');
  });

});
