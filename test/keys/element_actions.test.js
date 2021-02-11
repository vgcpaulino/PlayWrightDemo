import { getBrowser } from '../../helpers/browserLauncher.helper';

let browser, page;

describe('Element Interaction', () => {

  beforeEach(async () => {
    browser = await getBrowser();
    page = await browser.newPage();
  });

  it(`Type into Input`, async () => {
    await page.goto("https://the-internet.herokuapp.com/login");

    var userNameInput = await page.$('#username');
    var userPasswordInput = await page.$('#password');
    var loginBtn = await page.$('#login > button');

    await userNameInput.type('tomsmith');
    var inputText = await userNameInput.evaluate(e => e.value);
    var inputAutoFocus = await userNameInput.evaluate(e => e.autofocus);
    console.log(`Input Text: ${inputText}`);
    console.log(`Input Auto Focus: ${inputAutoFocus}`);

    await userPasswordInput.type('SuperSecretPassword!');
    await loginBtn.click();

    var loginConfirmation = await page.$('div[id="flash"]');
    var isVisible = await loginConfirmation.isVisible();
    console.log(`Login Confirmation is visible: ${isVisible}`);
  });

  it(`Key Press`, async () => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");

    var input = await page.$('input[id="target"]');
    await input.press('Control');
    var result = await page.$('p[id="result"]');

    var resultText = await result.textContent();
    console.log(`Key Press Result: ${resultText}`);
  });

  afterEach(async () => {
    await browser.close();
  });

});
