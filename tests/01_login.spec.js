// @ts-check
import { test, expect } from '@playwright/test';

const TODO_ITEMS = [
  'qa.auto.sysadmin@michaelpage.com.sit',
  'London2025$$$$$'
  
]
test('Login', async ({ page }) => {
  
  await page.goto('https://pagegroup--sit.sandbox.my.salesforce.com');
  // test.use({viewport:{width: 1920, height: 1080}})
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);
  await page.locator('input[id="username"]').fill('qa.auto.sysadmin@michaelpage.com.sit');
  await  page.locator('input[id="password"]').fill('London2025$$$$$');
  await page.locator('input[id="Login"]').click();
  await expect(page).toHaveTitle(/Home/);
});

