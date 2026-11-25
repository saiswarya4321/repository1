const {test,expect} = require('@playwright/test')

test('webtable',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const webTable=page.locator("xpath=//table[@name='BookTable']")
    const row=await webTable.locator("tbody tr");
    const rows_count=await row.count()
    console.log("Count of rows",rows_count);
    const column=await webTable.locator("tbody tr th")
    const columns_count=await column.count()
    console.log("count of Columns:",columns_count);
    const selenium_row=row.filter({hasText:'Master In Selenium'});
    const all_tds=await selenium_row.locator('td')
const bookName= await all_tds.nth(0).textContent()
const author=await all_tds.nth(1).textContent()
const subject=await all_tds.nth(2).textContent()
const price=await all_tds.nth(3).textContent()
console.log('Table:',bookName,author,subject,price);

    
})