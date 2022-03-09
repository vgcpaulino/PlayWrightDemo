import { test as pw, expect } from '@playwright/test';
import { test } from '../../globals/customTest';

pw.describe('Geolocation Test', () => {

    test('test 1', async ({ page, fullName }) => {
        console.log('#########', fullName);
        await expect(fullName).toBe('John Doe');
        await expect(fullName).toBe('Joh');
    });

});
