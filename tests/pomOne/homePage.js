// exports.homePage=class homePage{
//     constructor(page){
//         this.page=page;
//         this.productList="//*[@id='tbodyid']";
//         this.addToCartButton="//a[@class='btn btn-success btn-lg']";
//         this.cart="//a[@id='cartur']"
//     }
//     async addProductToCart(productName){
// // time for loading product list

// await this.page.waitForSelector(this.productList)
// // const productList=await this.page.$$(this.productList)
// // for(const product of productList){
// //     if(productName==await product.textContent()){
// //         await product.click();
// //         break;
// //     }
// // }


// const products=this.page.locator(this.productList)
// const product=products.filter({hasText:productName})
// await product.first().waitFor();
// this.page.on('dialog',async dialog=>{
//     if(dialog.message().includes('added')){
//         await dialog.accept()
//     }
// })
// await product.locator(this.addToCartButton).click();

//     }

//     async goToCart(){
//         await this.page.locator(this.cart).click()
//     }
// }


exports.homePage = class homePage {

    constructor(page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
await this.page.waitForSelector(this.productList);
const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            if (productName == await product.textContent()) {
                await product.click()
                break;
            }
        }
     this.page.on('dialog', async dialog => {
    if (dialog.message().includes('added')) {
        await dialog.accept();
    }
});
await this.page.locator(this.addToCartbtn).click();
    }
async goToCart() {
        await this.page.locator(this.cart).click();
    }

}