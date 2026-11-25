const  {test,expect}=require('@playwright/test')
test('Launch application',async({page})=>{
 await page.goto('https://parabank.parasoft.com/parabank/index.htm');
 await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
   console.log(await page.title());
 //await page.pause();
 const snapshot = await page.ariaSnapshot();
console.log(snapshot);
})
