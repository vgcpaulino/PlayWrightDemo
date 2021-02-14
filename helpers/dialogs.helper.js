
export async function dialogAccept() {
    page.on('dialog', async dialog => {
        logDialogInfo(dialog);
        dialog.accept();
    });
}

export async function dialogDismiss() {
    page.on('dialog', async dialog => {
        logDialogInfo(dialog);
        dialog.dismiss();
    });
}

export async function dialogType(text) {
    page.on('dialog', async dialog => {
        logDialogInfo(dialog);
        dialog.accept(text);
    });
}

async function logDialogInfo(dialog) {
    console.log(`Dialog Type: ${dialog.type()}`);
    console.log(`Dialog Default Value: ${dialog.defaultValue()}`);
    console.log(`Dialog Message: ${dialog.message()}`);
}
