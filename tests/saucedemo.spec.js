const {test,expect}=require('@playwright/test')

test.skip('soucedemo test',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await page.locator('input#user-name').fill('standard_user')
await page.locator('input#password').fill('secret_sauce')
await page.locator("input[type='submit']").click()
// console.log(await page.locator("h3[role='alert']").textContent('Epic sadface: Username and password do not match any user in this service'))
await page.locator("h3[role='alert']").textContent('Epic sadface');

await page.pause()

})
 
test('screenshot', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator("h3[data-test='error']")).toBeHidden();
    await page.locator("#login-button").click();
    await page.locator("h3[data-test='error']").screenshot({ path: 'error.png' });
 await expect(page.locator("h3[data-test='error']")).toBeVisible();
   await page.screenshot({ path: 'error1.png' });
});

