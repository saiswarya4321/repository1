class Shipping{
    constructor(page){
        this.page=page;
this.firstname=page.locator("#first-name")
this.lastname=page.locator("#last-name")
this.postalcode=page.locator("#postal-code")
this.continuebutton=page.getByRole('button',{name:'continue'})


    }

    async Shipping(firstname,lastname,postalcode){
await this.firstname.fill(firstname)
await this.lastname.fill(lastname)
await this.postalcode.fill(postalcode)
    }
    async submitShipping(){
        await this.continuebutton.click()
    }
    
}
module.exports=Shipping