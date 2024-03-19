import { test, expect } from '@playwright/test';
import {
	type AxeResults,
	source as axeSource,
	type RunOptions,
} from 'axe-core';

test.describe('Accessibility Axe', () => {

	test('Get Acessibility Axe Results', async ({
		page 
	}) => {
		await page.goto('https://www.google.com/');

		await page.addScriptTag({ content: axeSource });
		const axeOptions: RunOptions = {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa'] 
			},
		};
		const axeResults = await page.evaluate(
			([axeOptions]) => {
				// @ts-expect-error Running inside browser;
				const result = axe
					.run(axeOptions)
					.then((results: AxeResults) => {
						console.log(
							'Axe Accessibility execution was successful!'
						);
						return results;
					})
					.catch((err: unknown) => {
						console.log(
							'An error occurred during Axe Accessibility verification!'
						);
						return err;
					});
				return result;
			},
			[axeOptions]
		);
		// console.log(`Accessibility Violations: ${axeResults.violations.length}`);s

		expect(axeResults.violations.length).toBeLessThanOrEqual(3);
	});

});
