const fizzBuzz = require("../utils/fizzBuzz");
const {
  BUZZ,
  FIZZ,
  FIZZBUZZ,
  INVALID_VALUE,
} = require("../constants/fizzBuzz");

describe("Test fizzBuzz function logics", () => {
  it("should return invalid value error message when input value is '123'", () => {
    // Assert
    expect(fizzBuzz('123')).toEqual(INVALID_VALUE);
  });

  it("should return value FizzBuzz when input value is 15", () => {
    // Assert
    expect(fizzBuzz(15)).toEqual(FIZZBUZZ);
  });

  it("should return value 1 when input value is 1", () => {
    // Assert
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("should return value Fizz when input value is 3", () => {
    // Assert
    expect(fizzBuzz(3)).toEqual(FIZZ);
  });

  it("should return value Buzz when input value is 5", () => {
    // Assert
    expect(fizzBuzz(5)).toEqual(BUZZ);
  });
});
