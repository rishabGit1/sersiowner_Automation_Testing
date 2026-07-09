export class ForgetPassPage{


constructor(page){

    this.page = page
    this.forgotPassLink = page.getByText('Forgot Password?')
    this.forget_email_txtbox = page.getByRole('textbox', { name: 'Enter your registered email' })
    this.submit_btn = page.getByRole('button', { name: 'Submit' })
    this.otp_txtbox1 = page.getByRole('textbox', { name: '-' }).first();
    this.otp_txtbox2 = page.getByRole('textbox', { name: '-' }).nth(1);
    this.otp_txtbox3 = page.getByRole('textbox', { name: '-' }).nth(2);
    this.otp_txtbox4 = page.getByRole('textbox', { name: '-' }).nth(3);
    this.otp_txtbox5 = page.getByRole('textbox', { name: '-' }).nth(4);
    this.otp_txtbox6 = page.getByRole('textbox', { name: '-' }).nth(5);
    this.verify_otp_btn = page.getByRole('button', { name: 'Verify OTP' })
    this.new_pass_txtbox = page.getByRole('textbox', { name: 'Enter new password' })
    this.re_enter_pass_txtbox = page.getByRole('textbox', { name: 'Re-enter password' })
    this.reset_btn = page.getByRole('button', { name: 'Reset' })
    this.reset_login_btn = page.getByRole('button', { name: 'Log in' })

    //now login with new pass 
    this.login_email_txtbox = page.getByRole('textbox', { name: 'Enter your email' });
    this.pass_txtbox = page.getByRole('textbox', { name: 'Enter your password' });
    this.login_btn = page.getByRole('button', { name: 'Login' });
    this.login_otp1 = page.locator('#otp-0');
    this.login_otp2 = page.locator('#otp-1');
    this.login_otp3 = page.locator('#otp-2');
    this.login_otp4 = page.locator('#otp-3');
    this.login_otp5 = page.locator('#otp-4');
    this.login_otp6 = page.locator('#otp-5');
    this.login_verify_otp_btn = page.getByRole('button', { name: 'Verify OTP' });
    this.logout_icon = page.locator('.c-pointer > .lucide');
    this.logout_btn = page.locator('div').filter({ hasText: /^Logout$/ });
    this.logout_yes_btn = page.getByRole('button', { name: 'Yes' });



}



async forgetPass(email,otp,newPass,reEnterPass)
{

await this.forgotPassLink.click();
await this.forget_email_txtbox.click();
await this.forget_email_txtbox.fill(email);
await this.submit_btn.click();
await this.otp_txtbox1.fill("1");
await this.otp_txtbox2.fill("2");
await this.otp_txtbox3.fill("3");
await this.otp_txtbox4.fill("4");
await this.otp_txtbox5.fill("5");
await this.otp_txtbox6.fill("6");
await this.verify_otp_btn.click();
await this.new_pass_txtbox.fill(newPass);
await this.re_enter_pass_txtbox.fill(reEnterPass);
await this.reset_btn.click();
await this.reset_login_btn.click();

//login with new pass 
await this.login_email_txtbox.fill(email);
await this.pass_txtbox.fill(newPass);
await this.login_btn.click();
await this.login_otp1.fill("1");
await this.login_otp2.fill("2");
await this.login_otp3.fill("3");
await this.login_otp4.fill("4");
await this.login_otp5.fill("5");
await this.login_otp6.fill("6");
await this.login_verify_otp_btn.click();
await this.logout_icon.click();
await this.logout_btn.click();
await this.logout_yes_btn.click();

}





}