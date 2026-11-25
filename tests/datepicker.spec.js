const {test,expect}=require('@playwright/test')

test('Date picker',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#datepicker').click()
await page.locator('#datepicker').fill('10/30/2026')
await page.keyboard.press('Enter');

await page.waitForTimeout(3000);


await page.locator('#txtDate').click()
await page.locator('#txtDate').fill('10/24/2026')

})