import { Page } from '@playwright/test';

export class LoginPage {
	readonly page: Page;

	constructor(page: Page, str: string, stx: string, sty: string) {
		this.page = page;
	}

	openPage() {
		return this.page.goto('https://the-internet.herokuapp.com/login');
	}

	userNameInput() {
		return this.page.locator('#username');
	}

	passwordInput() {
		return this.page.locator('#password');
	}

	loginBtn() {
		return this.page.locator('#login > button');
	}

	loginConfirmation() {
		return this.page.locator('div[id="flash"]');
	}
}
