
export class KeyPressesPage {
    
    constructor() { }

    input = async () => { return await page.$('input[id="target"]'); };
    result = async () => { return await page.$('p[id="result"]'); };

    async openPage() {
        await page.goto("https://the-internet.herokuapp.com/key_presses");
    }

    async pressKeyLogResult(key) {
        await (await this.input()).press(key);
        var resultText = await result.textContent();
        console.log(`Key Press Result: ${resultText}`);
    }

}
