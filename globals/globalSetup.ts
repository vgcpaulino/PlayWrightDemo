import { FullConfig } from '@playwright/test';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config: FullConfig) {
	console.log('Global Setup!');
}

export default globalSetup;