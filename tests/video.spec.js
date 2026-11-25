const { test, expect } = require('@playwright/test');

test('SauceDemo Video', async ({ page }) => {

    // Open the SauceDemo website
    await page.goto('https://www.saucedemo.com/');
    await page.locator("input#user-name").fill('standarduser')
    await page.locator("input#password").fill('secret_sauce')
    await page.locator("input[type='submit']").click();
await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
await page.close()

    });
