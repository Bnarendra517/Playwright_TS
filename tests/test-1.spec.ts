import {test,expect} from '@playwright/test';
test('My test', async ({ page }) => {
  console.log("Execution started.......");
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);  


});