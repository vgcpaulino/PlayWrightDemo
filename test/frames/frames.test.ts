import { test, expect } from '@playwright/test';
import { FramesPage } from '../../pages/theInternetFrames.pages';

let framesPage: FramesPage;

test.describe('Frames Interaction', () => {

	test.beforeEach(async ({
		page 
	}) => {
		framesPage = new FramesPage(page);
	});

	test('Switch to iFrame', async () => {
		await framesPage.openPageIFrames();
		await framesPage.typeInfoTextArea('Testing Frames');
        
		const frameText = (await framesPage.textArea());
		await expect(frameText).toHaveText('Testing FramesYour content goes here.');
	});

	test('Get iFrame Info', async ({
		page 
	}) => {
		framesPage = new FramesPage(page);

		await framesPage.openPageNestedFrames();

		const mainFrame = page.mainFrame();
		const arrayFrames = mainFrame.childFrames();
    
		const childFrame = arrayFrames[0].childFrames();
		expect(childFrame.length).toBe(3);
	});

});
