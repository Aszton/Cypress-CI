import { homePageSelectors, shoesSelectors } from "../selectors/selectors";
class Navigaton_PO {
  openHomepage() {
    cy.visit("https://automationteststore.com/");
    cy.title().should("eq", "A place to practice your automation skills!");
    cy.get(homePageSelectors.openChart);
  }
  clickLoginOrRegister() {
    cy.get(homePageSelectors.loginRegisterButton).click();
    cy.url().should("include", "account/login");
  }
  openChart() {
    cy.get(homePageSelectors.openChart).click();
    cy.url().should("include", "checkout/cart");
  }
  openApparelAndAccesoriesTab() {
    cy.get(homePageSelectors.apparelAndAccesories).eq(0).click();
    cy.url().should("include", "path=68");
  }
  openShoesTab() {
    cy.get(shoesSelectors.openShoes).eq(1).click();
    cy.url().should("include", "path=68_69");
  }
  openTshirtsTab() {
    cy.get(shoesSelectors.openTshirts).eq(1).click();
    cy.url().should("include", "path=68_70");
  }
}
export default Navigaton_PO;
