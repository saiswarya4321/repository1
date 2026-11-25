const {  test ,expect} = require("playwright/test");

test.describe('demo table test',()=>{
    const users_data = [
    ["John", "Doe", "john1111@gmail.com", "25", "50000", "Software Testing"],
    ["Anu", "Kumar", "anu1111@gmail.com", "28", "60000", "QA"],
    ["Rahul", "Raj", "rahul1111@gmail.com", "30", "70000", "Development"]
];

users_data.forEach(data=>{
 test(`demo test ${data[0]}`,async({page})=>{
       await page.goto('https://demoqa.com/webtables')
       await expect(page).toHaveTitle(/demosite/i)
       await page.locator('#addNewRecordButton').click()
       await page.getByPlaceholder('First Name').fill(data[0])
       await page.getByPlaceholder('Last Name').fill(data[1])
       
       await page.locator('#userEmail').fill(data[2])
       await page.locator('#age').fill(data[3])
       await page.getByPlaceholder('Salary').fill(data[4])
await page.getByPlaceholder('Department').fill(data[5])
await page.locator('#submit').click()
await page.waitForTimeout(3000)
    })
})
   
})