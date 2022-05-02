import { loginSelectors } from "../selectors/selectors";
class Login_PO {
  login(userName, password) {
    cy.login(userName, password);
  }
  clickOnLoginButton() {
    cy.get(loginSelectors.loginButton).click();
  }
  loginErrorMessage() {
    cy.get(loginSelectors.errorIncorrectLogin);
  }
  isUserloginCorrectly() {
    cy.url().should("include", "account/account");
  }
  logout() {
    cy.get(loginSelectors.logoutButton).click();
    cy.url().should("include", "account/logout");
    cy.checkTextOfTheElement(loginSelectors.logoutMessage, " Account Logout");
  }
}
export default Login_PO;
