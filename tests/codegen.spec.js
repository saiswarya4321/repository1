import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'Welcome Admin Manager to' }).click();
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).first().click();
  
  await page.getByRole('button', { name: 'Cart 1' }).click();
  await page.getByRole('button', { name: 'Enroll Now' }).click();
  await page.locator('#address').click();
  await page.locator('#address').fill('aaaaaaaaaaaaaaaaaaaaa');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('8045784578');
  await page.getByRole('dialog').getByRole('button', { name: 'Enroll Now' }).click();
});


test.skip('sign up', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('aiswarya s');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ais@gmail1.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('aishu@123');
  await page.getByRole('checkbox', { name: 'PlaywrightTests' }).check();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Kerala');
  await page.locator('#hobbies').selectOption('Singing');
  await page.getByText('Hobbies:Select Multiple').click();
  await page.getByText('Hobbies:Select Multiple').click();
  await page.locator('#hobbies').selectOption('Dancing');
  await page.getByRole('button', { name: 'Sign up' }).click();
});











test.skip('flightjet', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('to-testID-origin').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.locator('.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep > .css-1dbjc4n > svg').first().click();
  await page.locator('.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep > .css-1dbjc4n > svg').first().click();
  await page.getByTestId('return-date-dropdown-label-test-id').click();
  await page.getByTestId('home-page-travellers').click();
  await page.getByTestId('Adult-testID-plus-one-cta').click();
  await page.getByText('CurrencyINR').click();
  await page.locator('div').filter({ hasText: /^Govt\. Employee$/ }).nth(4).click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
});





test.only('autopractice', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('india');
  await page.locator('#ui-id-39').click();
  await page.locator('#dropdown-class-example').selectOption('option1');
  await page.locator('#checkbox-example').getByText('Option1').click();
  await page.locator('#checkBoxOption1').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page2 = await page2Promise;
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('cell', { name: 'Selenium Webdriver with Java' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('cell', { name: 'Alex' }).click();
  await page.getByRole('button', { name: 'Mouse Hover' }).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: ' Register' }).click();
});