
export class FramesPage {

    constructor() { }

    /////////////////////////////////////////////////////////////////////////////////
    iFrame = async () => { return await page.$('iframe'); };
    iFrameContent = async () => { return await (await this.iFrame()).contentFrame(); };
    textArea = async () => { return await (await this.iFrameContent()).$('body[id="tinymce"]'); };

    async openPageIFrames() {
        await page.goto('https://the-internet.herokuapp.com/iframe');
    }

    async typeInfoTextArea(text) {
        await (await this.textArea()).type('Testing Frames');
    }

    /////////////////////////////////////////////////////////////////////////////////
    async openPageNestedFrames() {
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
    }

    pageMainFrame = async () => { await page.mainFrame(); };

    async logAllPageFrames() {
        iterateFramesTree(this.pageMainFrame());
    }
}

async function iterateFramesTree(frame, indent) {
    console.log(indent + frame.url());
    for (const child of frame.childFrames()) {
        dumpFrameTree(child, indent + '  ');
    }
}
