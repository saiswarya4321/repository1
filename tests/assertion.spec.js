const {test,expect}=require('@playwright/test')


test("Hard assertions", async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();
});

test("Soft assertions", async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await expect.soft(page).toHaveTitle('123STORE');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();
});
