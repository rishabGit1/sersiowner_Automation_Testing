export class traningpage{



constructor(page)
{

    this.page = page;

    this.gotoTrainingPage = page.getByRole('link', { name: 'Trainings' });
    this.clickOnCreateTrainingBtn = page.getByRole('button', { name: 'Create Training' });
    this.clickOnTrainingNameField = page.getByRole('textbox', { name: 'Enter training name' });
    this.EnterTrainingName = page.getByRole('textbox', { name: 'Enter training name' });
    this.clickOnTemplateCard = page.locator('.template-card > .view-btn').first();
    this.clickOnUploadBtn = page.getByRole('button', { name: 'Upload' });
    this.clickOnAssignBtn = page.getByRole('button', { name: 'Assign' }).first();
    this.clickOnRoleDropdown = page.locator('.dropdown-selected');
    this.SelectRole = page.getByText('Front Desk');
    this.clickOnSearchUser = page.getByRole('textbox', { name: 'Search user' });
    this.EnterSearchUser = page.getByText('Crimson Joy');
    this.EnterSearchUser1 = page.getByText('Amber Bliss');
    this.EnterSearchUser2 = page.getByText('alkasdf');
    this.EnterSearchUser3 = page.getByText('John Doe');
    this.clickOutside =page.getByText('AssigneeAns×Crimson Joy×');
    this.ClickOnDoneBtn = page.getByRole('button', { name: 'Done' });
    


}

async createTranings()
{


   await this.gotoTrainingPage.click();
   await this.clickOnCreateTrainingBtn.click();
   await this.clickOnTrainingNameField.click();
   await this.EnterTrainingName.fill('Test Training');
  // await this.clickOnTemplateCard.click();
   await this.clickOnUploadBtn.click();
   await this.clickOnAssignBtn.click();
   await this.clickOnRoleDropdown.click();
   await this.SelectRole.click();
   await this.clickOnSearchUser.click();
   await this.EnterSearchUser.click();
   await this.EnterSearchUser1.click();
   await this.EnterSearchUser2.click();
   await this.EnterSearchUser3.click();
   await this.SelectRole.click();
   await this.ClickOnDoneBtn.click();



}








}