# WTF JavaScript Minimalist Tutorial 19. Unit Testing

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Everyone will write buggy code, and it is very important to test whether the program you write can run normally. In JavaScript, there are multiple testing frameworks that can help you perform unit testing (Unit Test), including Jest, Mocha and Chai. In this chapter, we will introduce how to use these tools for unit testing.

## What is unit testing

Unit Testing is a method of software testing. Its basic principle is to decompose the program into independent testable modules (or "units"), and then conduct separate and independent tests on these modules. These modules are generally code organization units such as functions, methods, classes, and modules.

In JavaScript, unit testing usually involves testing a single function or object method to verify that it works correctly. These tests generally check the function's return value, side effects, error throwing, etc. to ensure that the function behaves as expected.

## Why unit testing is needed

Unit testing has many advantages, here are some of them:

1. **Ensure code quality**: Unit testing can help us find defects and problems in the code, thereby improving the quality of the code. Detailed testing of each module ensures that every component works as expected.

2. **Simplified Refactoring**: When we need to modify or refactor the code, if we have a complete set of unit tests, we can quickly check whether the modified code still meets expectations, which greatly reduces the risk of refactoring.

3. **Increase development speed**: Although writing unit tests takes time, in the long run, it can help us develop and maintain code faster. With unit tests, we can make modifications and optimizations with more confidence without worrying about inadvertently breaking existing functionality.

4. **Documented Code**: Good unit tests can serve as a form of documentation, showing how a function or method should be used and what it should return when given input.

Unit testing is a preventive work that can detect and fix problems in advance to prevent problems from appearing in the product. It is an essential part of any project that wants to ensure code quality.

## Jest

Jest is a JavaScript testing framework developed by Facebook that provides a complete set of testing capabilities including assertions, mocking, and coverage information.

To use Jest, first you need to install it via yarn or npm:
```shell
yarn add --dev jest
## or
npm install --save-dev jest
```

Then we write a summation function and save it as `sum.js` for testing:

```javascript
function sum(a, b) {
     return a + b;
   }

module.exports = sum;
```

In the test code, introduce the `sum` function you want to test, and then define a test case to describe the test situation. The `expect` function is used to assert the result, and `toBe` is a comparison function used to compare whether the parameters of `expect` and the parameters of `toBe` are equal. Save the test code as `sum.test.js`

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});
```

Next, we need to modify the `package.json` file and add the following:

```json
{
   "scripts": {
     "test": "jest"
   }
}
```

After adding it, your `package.json` may look like this:
```json
{
     "name": "wtf-javascript",
     "version": "1.0.0",
     "type": "module",
     "scripts": {
         "test": "jest"
     },
     "dependencies": {
         "jest": "^29.5.0"
     }
}
```

Finally, you can run `yarn test` or `npm test` on the command line to start testing, and you will see the message that the test passed:

```shell
> wtf-javascript@1.0.0 test
>jest

  PASS 19_UnitTest/sum.test.js
   ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 0.366 s, estimated 1 s
```

Note that Jest only supports `CommonJS` syntax and does not support `ES` syntax by default, including `import` and `export`.

## Mocha

Mocha is another popular JavaScript testing framework. Its main feature is its high flexibility and it can be used with various assertion libraries (such as Chai) and simulation tools.

First, you need to install the `mocha` package:

```shell
npm install mocha
```

Create a `test` folder in the root directory and save the following code into the `mocha_test.js` file:

```javascript
import assert from 'assert';

function sum(a, b) {
   return a + b;
}

describe('sum', () => {
     it('adds 1 + 2 to equal 3', () => {
       assert(sum(1, 2) === 3);
     });
   });
```

In this example, we use `describe` to group related test cases, and `it` to define a specific test case. Assertions are made through Node.js’ built-in `assert` module.

Next, we need to modify the `package.json` file and add the following:

```json
{
   "scripts": {
     "test": "mocha"
   }
}
```

Then run `npm test` to test:

```shell
> wtf-javascript@1.0.0 test
> mocha



   sum
     ✔ adds 1 + 2 to equal 3


   1 passing (4ms)
```

## Chai

[Chai](https://www.chaijs.com/) is a popular assertion library that can be used with any JavaScript testing framework. Chai provides a series of assertion methods to make your test code more semantic and readable. You can install Chai using npm:

```bash
npm install chai
```

Chai provides three assertion styles: Should, Expect, and Assert. Below we introduce them respectively.

### Should

The Should style binds the assertion function to the prototype of the object under test. Therefore, you can call the should method on any object. Here is an example:

```javascript
const chai = require('chai');
const should = chai.should();

(5).should.be.a('number');
```

### Expect

The Expect style provides a more traditional and powerful way to write assertions. It allows for more descriptive assertions, as well as deeper comparisons. Here is an example:

```javascript
const chai = require('chai');
const expect = chai.expect;

expect(5).to.be.a('number');
```

### Assert

The Assert style is an extension to Node.js's built-in assert module. This style of assertion is more in line with traditional programming concepts and is very suitable for developers who like to use the assert function similar to Node.js. Here is an example:

```javascript
const chai = require('chai');
const assert = chai.assert;

assert.typeOf(5, 'number');
```

## Summary

In this lecture, we introduced unit testing in JavaScript, which can help you ensure the quality and stability of your code. Jest, Mocha and Chai are some testing tools commonly used by JavaScript developers, which can help you write and manage test cases more conveniently.
