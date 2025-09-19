class Contacts
{
    
    constructor(page){
    
       this.page=page
      this.menucontacts="//a[@title='Contacts']"
    this.contactlink="(//th[@data-label='Name'])[1]//a"
    this.cvmanager="//a[@data-label='CV Manager']"
     this.globalActionsButton="//a[contains(@class,'globalCreateTrigger slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action')]"
this.globalActionsList="//a[contains(@class,'globalCreateMenuList')]"
this.globalActionsListItem="//a[contains(@class,'oneGlobalCreateItem')]"
this.frame1=page.locator(".//iframe")

this.uploadIcon=page.locator("//a[contains(@class,'tooltipstered')]")
     
}
    async uploadCV(){

       
        await this.page.click(this.menucontacts)
        //this.page.pasuse(3)
        await this.page.click(this.contactlink) 
        await this.page.click(this.cvmanager)
    }
  /****   async uploadCV1() {
        const iframe1= await this.page.frameLocator("//iframe[@title='accessibility title']")
       // await iframe1.locator("//a[contains(@class,'tooltipstered')]").first().click()
      
     const [newWindow]= await Promise.all(
      [

        await iframe1.locator("//a[contains(@class,'tooltipstered')]").first().click()
       
      ]
    )
  await newWindow.waitForTimeout(4000)
    await newWindow.locator("//input[@type='file']").click()


    }*/
}
module.exports=Contacts;
