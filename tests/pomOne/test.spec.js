import { test, expect } from '@playwright/test';
import { loginPage } from './loginPage';
import { homePage } from './homePage';
import { CartPage } from './cartPage';
import { placeholderPage } from './placeHolderPage';




//login page

test('test',async({page})=>{
const login=new loginPage(page)
await login.gotoLoginPage()
await login.Login('sibivarughese','test@123')


//home

const home=new homePage(page)
await home.addProductToCart('Nexus 6')
await page.waitForTimeout(3000)
await home.goToCart()

//cart
const cart=new CartPage(page)
await page.waitForTimeout(3000);

await cart.checkProductInCart('Nexus 6')

//placeorder

const placeOrder=new placeholderPage(page)
await placeOrder.clickPlaceOrderButton()
await placeOrder.fillCustomerDetails('aiswarya','india','mycity','256789456234','march','2027')
})
