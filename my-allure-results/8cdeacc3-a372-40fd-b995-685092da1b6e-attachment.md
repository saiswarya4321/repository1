# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\testData.spec.js >> External data reading
- Location: tests\testData.spec.js:4:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('user-name')

```

# Test source

```ts
  1  | const{test,expect}=require("@playwright/test")
  2  | const Data=require("../TestData/TestData.js")
  3  | 
  4  | test('External data reading',async({page})=>{
  5  |     await page.goto('https://www.saucedemo.com/')
  6  | //invalid username,valid password
> 7  | await page.locator("user-name").fill(Data.testData.login.invalidUsername);
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  8  | await page.locator("password").fill(Data.testData.login.validPassword)
  9  | await page.getByRole('button',{name:'login-button'}).click()
  10 | //await expect(page.locator('data-test="error"')).toContainText('Epic sadface')
  11 | const error= page.locator("[data-test='error']");
  12 | console.log("error",error)
  13 | await expect(error).toContainText('Epic sadface')
  14 | 
  15 | })
```