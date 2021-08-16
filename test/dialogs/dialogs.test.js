const { test, expect } = require('@playwright/test');
const AlertsPage = require('../../pages/theInternetAlerts.page');

let dialogsPage;

test.describe('Working with Dialogs.', () => {
    
    test.beforeEach(async ({ page }) => {
        dialogsPage = new AlertsPage(page);
        await dialogsPage.openPage();
    });

    test('Alert', async ({ page }) => {
        let infoDialog;
        page.on('dialog', async dialog => {
            infoDialog = {
                type: dialog.type(),
                defaultValue: dialog.defaultValue(),
                message: dialog.message(),
            };
            dialog.accept();
        });
        await (await dialogsPage.alertBtn()).click();
        
        expect(infoDialog).toMatchObject({ type: 'alert', defaultValue: '', message: 'I am a JS Alert' });
    });

    test('Confirmation Alert - Accept', async ({ page }) => {
        let infoDialog;

        page.on('dialog', async dialog => {
            infoDialog = {
                type: dialog.type(),
                defaultValue: dialog.defaultValue(),
                message: dialog.message(),
            };
            dialog.accept();
        });
        await (await dialogsPage.confirmationAlertBtn()).click();
        const result = await dialogsPage.getResultInformation();

        expect(result).toBe('You clicked: Ok');
        expect(infoDialog).toMatchObject({ type: 'confirm', defaultValue: '', message: 'I am a JS Confirm' });
    });

    test('Confirmation Alert - Dismiss', async ({ page }) => {
        let infoDialog;
        
        page.on('dialog', async dialog => {
            infoDialog = {
                type: dialog.type(),
                defaultValue: dialog.defaultValue(),
                message: dialog.message(),
            };
            dialog.dismiss();
        });
        await (await dialogsPage.confirmationAlertBtn()).click();
        const result = await dialogsPage.getResultInformation();

        expect(result).toBe('You clicked: Cancel');
        expect(infoDialog).toMatchObject({ type: 'confirm', defaultValue: '', message: 'I am a JS Confirm' });
    });

});
