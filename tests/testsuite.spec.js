const { test, expect, beforeEach, afterEach } = require('@playwright/test');
test.describe('SauceDemo Login Test', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });
test('valid Login', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/inventory/);
    });
test.afterEach(async ({ page }) => {
        await page.screenshot({ path: `screenshots/${Date.now()}.png` });
        await page.close();
    });
test('Invalid Login', async ({ page }) => {
        await page.fill('#user-name', 'standarduser');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
await expect(page.locator("h3[data-test='error']")).toBeVisible();
    });
});
