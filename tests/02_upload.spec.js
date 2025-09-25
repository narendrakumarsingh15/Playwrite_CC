const {test, expect}=   require("@playwright/test");

const LoginPage=require("../pages/loginpage")
const Contacts=require("../pages/contacts")
test('upload', async ({ browser }) => {
  const browserWindow=await browser.newContext()
  const page= await browserWindow.newPage()
//page is page reference
await page.goto('https://pagegroup--sit.sandbox.my.salesforce.com');
// test.use({viewport:{width: 1920, height: 1080}})
  await expect(page).toHaveTitle(/Login/);
  //loginpage is referene of Loginage class
  const loginPage= new LoginPage(page)
  await loginPage.loginToApplication()
  await expect(page).toHaveTitle(/Home/);
  //contactsPage is referene of Contacts class
  const contactsPage= new Contacts(page)
  await contactsPage.uploadCV()
  // locator of iframe
  const iframe1= await page.frameLocator("//iframe[@title='accessibility title']")  
     const [newWindow]= await Promise.all(
      [
        //after click event below newwindow opens and saved that page reference in newWindow
         browserWindow.waitForEvent("page"),
        await iframe1.locator("//a[contains(@class,'tooltipstered')]").first().click()
       
      ]
    )
    await newWindow.waitForTimeout(4000)
   // await newWindow.locator("//input[@type='file']").click()
    await newWindow.locator("//input[@type='file']").setInputFiles("C:/Users/uktstautomation01/git/CustomerConnect/CCProject/src/main/resources/CV/CVEnglish.docx");
    // await newWindow.waitForTimeout(4000)
    await newWindow.locator("//input[@value='Update Resume']").first().click()
    //await page.waitForTimeout(8000)
    await page.waitForTimeout(4000)
    await page.bringToFront();
// await page.waitForLoadState(domcontentloaded)
//await page.waitForTimeout(8000)
    await page.locator("//a[@title='Home']").click()
   
    //click on global actions

    await page.locator("//a[@class='globalCreateTrigger slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action slds-input-has-icon slds-input-has-icon_right']").click()
//await page.waitForTimeout(8000)
    await page.locator("//li[@class='uiMenuItem oneGlobalCreateItem']//a[@title='Add CV']").click()
//await page.waitForTimeout(8000)
const resume =

            "CURRICULUM VITAE\n" +
                    "\n" +
                    "\n" +
                    "I.- PERSONAL DATA:\n" +
                    "\n" +
                    "Name: %s %s\n" +
                    "Address: London, UK\n" +
                    "Email: %s \n" +
                    "Phone: %s \n" +
                    "\n" +
                    "II.- EDUCATION:\n" +
                    "\n" +
                    "Public Accounting and auditor, graduated from Universidad Veracruzana, in 1990.\n" +
                    "\n" +
                    "Languages:  English GPA 9 (reading, writing, conversation), TOEFL 550 points\n" +
                    "French GPA 5 (reading and writing)\n" +
                    "\n" +
                    "I graduated on August, 2006.\n" +
                    "\n" +
                    "\n" +
                    "III. EXPERIENCE:\n" +
                    "\n" +
                    "- Accounting.\n" +
                    "- Treasury and investments.\n";
           //page.pause(3000) 
           //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
          // const a=await page.$("//input[@value = 'Paste']") 
           //await a.scrollIntoViewIfNeeded() 
          // expect(await page.locator("//input[@value = 'Paste']").isVisible());   
   
    

 await page.locator("//*[text() = 'Paste']").click()
     
      page.on('dialog',async(dialog)=>{
        await dialog.locator(".//textarea").fill("test")
        await dialog.waitForTimeout(4000)
         await dialog.locator(".//*[text() = 'Done']").click();
      })

      
    //await page.locator(".//textarea").fill("dsljhsdfhsdjfhjh")
   
    await page.locator(".//*[text() = 'Parse It!']").click();
    
    //click on paste
    //copy resume text
    // paste to field
    //click to send button
    //click parse it button
    //verify contact page
    //edit contact
    //save contact
    //verify contact title



});


