const{test,expect}=require('@playwright/test')
test.describe('Suce demo login',()=>{
    test.beforeEach(async({page})=>{
await page.goto('https://www.saucedemo.com/')
    })
    test('@smoke Login with valid credentials redirect to inventory',async({page})=>{
             await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button')
        await expect(page).toHaveURL(/inventory/)

    })

    test('@regression login with invalid credentials show error message',async({page})=>{
            await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secretsauce');

        await page.click('#login-button')
         await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service');
    })
    test('@sanity user see the validation error when  username is missing',async({page})=>{
           
 await page.fill('#password', 'secretsauce');


        await page.click('#login-button')
         await expect(page.locator("h3[data-test='error']")).toContainText('Epic sadface: Username is required');
    })
})