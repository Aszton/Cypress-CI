import { checkoutSelectors, registerSelectors } from "../selectors/selectors";
class Checkout_PO {
  checkoutWithAutoFilledData() {
    cy.get(checkoutSelectors.checkoutButton).click();
    cy.url().should("include", "checkout/confirm");
    cy.get(checkoutSelectors.confirmOrderButton).click();
    cy.url().should("include", "checkout/success");
    cy.get(checkoutSelectors.successMessage).should(
      "contain.text",
      "Your Order Has Been Processed!"
    );
  }
  guestCheckout(
    firstName,
    lastName,
    email,
    address,
    city,
    regionValue,
    regionName,
    postcode,
    countryValue,
    countryName
  ) {
    cy.url().should("include", "checkout/cart");
    cy.get(checkoutSelectors.checkoutTopButton).click();
    cy.url().should("include", "account/login");
    cy.get(checkoutSelectors.guestCheckout).click();
    cy.get(checkoutSelectors.continueButton).click();
    cy.url().should("include", "checkout/guest_step_1");
    cy.fillCheckoutForm(
      firstName,
      lastName,
      email,
      address,
      city,
      regionValue,
      regionName,
      postcode,
      countryValue,
      countryName
    );
    cy.get(checkoutSelectors.continueButton).click();
    cy.get(checkoutSelectors.checkoutOrder).should(
      "have.text",
      " Checkout Confirmation"
    );
    cy.url().should("include", "checkout/guest_step_3");
    cy.get(checkoutSelectors.confirmOrderButton).click();
    cy.get(checkoutSelectors.checkoutOrder).should(
      "have.text",
      " Your Order Has Been Processed!"
    );
  }
}
export default Checkout_PO;
