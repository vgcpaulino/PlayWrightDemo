class ShippingPage {
    page;

    constructor(page) {
        this.page = page;
    }

    async selectClickAndCollect() {
        await delay(5000);
        let clickAndCollectLabel = await this.page.waitForSelector('label[data-tstid="shipping-address-click-collect"]', { timeout: 10000, state: 'visible' });
        await clickAndCollectLabel.click();
    }

    async getGoogleMapsLink() {
        await delay(1000);
        let googleMapsEle = await this.page.waitForSelector('div[id="map"] a[title*="Open this area in Google Map"]', { timeout: 10000 });
        let elementLink = await googleMapsEle.evaluate(element => element.href);
        return elementLink;
    }
}

module.exports = { ShippingPage };

async function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
