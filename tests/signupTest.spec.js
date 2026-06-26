import { test, expect } from '@playwright/test';
import { signup } from '../Pages/Signup';

test('Business owner should sign up successfully', async ({ page }) => {

    const SignUp = new signup(page);
    await SignUp.gotoSignUp();
    await SignUp.signuptoWeb("rishabh", "rishabh@gmail.com", "123456");

});
