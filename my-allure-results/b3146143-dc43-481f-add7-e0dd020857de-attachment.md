# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\pomtwo\pomtesttwo.spec.js >> pom test two
- Location: tests\pomtwo\pomtesttwo.spec.js:6:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.cart_item .inventory-item')
Expected: visible
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.cart_item .inventory-item') with timeout 6000ms
  - waiting for locator('.cart_item .inventory-item')

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, 1 items": "1"
  - text: Your Cart
- main:
  - text: QTY Description 1
  - button "View details for Sauce Labs Fleece Jacket": Sauce Labs Fleece Jacket
  - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
  - button "Remove"
  - button "Continue Shopping"
  - button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class Cart{
  4  | constructor(page){
  5  | this.page=page;
  6  | this.catIcon=page.locator(".shopping_cart_link");
  7  | this.cart=page.locator(".cart_item .inventory-item");
  8  | this.checkoutButton=page.locator("#checkout")
  9  | }
  10 | async getchecked(){
  11 |     await this.catIcon.click();
> 12 |     await expect(this.cart).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  13 | }
  14 | async getCheckout(){
  15 |     await this.checkoutButton.click();
  16 | }
  17 | }
  18 | module.exports=Cart
```