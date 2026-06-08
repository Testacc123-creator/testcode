import {expect} from '@playwright/test'
export class Accountdetails{
    constructor(page){
        this.page=page;
    }
    async Title(Userdata){
        await this.page.getByRole('radio',{name:'Mr.'}).click();
        await this.page.getByRole('textbox',{name:'Password *'}).fill(Userdata.password);
        await this.page.locator('#days').selectOption(Userdata.day)
        await this.page.locator('#months').selectOption(Userdata.month)
        await this.page.locator('#years').selectOption(Userdata.year)
        await this.page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).click()
        await this.page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).click()
        await this.page.getByRole('textbox',{name:'First name *'}).fill(Userdata.firstname)
        await this.page.getByRole('textbox',{name:'Last name *'}).fill(Userdata.lastname)
        await this.page.locator('#company').fill(Userdata.company)
        await this.page.getByRole('textbox',{name:'Address * '}).fill(Userdata.address)
        await this.page.locator('#country').selectOption(Userdata.country)
        await this.page.getByRole('textbox',{name:'State *'}).fill(Userdata.state)
        await this.page.getByRole('textbox',{name:'City *'}).fill(Userdata.city)
        await this.page.locator('#zipcode').fill(Userdata.zip)
                await this.page.waitForTimeout(5000);

        await this.page.getByRole('textbox',{name:'Mobile Number *'}).fill(Userdata.mobnumber)
        await this.page.getByRole('button',{name:'Create Account'}).click();
        await this.page.locator('.btn.btn-primary').click();
        

    }
}