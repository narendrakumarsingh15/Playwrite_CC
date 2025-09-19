const {test, expect}=   require("@playwright/test");
test.use({viewport:{width:1818,height:842}})
const LoginPage=require("../pages/loginpage")
const Contacts=require("../pages/contacts")

test('upload', async ({ browser }) => {
  const browserWindow=await browser.newContext()
  const page= await browserWindow.newPage()
//page is page reference
await page.goto('https://pagegroup--sit.sandbox.my.salesforce.com');
  await expect(page).toHaveTitle(/Login/);
  //loginpage is referene of Loginage class
  const loginPage= new LoginPage(page)
  await loginPage.loginToApplication()
  await expect(page).toHaveTitle(/Home/);
  //contactsPage is referene of Contacts class
  await page.locator("//a[@title='Home']").click();
    //click on global actions
await page.locator("//a[@class='globalCreateTrigger slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action slds-input-has-icon slds-input-has-icon_right']").click();
await page.locator("//li[@class='uiMenuItem oneGlobalCreateItem']//a[@title='Add CV']").click();
await page.locator("//*[text() = 'Paste']").click();
await page.waitForTimeout(4000);
 const resume1 =

            'CURRICULUM VITAE\n' +
                    '\n' +
                    '\n' +
                    'I.- PERSONAL DATA:\n' +
                    '\n' +
                    'Name: %s %s\n' +
                    'Address: London, UK\n' +
                    'Email: %s \n' +
                    'Phone: %s \n' +
                    '\n' +
                    'II.- EDUCATION:\n' +
                    '\n' +
                    'Public Accounting and auditor, graduated from Universidad Veracruzana, in 1990.\n' +
                    '\n' +
                    'Languages:  English GPA 9 (reading, writing, conversation), TOEFL 550 points\n' +
                    'French GPA 5 (reading and writing)\n' +
                    '\n' +
                    'I graduated on August, 2006.\n' +
                    '\n' +
                    '\n' +
                    'III. EXPERIENCE:\n' +
                    '\n' +
                    '- Accounting.\n' +
                    '- Treasury and investments.\n'+
                     '\n' +
                    '\n' +
                    'IV. Mobile number:12222222222 \n'+
                     '\n' +
                    '\n' +
                    'V. Email: samyuktha@gmail.com \n';

  await page.locator("//textarea[@part='textarea']").fill(resume1);
  await page.waitForTimeout(4000);
  await page.locator("//*[text() = 'Done']").click();
  await page.waitForTimeout(4000);   
    await page.locator("//*[text() = 'Parse It!']").click();
    await page.waitForTimeout(6000);
    await page.waitForTimeout(6000);
   await expect(page.locator("//*[text() = 'Contact Information']").first()).toBeVisible();
    await page.waitForTimeout(4000);
    await page.locator("//input[@name='Title']").fill("QA Automation Engineer");
    await page.waitForTimeout(4000);
     await page.locator("//button[@aria-label='Source']").click();
    await page.locator("//span[@title='Candidate Referral']").click();
    await page.waitForTimeout(4000);
    await page.locator("//*[@name = 'SaveEdit']").click();
    await page.waitForTimeout(6000);
await expect(page.locator("//a[@title='Contacts']").first()).toBeVisible();
   



});


