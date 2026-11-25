const {test,expect}=require('@playwright/test')

test('verify single input field',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')
const inputFiled=await page.locator('#single-input-field')
await inputFiled.fill('Hello!')
await page.getByRole('button',{name:'Show Message'}).click();
await expect (page.locator('#message-one')).toContainText('Hello!');
})