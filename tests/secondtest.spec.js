const{test,expect}=require('@playwright/test')
test('Home Page',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    const pageTiltle=await page.title()
    console.log('Page title is:',pageTiltle)
    await expect(page).toHaveTitle('STORE')
    const pageURL=await page.url()
    console.log('page url is:',pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.close()
    
})
