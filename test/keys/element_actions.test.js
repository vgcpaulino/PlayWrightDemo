import { LoginPage } from '../../pages/theInternetLogin.page';
import { KeyPressesPage } from '../../pages/theInternetKeyPresses.page';
import { getElementAttribute, getElementValue } from '../../helpers/elementAttributes.helper';


describe('Element Interaction', () => {

  it(`Type / Click / Get Attributes`, async () => {
    const loginPage = new LoginPage();
    await loginPage.openPage();

    var userNameInput = await loginPage.userNameInput();
    var userPasswordInput = await loginPage.passwordInput();
    var loginBtn = await loginPage.loginBtn();

    // Type into input;
    await userNameInput.type('tomsmith');
    await userPasswordInput.type('SuperSecretPassword!');

    // Get attributes values;
    var userNameInputText = await getElementValue(userNameInput);
    var userNameInputAutoFocus = await getElementAttribute(userNameInput, 'autofocus');
    console.log(`Username Input Text: ${userNameInputText}`);
    console.log(`Input Auto Focus: ${userNameInputAutoFocus}`);

    // Click;
    await loginBtn.click();
    var loginConfirmation = await loginPage.loginConfirmation();
    var isVisible = await loginConfirmation.isVisible();
    console.log(`Login Confirmation is visible: ${isVisible}`);
  });

  it(`Key Press / Text Content`, async () => {
    const keyPresses = new KeyPressesPage(page);
    await keyPresses.openPage();

    var input = await keyPresses.input();
    var result = await keyPresses.result();

    // Key Press;
    await input.press('Control');
    // Get Text Content from result;
    var resultText = await result.textContent();
    console.log(`Key Press Result: ${resultText}`);
  });

});
