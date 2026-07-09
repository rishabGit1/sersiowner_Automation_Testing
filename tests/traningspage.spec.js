import { test, expect } from '@playwright/test';
import { traningpage } from '../Pages/traningsPage';
import { signup } from '../Pages/Signup';

test('Business Owner should able to create new tranings', async ({ page }) => {
  const Traning = new traningpage(page);
  const SignUp = new signup(page);

  await SignUp.gotoSignUp();
  await SignUp.signuptoWeb("rishabh", "dbrishabh22@gmail.com", "123456");
  await Traning.createTranings();

});