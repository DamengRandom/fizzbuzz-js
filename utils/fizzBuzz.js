const {
  BUZZ,
  FIZZ,
  FIZZBUZZ,
  INVALID_VALUE,
} = require("../constants/fizzBuzz");

function fizzBuzz(number) {
  // Avoid using else based on `Guard Clause` rule in JS 
  if (typeof number !== 'number') return INVALID_VALUE;
  if (number % 15 === 0) return FIZZBUZZ;
  if (number % 3 === 0) return FIZZ;
  if (number % 5 === 0) return BUZZ;

  return number;
}

module.exports = fizzBuzz;
