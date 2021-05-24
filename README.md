# Fizz Buzz TDD Demo

This is a quick demo for showing the `FizzBuzz` functionality with `TDD` implementation.

### How to run the code locally

```js
// Step 1: Install npm packages
npm install
// Step 2: Run Test
npm run test
// Step 3: Run Demo code
npm run demo
```

### Explanations of development process

1. I have utilized JavaScript as coding language and Jest testing framework to complete this task. Meanwhile, I did a simple jest setup (created: `jest.config.json`) for my codebase in order to run test successfully.


2. I have started with writing unit test file (`fizzBuzz.spec.js`) first, created 5 test cases:
  - when to show Error Message
  - when to show Number
  - when to show Fizz
  - when to show Buzz
  - when to show FizzBuzz

- When I run the unit test, I also followed the Triple A standard (`Arrange`, `Act`, `Assert`)


3. <strong>Then, I run `npm run test`, the output should be all failed by default, because I haven't added the actual code logic yet.</strong> 

- Purpose of TDD: we design tests cases before start writing the actual code logics, we need to ensure we cover enough test cases in order to handle the potential edge cases later


4. And then, I come back and created file called `fizzBuzz.js` to write the actual code logic.


5. I created an `index.js` file for demo the values output from 1 to 100. (I thought this way would be able to show the output values clearly)


6. During development process, I though there a re a few constants values I may consider to put as one constant file in order for later re-use purpose. Thus, I created a `fizzBuzz.js` file under `constants` folder and move all the constants inside of this file (reusable consideration)


7. Done (Thanks for reading, cheers ~)
