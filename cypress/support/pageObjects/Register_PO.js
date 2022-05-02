import { registerSelectors } from "../selectors/selectors";

class Register_PO {
  clickContinueRegister() {
    cy.get(registerSelectors.continueButton).click();
    cy.get(registerSelectors.registerHeader).should(
      "have.text",
      " Create Account"
    );
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
      "Email Address does not appear to be valid!"
    );
  }
  successRegister() {
    cy.get(registerSelectors.registerHeader).should(
      "have.text",
      " Your Account Has Been Created!"
    );
  }
}
export default Register_PO;
