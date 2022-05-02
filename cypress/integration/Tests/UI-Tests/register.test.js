import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Register_PO from "../../../support/pageObjects/Register_PO";
import { inputValue } from "../../../support/helpers/inputValues";

const navigatonHelper = new Navigaton_PO();
const registerHelper = new Register_PO();

describe("Register Form", () => {
  beforeEach(function () {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    registerHelper.clickContinueRegister();
  });
  it("Register a new user - pass test", () => {
    registerHelper.fillRegisterForm(
      inputValue.randomFirstName,
      inputValue.randomLastName,
      inputValue.randomEmail,
      inputValue.randomAddress,
      inputValue.randomCity,
      inputValue.regionValue,
      inputValue.regionName,
      inputValue.randomPostcode,
      inputValue.randomLogin,
      inputValue.password,
      inputValue.confirmPassword
    );
    registerHelper.checkPrivacyPolicy();
    registerHelper.clickContinueRegister();
    registerHelper.successRegister();
  });

  it("Register a new user - failed test", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    registerHelper.clickContinueRegister();
    registerHelper.fillRegisterForm(
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "3516",
      "Angus",
      "postcode",
      "login",
      "password",
      "passwordConfirm"
    );
    registerHelper.checkPrivacyPolicy();
    registerHelper.clickContinueRegister();
    registerHelper.failRegisterError();
  });
});
