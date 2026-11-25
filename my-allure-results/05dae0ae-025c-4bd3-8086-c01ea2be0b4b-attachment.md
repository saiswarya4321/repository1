# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Assignments\Part Assignment 5\task3.spec.js >> QA Brains Login Module >> invalid email or password @regression @login
- Location: tests\Assignments\Part Assignment 5\task3.spec.js:19:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://practice.qabrains.com/ecommerce/login?utm_source=chatgpt.com", waiting until "load"

```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test')
  2  | 
  3  | test.describe('QA Brains Login Module',()=>{
  4  |     test.beforeEach(async({page})=>{
> 5  |         await page.goto('https://practice.qabrains.com/ecommerce/login?utm_source=chatgpt.com')
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  6  |     })
  7  |     test(' valid login @smoke @login',async({page})=>{
  8  |         await page.locator('#email').fill('test@qabrains.com')
  9  |         await page.locator('#password').fill('Password123')
  10 | 
  11 |         await page.on('dialog',async(dialog)=>{
  12 |             if(dialog.messsage().includes('credentials matched')){
  13 |                 await dialog.accept()
  14 |             }
  15 |         })
  16 |         await page.getByRole('button',{name:'Login'}).click()
  17 |         await expect(page).toHaveURL('https://practice.qabrains.com/ecommerce')
  18 |     })
  19 |     test('invalid email or password @regression @login',async({page})=>{
  20 |         await page.getByPlaceholder('eg. user@user.com').fill('test@qabrains.co')
  21 |         await page.getByPlaceholder('*******').fill('Password123')
  22 |         await page.getByRole('button',{name:'Login'}).click()
  23 |          await expect(page.getByText('Username is incorrect.')).toBeVisible();
  24 |     })
  25 |     test('email field empty @sanity @login',async({page})=>{
  26 |         await page.getByLabel('email').fill('')
  27 |          await page.getByLabel('password').fill('Password123')
  28 |          await page.getByRole('button',{name:'Login'}).click()
  29 |          await expect(page.getByText('Email is a required field')).toBeVisible()
  30 |     })
  31 | })
```