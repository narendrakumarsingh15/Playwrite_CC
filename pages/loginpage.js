class LoginPage
{
    constructor(page){
       this.page=page
       this.username="#username"
       this.password="#password"
       this.sign="#Login"
    }
    async loginToApplication(){
        await this.page.fill(this.username,"uk.fe.auto.qatest@mpage.com.sit")
        await this.page.fill(this.password,"London2025!!!!")
        await this.page.click(this.sign)

    }
    async loginToSAApplication(){
        await this.page.fill(this.username,"qa.auto.sysadmin@michaelpage.com.ppe")
        await this.page.fill(this.password,'PageLondon"2025')
        await this.page.click(this.sign)

    }
}
module.exports=LoginPage;