const { test, expect } = require('@playwright/test')
const Login = require('./login.spec.js')
const Dashboard = require('./dashboard.spec.js')
const Cart = require("./cart.spec.js")
const Shipping=require("./shippingDetails.spec.js")
const Summary=require("./summary.spec.js")
const orderConfirmation = require('./orderConfirmation.spec.js')

test('pom test two', async ({ page }) => {
    const username = "standard_user";
    const password = "secret_sauce";
    const productName = "Sauce Labs Fleece Jacket";
    const firstname="Aiswarya";
    const lastname="S";
    const postalcode="894578"

    //login 
    const loginobj = new Login(page)
    await loginobj.clickToLogin();
    await loginobj.validLogin(username, password)
    //dashboard
    const dashObj = new Dashboard(page)
    await dashObj.printProducts();
    await dashObj.selectProducts(productName)

    //cart
    const cartobj = new Cart(page);

    await cartobj.getchecked();
    await cartobj.getCheckout();
   //shipping
const shippingObj=new Shipping(page);
await shippingObj.Shipping(firstname,lastname,postalcode);
shippingObj.submitShipping();
//summary
const summaryObj=new Summary(page)
await summaryObj.summaryDetails()
await summaryObj.finish()
//order confirm
const orderConfrimObj=new orderConfirmation(page)
await orderConfrimObj.CompleteOrderSuccess()
})