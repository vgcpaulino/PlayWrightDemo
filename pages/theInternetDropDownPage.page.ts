import { Page } from "@playwright/test";

export class DropDownPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    dropdown() {
        return this.page.locator('select[id="dropdown"]');
    }

    async openPage() {
        await this.page.goto("https://the-internet.herokuapp.com/dropdown");
    }
}
