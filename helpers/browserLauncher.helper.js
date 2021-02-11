require('dotenv').config();
import playwright from 'playwright';
const { devices } = require('playwright')

const envHeadless = (process.env.HEADLESS === undefined) ? true : JSON.parse(process.env.HEADLESS);
const envBrowserType = process.env.BROWSER_TYPE || 'webkit';

export function getBrowserLaunchOpts(browserType) {
    switch (browserType) {
        case 'chromium':
            return getChromiumOpts();
            break;
        case 'firefox':
            return getChromiumOpts();
            break;
        case 'webkit':
            return getChromiumOpts();
            break;
        default:
            return getChromiumOpts();
    }
};

function getChromiumOpts() {
    var opts = {
        headless: envHeadless
    }
    return opts;
}


export const getBrowser = async (browserType = envBrowserType) => await playwright[browserType].launch(getBrowserLaunchOpts(browserType));
export const getDevice = (deviceName) => devices[deviceName];
