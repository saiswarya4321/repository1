class Dashboard{
constructor(page){
    this.page=page;
    this.products=this.page.locator(".inventory_item")
    //all items
    this.productNames=this.page.locator(".inventory_item_name")
    //all item names
}

async printProducts(){
    await this.productNames.first().waitFor();
    const names=await this.productNames.allTextContents();
    const count=await  this.products.count();
    console.log("Products list",names);
    console.log("No of count",count)
}
async selectProducts(productName){
    const item=await this.products.filter({hasText:productName})
    await item.getByRole('button',{name:'Add to cart'}).click()
}
}
module.exports=Dashboard