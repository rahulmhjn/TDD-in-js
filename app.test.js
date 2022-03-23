/* Importing our function to be tested from the app.js file to our test file */
const StringCalculator = require("./app");
//Our Jest method containing multiple tests that define our objective
describe("StringCalculator", () => {
  let stringCalc;

  beforeEach(() => {
    stringCalc = new StringCalculator();
  });

  //Test 1 - for an empty string it should return 0
  it("for an empty string return 0", () => {
    expect(stringCalc.add("")).toBe(0);
  });
});
