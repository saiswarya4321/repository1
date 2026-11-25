# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\pomtwo\pomtesttwo.spec.js >> pom test two
- Location: tests\pomtwo\pomtesttwo.spec.js:6:1

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]: Your Cart
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Fleece Jacket
              - generic [ref=e27]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
              - generic [ref=e28]:
                - generic [ref=e29]: $49.99
                - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - button "Continue Shopping" [ref=e32] [cursor=pointer]
          - button "Checkout" [ref=e33] [cursor=pointer]
  - contentinfo [ref=e34]:
    - list [ref=e35]:
      - listitem [ref=e36]:
        - link "X" [ref=e37] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e38]:
        - link "Facebook" [ref=e39] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e40]:
        - link "LinkedIn" [ref=e41] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e42]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | class Cart{
  2  | constructor(page){
  3  | this.page=page;
  4  | this.catIcon=page.locator(".shopping_cart_link");
  5  | this.cart=page.locator(".cart_item .inventory-item");
  6  | this.checkoutButton=page.locator("#checkout")
  7  | }
  8  | async getchecked(){
  9  |     await this.catIcon.click();
> 10 |     await expect(this.cart).toBeVisible();
     |     ^ ReferenceError: expect is not defined
  11 | }
  12 | async getCheckout(){
  13 |     await this.checkoutButton.click();
  14 | }
  15 | }
  16 | module.exports=Cart
```