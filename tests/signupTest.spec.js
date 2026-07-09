import { test, expect } from '@playwright/test';
import { signup } from '../Pages/Signup';

test('Business owner should sign up successfully', async ({ page }) => {

    const SignUp = new signup(page);
    await SignUp.gotoSignUp();
    await SignUp.signuptoWeb("testttttt", "rishabhhh245@gmail.com", "123456");

});

// import { test } from '@playwright/test';
// import { signup } from '../Pages/Signup';

// // Define how many users you want to create (e.g., 5)
// const numberOfUsers = 2;

// for (let i = 1; i <= numberOfUsers; i++) {
//   test(`Business owner should sign up successfully - User ${i}`, async ({ page }) => {
//     const SignUp = new signup(page);
    
//     // Generates a unique email dynamically for each run
//     const uniqueEmail = `john+user${i}_${Date.now()}@gmail.com`;
    
//     await SignUp.gotoSignUp();
//     await SignUp.signuptoWeb("john", uniqueEmail, "123456");
//   });
// }

