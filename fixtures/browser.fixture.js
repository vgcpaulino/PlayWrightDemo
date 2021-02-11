require('dotenv').config();

export const browserFixture = parseEnvBrowser() || ['chromium', 'firefox', 'webkit'];
export const browserDeviceFixture = parseEnvDevices() || ['iPhone 11 Pro Max', 'Pixel 2 XL'];

function parseEnvBrowser() {
    var envVarValue = process.env.FIXTURE_BROWSER;
    return (envVarValue != undefined) ? envVarValue.split(',') : undefined;    
}

function parseEnvDevices() {
    var envVarValue = process.env.FIXTURE_DEVICE;
    return (envVarValue != undefined) ? envVarValue.split(',') : undefined;    
}
