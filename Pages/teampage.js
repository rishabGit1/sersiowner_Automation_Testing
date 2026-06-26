export class teampage
{ 


 constructor(page)
{

    this.page = page;

    this.clikconTeamMemberPage = page.getByRole('link', { name: 'Team' });
    this.clickonrolesection = page.getByText('Roles');
    this.clickOnAddRoleBtn = page.getByRole('button', { name: 'Add Role' });
     this.clickOnRoleNameField = page.getByRole('textbox', { name: 'Enter role name' });
     this.EnterRoleName =  page.getByRole('textbox', { name: 'Enter role name' });
     this.clickOnAddBtn = page.getByRole('button', { name: 'Add', exact: true });
     this.clickOnActionBtn = page.locator('.lucide.lucide-ellipsis-vertical').first();
     this.clickOnDeleteBtn = page.getByText('Delete');
     this.clickOnRoleDeleteBtn = page.getByRole('button', { name: 'Delete Role' });
     this.clickOnTeamMemberSection = page.getByText('Team Members');
     this.clickOnNewMemberBtn = page.getByRole('button', { name: 'New Member' });
     this.EnterMemberName = page.getByRole('textbox', { name: 'Enter Name' });
     this.EnterMemberEmail = page.getByRole('textbox', { name: 'Enter Email' });
     this.SelectRole = page.locator('.dropdown-selected');
      this.SelectHiringDate = page.getByRole('textbox', { name: 'Select hiring date' });
     this.clickOnAddMemberBtn = page.getByRole('button', { name: 'Add Member' });
     this.clickOnAnyMemeberName = page.getByText('Isla');
     this.clickOnDeleteAccount = page.locator('body');
     this.clickOnFinalDeteteMemberBnt = page.locator('body');
    

    }
    
    async  createTeamMember()
    {

       await this.clikconTeamMemberPage.click();
       await this.clickonrolesection.click();
       await this.clickOnAddRoleBtn.click();
       await this.clickOnRoleNameField.click();
       await this.EnterRoleName.fill('Test Role');
       await this.clickOnAddBtn.click();
       await this.clickOnActionBtn.click();
       await this.clickOnDeleteBtn.click();
       await this.clickOnRoleDeleteBtn.click();
       await this.clickOnTeamMemberSection.click();
       await this.clickOnNewMemberBtn.click();
       await this.EnterMemberName.fill('Rishabh');
       await this.EnterMemberEmail.fill("rishabh@gmail.com");
       await this.SelectRole.click();
       await this.SelectHiringDate.click();
       await this.clickOnAddMemberBtn.click();
       await this.clickOnAnyMemeberName.click();
       await this.clickOnDeleteAccount.click();
       await this.clickOnFinalDeteteMemberBnt.click();



    }









}