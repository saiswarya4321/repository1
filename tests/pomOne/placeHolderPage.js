exports.placeholderPage=class placeholderPage{
    constructor(page){
this.page=page
this.placeOrderButton='button[data-target="#orderModal"]';
this.nameInput="#name";
this.countryInput="#country";
this.cityInput="#city";
this.cardInput="#card";
this.monthInput="#month";
this.yearInput="#year";
this.purchaseButton="button[onclick='purchaseOrder()']";
this.okButton=".confirm btn btn-lg btn-primary";
    }
    async clickPlaceOrderButton(){
        await this.page.locator(this.placeOrderButton).click();
    }
    async fillCustomerDetails(name,country,city,card,month,year){
        await this.page.locator(this.nameInput).fill(name)
        await this.page.locator(this.countryInput).fill(country)
        await this.page.locator(this.cityInput).fill(city)
        await this.page.locator(this.cardInput).fill(card)
        await this.page.locator(this.monthInput).fill(month)
        await this.page.locator(this.yearInput).fill(year)
        await this.page.locator(this.purchaseButton).click();
    }
}