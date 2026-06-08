import { expect } from "@playwright/test";
export class DeleteAccount{
    constructor(page){
        this.page=page;
    }
    async delacc(Userdata){
        await this.page.locator("a[href='/delete_account']").click();
        await this.page.getByRole('button',{name:'Continue'});
        await this.page.getByRole('link',{name:'Signup / Login'}).click()
        await this.page.waitForTimeout(3000)
    }

}