const { ElementHandle, Frame, Page } = require('playwright');

module.exports = class FramesPage {

    /**
     * @param {Page} page 
     */
    constructor(page) { 
        this.page = page;
    }

    /////////////////////////////////////////////////////////////////////////////////
    /**
     * @returns {ElementHandle}
     */
    async iFrame() { return await this.page.$('iframe'); };
    
    /**
     * @returns {ElementHandle}
     */
    async iFrameContent() { return await (await this.iFrame()).contentFrame(); };
    
    /**
     * @returns {ElementHandle}
     */
    async textArea() { return await (await this.iFrameContent()).$('body[id="tinymce"]'); };

    async openPageIFrames() {
        await this.page.goto('https://the-internet.herokuapp.com/iframe');
    }

    async typeInfoTextArea(text) {
        await (await this.textArea()).type(text);
    }

    /////////////////////////////////////////////////////////////////////////////////
    async openPageNestedFrames() {
        await this.page.goto('https://the-internet.herokuapp.com/nested_frames');
    }

    /**
     * @returns {Frame}
     */
    async pageMainFrame() { return this.page.mainFrame(); };

}