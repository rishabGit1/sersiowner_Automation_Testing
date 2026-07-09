import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login';


test('Business owner should able to Login Successfully', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login("dbrishabh2@gmail.com", "Test@123");


});