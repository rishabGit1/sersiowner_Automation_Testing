import { test, expect } from '@playwright/test';
import { ForgetPassPage } from '../Pages/forgetPass';

test('To Check Owner is able to Forget Password Successfully', async ({ page }) => {

 const forget = new ForgetPassPage(page);
 await page.goto('https://raya-business-owner-frontend.vercel.app/');
 await forget.forgetPass("rishabhh@gmail.com", "012345", "Test@123", "Test@123");

 


  
});




// await page.goto('https://raya-business-owner-frontend.vercel.app/');
//   await page.getByText('Forgot Password?').click();
//   await page.getByRole('textbox', { name: 'Enter your registered email' }).click();
//   await page.getByRole('textbox', { name: 'Enter your registered email' }).fill('dbrishabh2@gmail.com');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('textbox', { name: '-' }).first().fill('1');
//   await page.getByRole('textbox', { name: '-' }).nth(1).fill('2');
//   await page.getByRole('textbox', { name: '-' }).nth(2).fill('3');
//   await page.getByRole('textbox', { name: '-' }).nth(3).fill('4');
//   await page.getByRole('textbox', { name: '-' }).nth(4).fill('5');
//   await page.getByRole('textbox', { name: '-' }).nth(5).fill('6');
//   await page.getByRole('button', { name: 'Verify OTP' }).click();
//   await page.getByRole('textbox', { name: 'Enter new password' }).click();
//   await page.getByRole('textbox', { name: 'Enter new password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter new password' }).fill('T');
//   await page.getByRole('textbox', { name: 'Enter new password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter new password' }).fill('Test@123');
//   await page.locator('svg').nth(1).click();
//   await page.locator('path').nth(2).click();
//   await page.getByRole('textbox', { name: 'Re-enter password' }).click();
//   await page.getByRole('textbox', { name: 'Re-enter password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Re-enter password' }).fill('T');
//   await page.getByRole('textbox', { name: 'Re-enter password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Re-enter password' }).fill('Test@123');
//   await page.getByRole('textbox', { name: 'Re-enter password' }).click();
//   await page.locator('svg').nth(2).click();
//   await page.getByRole('button', { name: 'Reset' }).click();
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('textbox', { name: 'Enter your email' }).click();
//   await page.getByRole('textbox', { name: 'Enter your email' }).fill('dbrishabh2@gmail.com');
//   await page.getByRole('textbox', { name: 'Enter your password' }).click();
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('');
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('t');
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('');
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('T');
//   await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@123');
//   await page.locator('svg').click();
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.locator('#otp-0').click();
//   await page.locator('#otp-0').fill('1');
//   await page.locator('#otp-1').fill('2');
//   await page.locator('#otp-2').fill('3');
//   await page.locator('#otp-3').fill('4');
//   await page.locator('#otp-4').fill('5');
//   await page.locator('#otp-5').fill('6');
//   await page.getByRole('button', { name: 'Verify OTP' }).click();
//   await page.locator('.c-pointer > .lucide').click();
//   await page.getByText('DashboardTeamTrainingsProjects & TasksCEO Hub KPIs Calender Messages').click();
//   await page.locator('div').filter({ hasText: /^Logout$/ }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();