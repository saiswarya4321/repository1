const { test, expect } = require("@playwright/test");

test('Handling dropdown using 3 methods', async({page}) => {

    await page.goto('https://selenium.qabible.in/select-input.php');
    await page.locator('#single-input-field').selectOption({label: 'Red'});
    console.log('Selected the value by label', await page.locator('#single-input-field').inputValue());
    await page.locator('#single-input-field').selectOption({value: 'Yellow'});
    console.log('Selected the value by value', await page.locator('#single-input-field').inputValue());
    await page.locator('#single-input-field').selectOption({index: 3});
    console.log('Selected the value by index', await page.locator('#single-input-field').inputValue());


})
test('handle radio button',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php');
    await page.getByRole('radio').check()
    await page.locator('#button-one').click()
    await expect(page.getByRole('radio')).toBeChecked()
})
test('handle check box',async({page})=>{
    await page.goto('https://selenium.qabible.in/check-box-demo.php')
    const checkboxes=await page.getByRole('checkbox');
    await checkboxes.nth(1).check();
    await checkboxes.nth(2).check();
    await checkboxes.nth(3).check();
    await checkboxes.nth(4).check();

    await expect(checkboxes.nth(1)).toBeChecked();
   await expect(checkboxes.nth(2)).toBeChecked();
   await expect(checkboxes.nth(3)).toBeChecked();
    await expect(checkboxes.nth(4)).toBeChecked();

})