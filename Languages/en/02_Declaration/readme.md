# WTF JavaScript minimalist tutorial: 2. Declare variables

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https: //discord.gg/5akcruXrsk) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

One of the most basic techniques in programming is to use variables to represent values, like using `0xAA` to refer to a person. A variable must be declared before it can be used in a JavaScript program. In this lecture, we will introduce the three keywords `let`, `const`, and `var` for declaring variables, and the differences between them.

## `let`

In modern JavaScript (post-ES6 versions), variables are declared with the `let` keyword.

```js
// 1. Declare the year variable first, and then assign it the value 2023
let year;
year = 2023;
// 2. Declare the name variable and assign it the value "0xAA"
let name = "0xAA";
// 3. Declare the newName variable and assign the value "0xAA" of the variable name to it.
let newName = name;
```

In the above code, we first declare a variable named `year` and assign it the value `2023`; then declare another variable named `name` and assign it the value `"0xAA"`. Finally, we declare a variable called `newName` and assign the value of variable `name` (`"0xAA"`) to it.

> Lines starting with `//` in the code are comments, used to improve the readability of the code and will not be executed.

## `const`

When declaring a constant (a variable whose value cannot be changed), you need to use the `const` keyword, and you must assign a value to it when declaring. Constants cannot be changed after the first assignment, otherwise an error will be reported. But you can modify the elements in the array. Modifying the elements does not mean reallocating constants.

```javascript
// Declare the age constant and assign it a value of 18
const age = 18;
// Attempting to change the value of a constant will result in an error TypeError: Assignment to constant variable
age = 20;
```

## `var` (not recommended)

In JavaScript before ES6, there were no `let` and `const` keywords, and variables could only be declared using the `var` keyword. `var` is similar to `let` in use, but it will cause pollution to the global object. It is an outdated keyword and is not recommended.

```javascript
// Declare variable variable and assign value "hello"
var variable = "hello"
```

For more details about `var`, please refer to [MDN Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var).

## Terms of Use

The newly added `let` and `const` keywords after ES6 have solved many problems in the scope and semantics of the outdated `var`, and have also formed usage specifications during development.

1. Use `const` if you can use `const`: Using `const` to declare variables can ensure that some important values ​​will not be changed, and can also quickly detect some unreasonable behaviors caused by accidental assignments.

2. If you cannot use `const`, use `let` instead of `var`: When developers know in advance that certain variables need to be modified in the future, use `let` to ensure that the variables have clear scope and declaration location. .

## Exercises

Will the following code report an error? If so, please modify it so that it works correctly. You can find this code at [link](https://playcode.io/1058216).

```js
const fruit = 'apple'
fruit = 'orange'
console.log(fruit)
```

## Summary

In this lecture, we introduced the three keywords `let`, `const`, and `var` for declaring variables, and explained their differences and usage. In development, if you can use `const`, use `const`, if `const` cannot be used, use `let`, and do not use `var`.
