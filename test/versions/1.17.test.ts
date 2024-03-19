import { test, expect } from '@playwright/test';

test.describe('Tests Playwright v1.17', () => {

	test('Frame Locators', async ({
		page 
	}) => {
		await page.goto('http://the-internet.herokuapp.com/iframe');

		let body;
		const frame = page.frameLocator('#mce_0_ifr');
		body = frame.locator('#tinymce');
		await expect(body).toHaveText('Your content goes here.');

		body = page.frameLocator('#mce_0_ifr').locator('#tinymce');
		await expect(body).toHaveText('Your content goes here.');

		await body.evaluateHandle((node: HTMLElement) => (node.innerText = ''));
		await expect(body).toHaveText('');

		await body.fill('Testing');
		await expect(body).toHaveText('Testing');
	});

	test('Playwright TestInfo', async ({
		page 
	}, testInfo) => {
		await page.goto('http://the-internet.herokuapp.com/iframe');
		const titlePath = testInfo.titlePath;
		
		expect(titlePath).toStrictEqual([
			'test/versions/1.17.test.ts',
			'Tests Playwright v1.17',
			'Playwright TestInfo',
		]);
        
		const parallelIndex = testInfo.parallelIndex;
		expect(typeof parallelIndex).toBe('number');
	});

});
