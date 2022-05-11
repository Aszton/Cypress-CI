/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  beforeEach(function () {
    cy.fixture('userLogin').then(function(data) {
      this.data=data
    })
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });

  it("Login with valid creditentials", function () {
    loginPageHelper.login(this.data.login, this.data.password);
    // loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
  });

  it("Login with invalid creditantials", function () {
    loginPageHelper.login(this.data.failLogin, this.data.failLogin);
    // loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
