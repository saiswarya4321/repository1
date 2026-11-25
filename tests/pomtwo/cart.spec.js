const { expect } = require('@playwright/test');

class Cart{
constructor(page){
this.page=page;
this.catIcon=page.locator(".shopping_cart_link");
this.cart=page.locator(".cart_item .inventory-item");
this.checkoutButton=page.locator("#checkout")
}
async getchecked(){
    await this.catIcon.click();
    //await expect(this.cart).toBeVisible();
}
async getCheckout(){
    await this.checkoutButton.click();
}
}
module.exports=Cart