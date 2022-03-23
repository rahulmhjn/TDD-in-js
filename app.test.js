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

  //Test 2 - for a single number in string it should return the same number
  it("for a single number in string it should return the same number", function () {
    expect(calculator.add("1")).toBe(1);
  });

  //Test 3 - for two numbers it should return the sum
  it("for two numbers it should return the sum", function () {
    expect(calculator.add("1,2")).toBe(3);
  });
});
