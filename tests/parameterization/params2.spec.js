const {  test ,expect} = require("playwright/test");
var emp_data=require('../../testData.json')

test.describe('demo table test',()=>{
   
emp_data.forEach(data=>{
 test(`demo test ${data.firstName}`,async({page})=>{
       await page.goto('https://demoqa.com/webtables')
       await expect(page).toHaveTitle(/demosite/i)
       await page.locator('#addNewRecordButton').click()
       await page.getByPlaceholder('First Name').fill(data.firstName)
       await page.getByPlaceholder('Last Name').fill(data.lastName)
       
       await page.locator('#userEmail').fill(data.email)
       await page.locator('#age').fill(data.age)
       await page.getByPlaceholder('Salary').fill(data.salary)
await page.getByPlaceholder('Department').fill(data.department)
await page.locator('#submit').click()
await page.waitForTimeout(3000)
    })
})
   
})