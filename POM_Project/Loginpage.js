import {expect} from '@playwright/test';
export class LoginPage{
    constructor(page){
        this.page=page;
    }
    async WebPage(){
        await this.page.goto('https://automationexercise.com/');

        await expect(this.page.getByRole('link', { name: 'Home' })).toBeVisible();

    }
    async Signup(){
        await this.page.getByRole('link',{name:'Signup / Login'}).click()
    }
    async NewUser(Logindata){
        await this.page.getByRole('textbox',{name:'Name'}).fill(Logindata.name)
        await this.page.locator('input[data-qa="signup-email"]').fill(Logindata.email)
        await this.page.getByRole('button',{name:'Signup'}).click()
        await this.page.waitForTimeout(3000);

        
    }
}