import { Page } from '@playwright/test';

export class FramesPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	iFrame() {
		return this.page.frameLocator('iframe');
	}

	async textArea() {
		return this.iFrame().locator('body[id="tinymce"]');
	}

	async openPageIFrames() {
		await this.page.goto('https://the-internet.herokuapp.com/iframe');
	}

	async typeInfoTextArea(text: string) {
		await (await this.textArea()).type(text);
	}

	/////////////////////////////////////////////////////////////////////////////////
	async openPageNestedFrames() {
		await this.page.goto(
			'https://the-internet.herokuapp.com/nested_frames'
		);
	}

	async pageMainFrame() {
		return this.page.mainFrame();
	}
}
