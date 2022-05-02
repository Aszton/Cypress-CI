/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import ShoesCategoryDetails_PO from "../../../support/pageObjects/ShoesCategoryDetails_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import { productDetailsSelectors } from "../../../support/selectors/selectors";
import { inputValue } from "../../../support/helpers/inputValues";

const navigatonHelper = new Navigaton_PO();
const shoesDetailsHelper = new ShoesCategoryDetails_PO();
const checkoutHelper = new Checkout_PO();

describe('Buy as a Guest', () => {
  beforeEach(function () {
    navigatonHelper.openHomepage();
  });
  it('Buy shoes as a Guest', () => {
    navigatonHelper.openApparelAndAccesoriesTab();
    navigatonHelper.openShoesTab();
    shoesDetailsHelper.openShoesDetails(
      "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals",
      "product_id=116"
    );
    shoesDetailsHelper.chooseSize("4 UK");
    cy.clearInputAndType(productDetailsSelectors.qty, 10);
    cy.checkValue(10);
    cy.clickAddToChart();
    checkoutHelper.guestCheckout(
      inputValue.randomFirstName,
      inputValue.randomLastName,
      inputValue.randomEmail,
      inputValue.randomAddress,
      inputValue.randomCity,
      inputValue.regionValue,
      inputValue.regionName,
      inputValue.randomPostcode,
      inputValue.countryValue,
      inputValue.countryName
      );
    });
  });
