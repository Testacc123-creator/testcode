import { expect } from "@playwright/test";
export class selectItem{
    constructor(page){
        this.page=page;
    }
async addToCart(){

await this.page.getByRole('link',{name:"/product_details/2"}).click()
await this.page.getByRole('button',{name:'Add to cart'}).click()
await this.page.getByRole('link', { name: 'View Cart' }).click()
}
}