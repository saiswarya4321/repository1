const {test,expect}=require('@playwright/test')

test.describe('QA Brains Login Module',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://practice.qabrains.com/ecommerce/login?utm_source=chatgpt.com')
    })
    test(' valid login @smoke @login',async({page})=>{
        await page.locator('#email').fill('test@qabrains.com')
        await page.locator('#password').fill('Password123')

        await page.on('dialog',async(dialog)=>{
            if(dialog.messsage().includes('credentials matched')){
                await dialog.accept()
            }
        })
        await page.getByRole('button',{name:'Login'}).click()
        await expect(page).toHaveURL('https://practice.qabrains.com/ecommerce')
    })
    test('invalid email or password @regression @login',async({page})=>{
        await page.getByPlaceholder('eg. user@user.com').fill('test@qabrains.co')
        await page.getByPlaceholder('*******').fill('Password123')
        await page.getByRole('button',{name:'Login'}).click()
         await expect(page.getByText('Username is incorrect.')).toBeVisible();
    })
    test('email field empty @sanity @login',async({page})=>{
        await page.getByLabel('email').fill('')
         await page.getByLabel('password').fill('Password123')
         await page.getByRole('button',{name:'Login'}).click()
         await expect(page.getByText('Email is a required field')).toBeVisible()
    })
})