import { chartSelectors } from "../../support/selectors/selectors";
class CartItems_PO {
  checkIfItemsInChartAreCorrect(value) {
    cy.CheckQuantityOfTheElements(chartSelectors.itemBox, value);
  }
}
export default CartItems_PO;
