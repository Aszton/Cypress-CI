/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import Add3ItemsToTheCart_PO from "../../../support/pageObjects/Add3ItemsToTheCart_PO";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();
const checkoutHelper = new Checkout_PO();
const addItemsHelper = new Add3ItemsToTheCart_PO();

describe("Buy 3 T-shirts", () => {
  beforeEach(function () {
    cy.fixture('userLogin').then(function(data) {
      this.data=data
    })
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });

  it("Login -> Add 3 t-shirts to the cart -> Checkout", function () {
    loginPageHelper.login(this.data.login, this.data.password);
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
    navigationHelper.openHomepage();
    addItemsHelper.add3TshirtsToTheCart();
    checkoutHelper.checkoutWithAutoFilledData();
  });
});
