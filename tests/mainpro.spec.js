import {test,expect} from '@playwright/test';
import {LoginPage} from '../POM_project/Loginpage';
import Logindata from '../testdata/Login.json';
import { Accountdetails } from '../POM_project/Accountdetails';
import {selectItem} from '../POM_Project/Select_item';
import { DeleteAccount } from '../POM_Project/Deleteaccount';

test('Automating the ecomm website',async ({page})=>{
    const login= new LoginPage(page);
    await login.WebPage();
    await login.Signup();
    await login.NewUser(Logindata);
    const accountdetails=new Accountdetails(page);
    await accountdetails.Title(Logindata);

    const selectitem=new selectItem(page);
    await selectitem.addToCart();
    

    // const deleteaccount=new DeleteAccount(page);
    // await deleteaccount.delacc();
    

})


