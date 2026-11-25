const{expect}=require("@playwright/test")

class Summary{
    constructor(page){
this.page=page;
this.subTotal=page.locator(".summary_total_label")
this.finishBtn=page.getByRole('button',{name:'finish'})
    }

    async summaryDetails(){
        const itemTotal= await this.subTotal.textContent()
        console.log("ItemTotal",itemTotal);
await expect(this.subTotal).toContainText("Total: $")
        
    }
    async finish(){
        await this.finishBtn.click()
    }

}
module.exports=Summary