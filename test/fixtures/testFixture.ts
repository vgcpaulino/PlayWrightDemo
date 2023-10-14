import { test as pw, expect } from "@playwright/test";
import { test } from "../../globals/customTest";

pw.describe("Geolocation Test", () => {
    test("test 1", async ({ page, fullName }) => {
        expect(fullName).toBe("John Doe");
        expect(fullName).toBe("Joh");
    });
});
