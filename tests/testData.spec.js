const{test,expect}=require("@playwright/test")
const Data=require("../TestData/TestData.js")

test('External data reading',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
//invalid username,valid password
await page.locator("#user-name").fill(Data.testData.login.invalidUsername);
await page.locator("#password").fill(Data.testData.login.validPassword)
await page.locator('#login-button').click()
//await expect(page.locator('data-test="error"')).toContainText('Epic sadface')
const error= page.locator("[data-test='error']");
const message=await error.textContent()
console.log("error",message)
await expect(error).toContainText('Epic sadface')
// valid username and password
await page.locator("#user-name").fill(Data.testData.login.validUsername);
 await page.locator("#login-button").click();
await expect(page).toHaveURL(/inventory/)

})