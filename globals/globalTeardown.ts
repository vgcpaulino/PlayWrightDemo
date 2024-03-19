import { FullConfig } from '@playwright/test';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalTeardown(config: FullConfig) {
	console.log('Global Teardown!');
}

export default globalTeardown;