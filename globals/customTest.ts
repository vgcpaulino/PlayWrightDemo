import { test as base } from '@playwright/test';

export type TestOptions = {
  fullName: string;
};

export const test = base.extend<TestOptions>({
	fullName: ['John Doe', {option: true}],

	page: async ({
		page, fullName, navigationTimeout, 
	}, use) => {
		console.log(fullName);
		console.log(navigationTimeout);
		await use(page);
	}

});