# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\readenvfile.spec.js >> login with standerd_user
- Location: tests\readenvfile.spec.js:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"
Timeout: 6000ms

Call log:
  - Expect "toHaveURL" with timeout 6000ms
    15 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": standerd_user
    - textbox "Password": secret_sauce
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import dotenv from "dotenv"
  3  | dotenv.config()
  4  | const users = [
  5  |     { username: "standerd_user" },
  6  |     { username: "problem_user" },
  7  |     { username: "perfomance_glitch_user" }
  8  | ]
  9  | 
  10 | for (const user of users) {
  11 |     test(`login with ${user.username}`, async ({ page }) => {
  12 |         await page.goto(process.env.URL);
  13 |         await page.fill('#user-name',user.username);
  14 |         await page.fill('#password',process.env.PASSWORD);
  15 |         await page.click('#login-button');
> 16 |         await expect(page).toHaveURL(/inventory/)
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  17 |     })
  18 | }
```