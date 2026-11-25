const{test,expect}=require('@playwright/test')
test('Verify URL',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    const currentUrl= page.url()
    console.log('Current url',currentUrl);
    expect(currentUrl).toContain('signup')
    
})
test('Verify title contains Automation',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app')
    const pagetitle= await page.title()
    console.log('Page title',pagetitle);
    expect(pagetitle).toContain('Automation')
    
})