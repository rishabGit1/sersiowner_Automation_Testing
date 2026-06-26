import { test, expect } from '@playwright/test';
import { teampage } from '../Pages/teampage';
import { signup } from '../Pages/Signup';

test('Business owner should able to create new roles and add new team members', async ({ page }) => {

    const team = new teampage(page);
    const SignUp = new signup(page);


    await SignUp.gotoSignUp();
    await SignUp.signuptoWeb("rishabh", "rishabh@gmail.com", "123456")
    await team.createTeamMember();


});