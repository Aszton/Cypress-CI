/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";
import Add3ItemsToTheCart_PO from "../../../support/pageObjects/Add3ItemsToTheCart_PO";
import CartItems_PO from "../../../support/pageObjects/CartItems_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import user from "../../../fixtures/user.json";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();
const addItemsHelper = new Add3ItemsToTheCart_PO();
const cartItemsHelper = new CartItems_PO();
const checkoutHelper = new Checkout_PO();

describe("Buy Items from homepage test", () => {
  beforeEach(() => {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });

  it("Add 3 creams from the homepage and checkout", () => {
    loginPageHelper.login(`${user.userName}`, `${user.password}`);
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
    navigationHelper.openHomepage();
    addItemsHelper.add3CreamsFromHomepageToTheCart();
    cartItemsHelper.checkIfItemsInChartAreCorrect(3);
    checkoutHelper.checkoutWithAutoFilledData();
  });
});