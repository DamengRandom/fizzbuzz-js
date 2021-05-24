const fizzBuzz = require("./fizzBuzz");

const numbers = 100; // Demo will start from 1 to 100.

for (let i = 1; i <= numbers; i++) {
  console.log(`Valid input demo: ${fizzBuzz(i)}`);
}

console.log(`Invalid input demo: ${fizzBuzz("1")}`);
