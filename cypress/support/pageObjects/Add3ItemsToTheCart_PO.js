import Navigaton_PO from "./Navigaton_PO";
import CartItems_PO from "./CartItems_PO";
import Checkout_PO from "./Checkout_PO";
import TshirtsCategoryDetails_PO from "./TshirtCategoryDetails_PO";
import {
  tShirtsSelectors,
  productDetailsSelectors,
} from "../selectors/selectors";

const navigationHelper = new Navigaton_PO();
const cartItemsHelper = new CartItems_PO();
const tShirtDetailsHelper = new TshirtsCategoryDetails_PO();

let fruitOfTheLoom = "Fruit of the Loom T-Shirts 5 Pack - Super Premium";

class Add3ItemsToTheCart_PO {
  add3CreamsFromHomepageToTheCart() {
    cy.openProduct(
      "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"
    );
    cy.url().should("include", "product_id=68");
    cy.get(productDetailsSelectors.addToChart).click();
    cy.url().should("include", "checkout/cart");
    navigationHelper.openHomepage();
    cy.openProduct("Absolue Eye Precious Cells");
    cy.url().should("include", "product_id=65");
    cy.get(productDetailsSelectors.addToChart).click();
    navigationHelper.openHomepage();
    cy.openProduct("Total Moisture Facial Cream");
    cy.url().should("include", "product_id=66");
    cy.get(productDetailsSelectors.addToChart).click();
    cy.url().should("include", "checkout/cart");
  }
  
  add3TshirtsToTheCart() {
    navigationHelper.openApparelAndAccesoriesTab();
    navigationHelper.openTshirtsTab();
    // Add first t-shirt to the cart:
    tShirtDetailsHelper.openTshirtDetails(fruitOfTheLoom, "product_id=119");
    tShirtDetailsHelper.chooseSize(
      tShirtsSelectors.sizeForFruit,
      "769",
      "Medium  "
    );
    cy.clearInputAndType(productDetailsSelectors.qty, 2);
    cy.checkValue(2);
    cy.clickAddToChart();
    // Add second t-shirt to the cart:
    navigationHelper.openApparelAndAccesoriesTab();
    navigationHelper.openTshirtsTab();
    tShirtDetailsHelper.openTshirtDetails(fruitOfTheLoom, "product_id=119");
    tShirtDetailsHelper.chooseSize(
      tShirtsSelectors.sizeForFruit,
      "770",
      "Large  "
    );
    cy.clearInputAndType(productDetailsSelectors.qty, 2);
    cy.checkValue(2);
    cy.clickAddToChart();
    // Add third t-shirt to the cart:
    navigationHelper.openApparelAndAccesoriesTab();
    navigationHelper.openTshirtsTab();
    tShirtDetailsHelper.openTshirtDetails(fruitOfTheLoom, "product_id=119");
    tShirtDetailsHelper.chooseSize(
      tShirtsSelectors.sizeForFruit,
      "771",
      "X-Large  "
    );
    cy.checkValue(1);
    cy.clickAddToChart();
    // Checkout:
    cartItemsHelper.checkIfItemsInChartAreCorrect(3);
  }
}
export default Add3ItemsToTheCart_PO;
