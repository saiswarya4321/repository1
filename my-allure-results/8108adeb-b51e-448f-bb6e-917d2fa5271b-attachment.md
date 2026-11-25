# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Assignments\Part Assignment 5\task3.spec.js >> QA Brains Login Module >> invalid email or password @regression @login
- Location: tests\Assignments\Part Assignment 5\task3.spec.js:18:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Login') resolved to 2 elements:
    1) <h2 class="text-xl uppercase font-oswald font-bold mb-5">Login</h2> aka getByRole('heading', { name: 'Login' })
    2) <button type="submit" class="btn-submit uppercase flex items-center gap-2 justify-center font-oswald mt-4">…</button> aka getByRole('button', { name: 'Login' })

Call log:
  - waiting for getByText('Login')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11] [cursor=pointer]:
        - /url: /
      - generic [ref=e14]:
        - heading "Login" [level=2] [ref=e15]
        - alert [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - heading "Accepted email:" [level=4] [ref=e19]
              - list [ref=e20]:
                - listitem [ref=e21]: test@qabrains.com
                - listitem [ref=e22]: practice@qabrains.com
                - listitem [ref=e23]: student@qabrains.com
            - generic [ref=e24]:
              - heading "Password:" [level=4] [ref=e25]
              - list [ref=e26]:
                - listitem [ref=e27]: Password123
                - listitem [ref=e28]: Password123
                - listitem [ref=e29]: Password123
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Email*
              - textbox "Email*" [ref=e35]:
                - /placeholder: eg. user@user.com
                - text: test@qabrains.co
            - generic [ref=e36]:
              - generic [ref=e37]: Password*
              - generic [ref=e38]:
                - textbox "Password*" [active] [ref=e39]:
                  - /placeholder: "*******"
                  - text: Password123
                - button [ref=e40] [cursor=pointer]
          - button "Login" [ref=e47] [cursor=pointer]
  - region "Notifications alt+T"
  - alert [ref=e50]
```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test')
  2  | 
  3  | test.describe('QA Brains Login Module',()=>{
  4  |     test.beforeEach(async({page})=>{
  5  |         await page.goto('https://practice.qabrains.com/ecommerce/login?utm_source=chatgpt.com')
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
  17 |     })
  18 |     test('invalid email or password @regression @login',async({page})=>{
  19 |         await page.getByPlaceholder('eg. user@user.com').fill('test@qabrains.co')
  20 |         await page.getByPlaceholder('*******').fill('Password123')
> 21 |         await page.getByText('Login').click();
     |                                       ^ Error: locator.click: Error: strict mode violation: getByText('Login') resolved to 2 elements:
  22 |         await page.getByText('Username is incorrect.')
  23 |     })
  24 | })
```