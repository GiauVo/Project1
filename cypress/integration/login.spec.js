// <reference types="cypress"/>
import {LoginPage} from "../PO/Login_Page.spec"

var loginPage  = new LoginPage()
it('login test',function()
{
  loginPage.navigate('https://trytestingthis.netlify.app/')
  loginPage.enterUsername('test')
  loginPage.enterPassword('test')
  loginPage.clickLogin()
 
 
 
})