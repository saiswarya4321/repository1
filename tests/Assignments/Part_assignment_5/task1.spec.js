const {test,expect}=require('@playwright/test')
const data=require('./testdata.json')

test('Automation test store application',async({page})=>{
    await page.goto('https://automationteststore.com/index.php?rt=account%2Fcreate&utm_source=chatgpt.com')
    await page.locator('#AccountFrm_firstname').fill(data.firstName)
    await page.locator('#AccountFrm_lastname').fill(data.lastName)
    await page.locator('#AccountFrm_email').fill(data.email)
    await page.locator('#AccountFrm_telephone').fill(data.telephone)
    await page.locator('#AccountFrm_fax').fill(data.fax)
    await page.locator('#AccountFrm_company').fill(data.company)

    await expect(page.locator('#AccountFrm_firstname')).toHaveValue(data.firstName)
     await expect(page.locator('#AccountFrm_lastname')).toHaveValue(data.lastName)
      await expect(page.locator('#AccountFrm_email')).toHaveValue(data.email)
      await expect(page.locator('#AccountFrm_telephone')).toHaveValue(data.telephone)
      await expect(page.locator('#AccountFrm_fax')).toHaveValue(data.fax)
      await expect(page.locator('#AccountFrm_company')).toHaveValue(data.company)
})