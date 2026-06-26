export class LoginPage 
{

    constructor(page) 
    {
        this.page = page
        this.email_txtbox = page.getByRole('textbox', { name: 'Enter your email' });
        this.pass_txtbox = page.getByRole('textbox', { name: 'Enter your password' });
        this.login_btn = page.getByRole('button', { name: 'Login' });
    }

    async login(email, password) 
    {

        await this.email_txtbox.click();
        await this.email_txtbox.fill(email);
        await this.pass_txtbox.click();
        await this.pass_txtbox.fill(password);
        await this.login_btn.click();


    }

    async gotoLoginPage() 
    {
        await this.page.goto("https://raya-business-owner-frontend.vercel.app/");


    }

}