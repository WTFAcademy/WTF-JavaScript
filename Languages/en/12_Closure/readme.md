# WTF JavaScript Minimalist Tutorial 12. Closure

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Closures are an important concept and key feature in JavaScript. Knowing and understanding closures is key to writing efficient and high-quality JavaScript code. In this chapter, we will explain the concept of closure in detail, understand how it works and its application in practical development.

## What is closure

In JavaScript, a closure is a combination of a function and its containing scope. This environment contains all local variables that the closure has access to when it is created. In other words, closures allow you to access the scope of an outer function from an inner function.

In JavaScript, functions are first-class citizens, which means that functions can be passed as arguments and returned as return values. A closure is formed when a function executes outside its declared scope.

for example:

```javascript
function outerFunction(outerVariable) {
   return function innerFunction(innerVariable){
     console.log('outerVariable:', outerVariable);
     console.log('innerVariable:', innerVariable);
   }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // logs: "outerVariable: outside" and "innerVariable: inside"
```

In the above code, `innerFunction` keeps a reference to `outerFunction`'s `outerVariable` even if `innerFunction` is executed outside the environment in which it is declared. This situation forms a closure.

## Rules and behavior of closures

The behavior and rules of closures are primarily affected by JavaScript's scope and variable lifecycle. Here are a few points to note:

1. The closure has access to the variables and parameters of the external function, but it does not copy these data, but uses them by reference. That is, closures can modify the values ​​of these variables.

2. The closure owns all variables of the external function. These variables will not be recycled by the garbage collector until the external function ends execution.

3. Closures can be formed in loops. For example, if you create functions within a loop, and the function accesses the loop's counter variable, then each function will create a new closure and hold its own counter value.

4. Since closures can access variables of external functions, they can also be used to implement private variables and methods, which is particularly useful in constructors and object methods.

You need to pay attention when using closures. Since closures can access variables of external functions and these variables will not be garbage collected, if closures are used inappropriately, memory leaks may occur.

## Application

Closures are used in a wide range of applications, with the most common uses being to create private variables and implement data encapsulation. Suppose we have such a scenario: the leader asks you to count the cumulative number of times a business function has been called. So you rolled up your sleeves and wrote the following code

```js
let count = 0; // Used to count the number of times the func function is called

function func() {
   count++;
   // Business logic
   return;
}

console.log(count);
```

Just when you are confidently testing, you find that there are some problems with the value of `count`, and sometimes it even becomes less. At this time, you start to troubleshoot the problem, and finally find this piece of code:

```js
var count = 0; // Used to count the number of xxx

function func2() {
   count = xxx; // Change the business code of count
}
```

At this time, you suddenly realize that your colleague has previously defined a `count` globally to count other businesses. The first time you think of renaming your `count` to `count2`. Of course, this can also solve the current problem, but is there a better way? At this time, closure can play its role. The following is implemented using closure

```js
function func2() {
   let count = 0;
   return function () {
     count++;
     return count;
   };
}

let addCount = func2();

console.log(addCount()); // 1
console.log(addCount()); // 2
```

Through the above code, each call to the `addCount` function will increment the value of `count` by 1 and return the latest `count` value. Through the above code, there is no need to change the variable name, which ensures the readability of the code and solves the business problem at the same time.

## Summary

Closure is an important feature in JavaScript, that is, a function is not called within the defined lexical scope, but the variables defined in the lexical scope can still be accessed. It has two greatest uses. One is to prevent variables from being contaminated as mentioned earlier, and the other is to keep the values ​​of these variables in memory. Understanding and mastering closures is critical to writing efficient and high-quality JavaScript code.
