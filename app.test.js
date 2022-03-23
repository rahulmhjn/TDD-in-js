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
  it("for a single number in string it should return the same number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  //Test 3 - for two numbers it should return the sum
  it("for two numbers it should return the sum", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  //Test 4 - should return the sum of an unknown amount of numbers
  it("should return the sum of unknown amount of numbers", () => {
    expect(calc.add("133,36,1,3,5")).toBe(178);
    expect(calc.add("1,2,90,100")).toBe(193);
  });

  //Test 5 - allow \n delimiter between numbers
  it("allow \n delimiter between numbers", function () {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  //Test 6 - does not allow negative numbers
  it("does not like negative numbers", () => {
    expect(calc.add("-41,50")).toThrow("negatives not allowed -41");
  });
});
