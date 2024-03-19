import { Page } from '@playwright/test';

export class KeyPressesPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	openPage() {
		return this.page.goto('https://the-internet.herokuapp.com/key_presses');
	}

	input() {
		return this.page.locator('input[id="target"]');
	}

	result() {
		return this.page.locator('p[id="result"]');
	}

	// async pressKeyLogResult(key) {
	//     await (await this.input()).press(key);
	//     var resultText = await result.textContent();
	//     console.log(`Key Press Result: ${resultText}`);
	// }
}
