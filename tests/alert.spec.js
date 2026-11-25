const { test, expect } = require('@playwright/test');
test.skip('Simple alert test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", (dia) => {

        expect(dia.message()).toBe("I am a JS Alert");
        dia.accept();
    })

     await page.locator("//button[@onclick='jsAlert()']").click();
     await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
})
test.skip('confirm alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", (dia) => {

        expect(dia.message()).toBe("I am a JS Confirm");
        dia.accept();
    })

     await page.locator("//button[@onclick='jsConfirm()']").click();
     await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})
test('Promt test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", (dia) => {

        expect(dia.message()).toBe("I am a JS prompt");
        dia.accept("I am a JS prompt.....");
    })

     await page.locator("//button[@onclick='jsPrompt()']").click();
     await expect(page.locator('#result')).toHaveText('You entered: I am a JS prompt.....');
})