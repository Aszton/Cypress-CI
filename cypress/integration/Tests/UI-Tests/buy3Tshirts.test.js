/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import Add3ItemsToTheCart_PO from "../../../support/pageObjects/Add3ItemsToTheCart_PO";
import user from "../../../fixtures/user.json";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();
const checkoutHelper = new Checkout_PO();
const addItemsHelper = new Add3ItemsToTheCart_PO();

describe.skip("Buy 3 T-shirts", () => {
  beforeEach(() => {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });

  it("Login -> Add 3 t-shirts to the cart -> Checkout", function () {
    loginPageHelper.login(`${user.userName}`, `${user.password}`);
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
    navigationHelper.openHomepage();
    addItemsHelper.add3TshirtsToTheCart();
    checkoutHelper.checkoutWithAutoFilledData();
  });
});
