# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\tag\helpTest.spec.js >> Login and navigate
- Location: tests\tag\helpTest.spec.js:4:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.saucedemo.com/
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1 | export async function login(page,username,password) {
> 2 |     await page.goto('https://www.saucedemo.com/');
    |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.saucedemo.com/
  3 |     await page.fill("#user-name",username);
  4 |     await page.fill("#password",password);
  5 |     await page.click("#login-button")
  6 | }
```