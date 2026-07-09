export class signup {


    constructor(page) {
        this.page = page;
        this.nameField = page.getByRole('textbox', { name: 'Enter your name' });
        this.emailField = page.getByRole('textbox', { name: 'Enter your email' })
        this.aggreeterms = page.locator('.trust-checkbox').first();
         this.subscribeemailCheckBox = page.getByRole('checkbox').nth(1);
        this.signupbtn = page.getByRole('button', { name: 'Sign Up' });
        this.otp1 = page.locator('#otp-0');
        this.otp2 = page.locator('#otp-1');
        this.otp3 = page.locator('#otp-2');
        this.otp4 = page.locator('#otp-3');
        this.otp5 = page.locator('#otp-4');
        this.otp6 = page.locator('#otp-5');
        this.verifyotp = page.getByRole('button', { name: 'Verify OTP' });
        this.uploadLogo = page.locator('input[type="file"]').first();
        this.uploadCoverPhoto = page.locator('input[type="file"]').nth(1);
        this.applybtn =  page.getByRole('button', { name: 'Apply' });
       
    }


    async signuptoWeb(name, email, otp) {

        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.aggreeterms.click();
        await this.subscribeemailCheckBox.click();
        await this.signupbtn.click();
        await this.otp1.fill(otp[0]);
        await this.otp2.fill(otp[1]);
        await this.otp3.fill(otp[2]);
        await this.otp4.fill(otp[3]);
        await this.otp5.fill(otp[4]);
        await this.otp6.fill(otp[5]);
        await this.verifyotp.click();
        await this.aggreeterms.first().click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByRole('button', { name: 'Select this plan' }).nth(1).click();
        await this.page.getByRole('textbox', { name: 'Enter your first name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your first name' }).fill('rishabh');
        await this.page.getByRole('textbox', { name: 'Enter your last name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your last name' }).fill('qa');
        await this.page.getByRole('textbox', { name: 'Enter email' }).click();
        await this.page.getByRole('textbox', { name: 'Enter email' }).fill('qa@gmail.com');
        await this.page.getByRole('textbox', { name: '0000 0000 0000' }).click();
        await this.page.getByRole('textbox', { name: '0000 0000 0000' }).fill('0000000000000000');
        await this.page.getByRole('textbox', { name: '/00' }).click();
        await this.page.getByRole('textbox', { name: '/00' }).fill('11/50');
        await this.page.getByRole('textbox', { name: '000', exact: true }).click();
        await this.page.getByRole('textbox', { name: '000', exact: true }).fill('123');
        await this.page.locator('.trust-checkbox').click();
        await this.page.getByRole('button', { name: 'Pay now' }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.locator('.trust-checkbox').first().click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByRole('textbox', { name: 'Enter password', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Enter password', exact: true }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Enter password', exact: true }).fill('T');
        await this.page.getByRole('textbox', { name: 'Enter password', exact: true }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Enter password', exact: true }).fill('Test@123');
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).click();
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).fill('T');
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).fill('Test@123');
        await this.page.getByRole('textbox', { name: 'Re-enter password' }).click();
        await this.page.locator('svg').nth(1).click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByRole('button', { name: 'Create' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).fill('qa');
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).fill('qaT');
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Enter your business name' }).fill('qaTech');
         await this.page.locator('.dropdown-selected').first().click();
         await this.page.getByText('Spa', { exact: true }).click();
        await this.uploadLogo.setInputFiles('C:\\Rishabh\\SersiAi_owner_Automation_Testing\\test data\\testimg.jpg');
        await this.applybtn.click();
        await this.uploadCoverPhoto.setInputFiles('C:\\Rishabh\\SersiAi_owner_Automation_Testing\\test data\\testimg.jpg');
        await this.applybtn.click();
        //await this.page.getByRole('textbox', { name: '-000-0000' }).click();
        await this.page.getByRole('textbox', { name: '-000-0000' }).fill('1111111111');
        await this.page.getByText('Business NameBusiness Type').click();
        await this.page.locator('div:nth-child(6) > .common-dropdown > .dropdown-selected').click();
        await this.page.getByText('Pacific Time - US & Canada').click();
        await this.page.locator('div').filter({ hasText: /^Address$/ }).click();
        await this.page.getByRole('textbox', { name: 'Enter Address' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Address' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Address' }).fill('indore');
        await this.page.locator('div:nth-child(8) > .common-dropdown > .dropdown-selected').click();
        await this.page.getByText('United States').click();
        await this.page.locator('div:nth-child(9) > .common-dropdown > .dropdown-selected').click();
        await this.page.getByText('Alabama').click();
        await this.page.locator('div:nth-child(10) > .common-dropdown > .dropdown-selected').click();
        await this.page.getByText('Miami').click();
        await this.page.getByRole('textbox', { name: 'Enter Zip Code' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Zip Code' }).fill('456776');
        await this.page.getByRole('textbox', { name: 'Ex. MangoMint' }).click();
        await this.page.getByRole('textbox', { name: 'Ex. MangoMint' }).fill('aropay');
        await this.page.getByRole('button', { name: 'Continue' }).click();
        //await this.page.getByText('Build Your Training SystemCreate role-specific training built for performance.').click();
        await this.page.getByRole('button', { name: 'Continue' }).click();

    }

    async gotoSignUp() {
        await this.page.goto('https://raya-business-owner-frontend.vercel.app/signup');
    }






}