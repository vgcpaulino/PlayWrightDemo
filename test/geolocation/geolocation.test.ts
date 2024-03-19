import { test, expect } from '@playwright/test';
import { devices } from '@playwright/test';
const iPhone11 = devices['iPhone 11 Pro'];

const contextConfig = {
	...iPhone11,
	locale: 'en-US',
	isMobile: false,
	geolocation: {
		longitude: -71.086601,
		latitude: 42.348251 
	},
	permissions: ['geolocation']
};
test.use(contextConfig);

test.describe('Geolocation Test', () => {
    
	test('Google Maps', async ({
		page 
	}) => {
		await page.goto('https://browserleaks.com/geo');
		await expect(page.locator('#longitude')).toHaveText(`${contextConfig.geolocation.longitude}°`);
		await expect(page.locator('#latitude')).toHaveText(`${contextConfig.geolocation.latitude}°`);
	});

});
