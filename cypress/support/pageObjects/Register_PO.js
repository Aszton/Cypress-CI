import { registerSelectors } from "../selectors/selectors";

class Register_PO {
  clickContinueRegister() {
    cy.get(registerSelectors.continueButton).click()
    cy.url().should("include", "account/create")
  }
  fillRegisterForm(
    firstName,
    lastName,
    email,
    address,
    city,
    regionValue,
    regionName,
    postcode,
    login,
    password,
    passwordConfirm
  ) {
    cy.fillRegisterForm(
      firstName,
      lastName,
      email,
      address,
      city,
      regionValue,
      regionName,
      postcode,
      login,
      password,
      passwordConfirm
    );
  }
  checkPrivacyPolicy() {
    cy.get(registerSelectors.privacyPolicy).click();
  }
  clickContinueRegister() {
    cy.get(registerSelectors.continueButton).click();
  }
  failRegisterError() {
    cy.get(registerSelectors.failMessage).should(
      "contain.text",
      "This is fail test"
    );
  }
  successRegister() {
    cy.get(registerSelectors.registerHeader).should(
      "have.text",
      " This is fail test"
    );
  }
}
export default Register_PO;
