import { productDetailsSelectors } from "../selectors/selectors";

class TshirtsCategoryDetails_PO {
  openTshirtDetails(name, url) {
    cy.openProduct(name);
    cy.checkURL(url);
  }
  chooseSize(selector, option, text) {
    cy.chooseOptionFromDropdownList(selector, option, text);
  }
  changeTheQty(value) {
    cy.clearInputAndType(productDetailsSelectors.qty, value);
  }
}
export default TshirtsCategoryDetails_PO;
