---
title: 5. Function
---

# WTF JavaScript Minimalist Tutorial: 5. Functions

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https: //discord.gg/5akcruXrsk) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In this lecture, we will introduce the function `function` in JavaScript, including the syntax for defining functions, function references, and function parameters.

## Function declaration

Function is one of the basic components of JavaScript. It packages a series of instructions to form a code block, which is convenient for reuse and makes the code more systematic. You can understand the search engine as a function. Every time you enter the search content and After you click the search button, it will run a very complex logic and return you the search results.

The biggest feature of a function is that it has parameters and return values:

```js
function foo(input){
     return input;
}
// foo(5) will return 5
```

In the above code, we declare a function named `foo` using the `function` keyword. It has a parameter `input`, which can be entered when calling the function. The function body is wrapped in curly braces `{}` and carries the logic of the function. The logic of this function is very simple. We use the `return` keyword to define a return value, which will end the function and return the `input` intact to the caller.

`foo()` seems a bit useless. Let's enrich the function body so that it can complete more functions.
```js
function bar(input){
     const output = input * 2;
     return output;
}
// bar(5) will return 10
```

In the `bar()` function above, we calculate `input * x`, then assign it to the `output` variable, and finally return it.

Functions can carry multiple parameters. In the `sum()` function below, we implement addition, add the parameters `x` and `y`, and return them. We do not use a variable as the return value here, but an expression; when running, the program will first execute the expression and then return the result.

```js
function sum(x, y){
     return x + y;
}
// sum(5, 6) will return 11
```

## Function call

You can call functions using the `function name(parameter)` pattern, for example:
```js
sum(5, 6); // returns 11
```

You can also call another function within a function:

```js
function sumCall(x, y){
     const output = sum(x, y)
     return output;
}
```
> `Tips`: If you only use `function name`, the function object will be returned instead of the return value, so you must add parentheses and parameters when calling the function.

## Function expressions and arrow functions

Below we introduce two other methods of defining functions.

1. Function expression: It is almost the same as the above declaration. The only difference is that the function name `sum1` is mentioned in front as a variable, and there is an additional assignment operation. It's the same to use. For more information, see [MDN Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function#%E8%AF%AD%E6%B3%95)

     ```js
     const sum1 = function(x, y){
         return x + y;
     }
     ```

2. Arrow function: The ES6 version adds the use of arrow syntax `=>` to define functions, which is more concise than the other two methods. See the [MDN Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for more information.

     ```js
     const sum2 = (x, y) => {
         return x + y;
     }
     ```
## Exercises

Modify the `prod()` function below so that it returns the product of the two arguments `x` and `y`.

```jsx live
function TestJS05(props) {
   // The function to be modified, prod, calculates the product of x and y
   function prod(x, y){
     return ;
   }

   // should return 30
   return prod(5, 6);
}
```

## Summary

In this lecture, we introduced functions in JavaScript, including the syntax for defining functions and how to call functions. Functions are your best friends in programming, and we will use them again and again in the following tutorials.
