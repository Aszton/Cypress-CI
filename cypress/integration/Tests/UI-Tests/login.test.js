/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";
import user from "../../../fixtures/user.json"

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  beforeEach(() => {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });

  it("Login with valid creditentials", () => {
    loginPageHelper.login(`${user.userName}`, `${user.password}`);
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
    console.log("test")
  });

  it("Login with invalid creditantials", () => {
    loginPageHelper.login(`${user.failUserName}`, `${user.failPassword}`);
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
