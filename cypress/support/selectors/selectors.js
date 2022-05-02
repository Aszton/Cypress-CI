export const homePageSelectors = {
  loginRegisterButton: "#customernav",
  addAbsoluteAntiAgeCreamToChart: '[data-id="68"]',
  addAbsolueEyeCreamToChart: '[data-id="65"]',
  addTotalMoistureCreamToChart: '[data-id="66"]',
  openChart: ".cart_total",
  apparelAndAccesories: '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]',
};

export const loginSelectors = {
  loginInput: '[name="loginname"]',
  passwordInput: '[name="password"]',
  loginButton: '[title="Login"]',
  errorIncorrectLogin: ".alert-danger",
  logoutButton: '[href*="account/logout"]',
  logoutMessage: ".maintext",

};

export const registerSelectors = {
  continueButton: '[title="Continue"]',
  registerHeader: ".maintext",
  firstName: '[name="firstname"]',
  lastName: '[name="lastname"]',
  email: '[name="email"]',
  address_1: '[name="address_1"]',
  city: '[name="city"]',
  regionGuest: "#guestFrm_zone_id",
  regionState: "#AccountFrm_zone_id",
  postcode: '[name="postcode"]',
  country: '[name="country_id"]',
  countryGuest: "#guestFrm_country_id",
  login: '[name="loginname"]',
  password: '[name="password"]',
  passwordConfirm: '[name="confirm"]',
  privacyPolicy: '[name="agree"]',
  failMessage: ".alert-error",
};

export const productDetailsSelectors = {
  addToChart: ".productpagecart",
  qty: "#product_quantity",
};

export const chartSelectors = {
  itemBox: '[id*="cart_quantity"]',
};

export const checkoutSelectors = {
  checkoutTopButton: "#cart_checkout1",
  checkoutButton: "#cart_checkout2",
  confirmOrderButton: "#checkout_btn",
  successMessage: ".heading1",
  continueButton: '[title="Continue"]',
  guestCheckout: "#accountFrm_accountguest",
  checkoutOrder: ".maintext",
};

export const shoesSelectors = {
  openShoes: '[href*="path=68_69"]',
  openTshirts: '[href*="path=68_70"]',
  sizeCheckbox: ".form-group",
};

export const tShirtsSelectors = {
  sizeForSleeve: "#option353",
  sizeForJersey: "#option349",
  sizeForFruit: "#option348",
};
