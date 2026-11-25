const { expect } = require("allure-playwright");

class orderConfirmation{
    constructor(page){
        this.page=page;
        this.completeOrder=page.locator('.complete-header')
    }
    async CompleteOrderSuccess(){
        await expect(this.completeOrder).toHaveText('Thank you for your order!')
    }
}
module.exports=orderConfirmation