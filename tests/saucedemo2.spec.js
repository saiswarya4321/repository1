const { test, expect } = require('@playwright/test');

test('Login and complete product purchase', async ({ page }) => {

    const productName = "Sauce Labs Backpack";

    // 1. Navigate to application
    await page.goto('https://www.saucedemo.com/');
    console.log("Application launched successfully");

    // 2. Login
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    console.log("Login successful");

    // 3. Verify home page
    await expect(page.locator(".inventory_list")).toBeVisible();
    console.log("Home page displayed successfully");

    // 4. Select product and add to cart (loop through products)
    const count = await page.locator(".inventory_item_name").count();
    console.log("Total products: " + count);

    for (let i = 0; i < count; i++) {
        const text = await page.locator(".inventory_item_name").nth(i).textContent();

        if (text.includes(productName)) {
            await page.locator(".inventory_item").nth(i).locator("button").click();
            console.log(productName + " added to cart");
            break;
        }
    }

    // 5. Navigate to shopping cart
    await page.locator(".shopping_cart_link").click();
    console.log("Navigated to shopping cart");

    // 6. Verify product in cart
    await expect(page.locator(".inventory_item_name")).toHaveText(productName);
    console.log("Product verified successfully");

    // 7. Click checkout
    await page.locator("#checkout").click();
    console.log("Checkout page opened");

    // 8. Enter shipping information
    await page.locator("#first-name").fill("Sibi");
    await page.locator("#last-name").fill("V");
    await page.locator("#postal-code").fill("682030");
    console.log("Shipping details entered successfully");

    // 9. Click continue
    await page.locator("#continue").click();
    console.log("Navigated to order overview page");

    // 10. Verify order summary
    await expect(page.locator(".summary_subtotal_label")).toContainText("$29.99");
    console.log("Item total verified successfully");

    // 11. Click finish
    await page.locator("#finish").click();
    console.log("Order placed successfully");

    // 12. Verify order confirmation
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
    console.log("Purchase completed successfully");
});
