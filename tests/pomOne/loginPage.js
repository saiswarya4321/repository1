exports.loginPage=class loginPage{
    constructor(page){
this.page=page;
this.loginLink="#login2";
this.userName="#loginusername";
this.password="#loginpassword"
this.loginButton="//*[@id='logInModal']/div/div/div[3]/button[2]"
    }

    async gotoLoginPage(){
await this.page.goto("https://www.demoblaze.com/index.html")
    }
    async Login(username,password){
await this.page.locator(this.loginLink).click();
await this.page.locator(this.userName).fill(username)
await this.page.locator(this.password).fill(password)
await this.page.locator(this.loginButton).click();
//submit login
    }
}