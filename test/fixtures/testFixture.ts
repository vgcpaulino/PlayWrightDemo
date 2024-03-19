import { expect } from '@playwright/test';
import { test } from '../../globals/customTest';

test.describe('Fixture Test', () => {

	test('Receives Properties', async ({
		fullName 
	}) => {
		expect(fullName).toBe('John Doe');
		expect(fullName).toBe('Joh');
	});

});
