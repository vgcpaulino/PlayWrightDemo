import { AlertsPage } from '../../pages/theInternetAlerts.page';
import { dialogAccept, dialogDismiss, dialogType } from '../../helpers/dialogs.helper';

let dialogsPage;

describe('Working with Dialogs.', () => {

    beforeEach(async () => {
        dialogsPage = new AlertsPage();
        await dialogsPage.openPage();
    });

    it(`Alert`, async () => {
        await dialogAccept();
        await (await dialogsPage.alertBtn()).click();
    });

    it(`Confirmation Alert - Accept`, async () => {
        await dialogAccept();
        await (await dialogsPage.confirmationAlertBtn()).click();
        await dialogsPage.logResultInformation();
    });

    it(`Confirmation Alert - Dismiss`, async () => {
        await dialogDismiss();
        await (await dialogsPage.confirmationAlertBtn()).click();
        await dialogsPage.logResultInformation();
    });

    it(`Prompt Text Alert`, async () => {
        await dialogType('Testing!');
        await (await dialogsPage.promptAlertBtn()).click();
        await dialogsPage.logResultInformation();
    });

});
