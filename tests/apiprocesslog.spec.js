const {test, expect}=   require("@playwright/test");
test.use({viewport:{width:1818,height:842}})
const LoginPage=require("../pages/loginpage")
const Contacts=require("../pages/contacts")

test('upload', async ({ browser }) => {
  const browserWindow=await browser.newContext()
  const page= await browserWindow.newPage()
//page is page reference
await page.goto('https://pagegroup--preprod.sandbox.my.salesforce.com/');
  await expect(page).toHaveTitle(/Login/);
  //loginpage is referene of Loginage class
  const loginPage= new LoginPage(page)
  await loginPage.loginToSAApplication()
  await expect(page).toHaveTitle(/Home/);
  //contactsPage is referene of Contacts class
  await page.locator("//a[@title='Dashboards']").click();
  await page.waitForTimeout(6000);
await page.locator("//a[@title='API_Processs_review']").click();
  await page.waitForTimeout(6000);
  await page.locator("//div[@class='truncation hasComponentRefresh']//a[contains(text(), 'View Report (API-Service-Logs-Ratio)')]").click();






  //const frame1=  await page.frameLocator("//iframe[@name='sfxdash-1758261016779-415649']");
   //await frame1.locator("//a[contains(text(), 'View Report (API-Service-Logs-Ratio)')]").scrollIntoViewIfNeeded().click();

  // locator("//a[contains(text(), 'View Report (API-Service-Logs-Ratio)')]").click();
  //await page.frameLocator("(//iframe[@title='dashboard'])[1]").locator("//a[contains(text(), 'View Report (API-Service-Logs-Ratio)')]").click();
 await page.waitForTimeout(6000);
  });