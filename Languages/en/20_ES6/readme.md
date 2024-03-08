# WTF JavaScript Minimalist Tutorial 20. ES6

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

ES6 (also known as ECMAScript 2015) is an important update to the JavaScript language, introducing many new features and syntax to make JavaScript more powerful and flexible. In this chapter, we will introduce some of the main features of ES6.

## let and const

Before ES6, only `var` was used to declare variables in JavaScript, but its scoping rules often caused some confusion. ES6 introduces two new declaration methods, `let` and `const`, making the scope of variables clearer.

- `let`: used to declare a block-level variable.
- `const`: used to declare a block-level constant. The value of this constant cannot be reassigned.

```javascript
let x = 10;
if (true) {
   let x = 20; // This x is a new variable
   console.log(x); // Output 20
}
console.log(x); //output 10

const y = 30;
y = 40; // Error, the value of y cannot be changed
```

## Arrow function

Arrow functions are a new function syntax that is more concise and does not bind `this`.

```javascript
const arr = [1, 2, 3, 4];
const squares = arr.map(x => x * x);
console.log(squares); // Output [1, 4, 9, 16]
```

## Template string

Template strings provide a convenient way to embed variables or expressions into strings.

```javascript
let name = 'Alice';
console.log(`Hello, ${name}!`); // Output "Hello, Alice!"
```

## spread operator

In ES6, you can expand an iterable object (such as an array or string) through three dots (...), and extract its elements or character sequences separately for use in function calls, array literals and other scenarios.

```javascript
function addNumbers(x, y, z) {
   return x + y + z;
}

const numbers = [1, 2, 3];

// Use the spread operator to expand the elements in the array as parameters of the function
const result = addNumbers(...numbers);

console.log(result); // Output: 6
```

## Destructuring assignment

Destructuring assignment allows us to assign properties of an array or object to individual variables.

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output 1 2 3

let {x, y} = {x: 10, y: 20};
console.log(x, y); // Output 10 20
```

## Promises and asynchronous functions

ES6 introduced Promises, which provide a better way to handle asynchronous operations. In addition, ES6 also introduces async/await syntax, making asynchronous code more like synchronous code.

```javascript
// Use Promise to encapsulate an asynchronous operation
function fetchUser() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       const user = { id: 1, name: 'John' };
       resolve(user);
     }, 2000);
   });
}

// Use async/await to handle asynchronous tasks
async function getUser() {
   try {
     const user = await fetchUser();
     console.log('User:', user);
   } catch (error) {
     console.log('Error:', error);
   }
}

//Call asynchronous function
getUser();//Output after 2s User: {id: 1, name: 'John'}
```

## Summary

The above are just some of the features of ES6. ES6 also introduces many other new features, such as classes, modules, generators, iterators, Symbol types, new data structures such as Map and Set, and many new arrays and Object methods.

All these features of ES6 make JavaScript a more powerful and modern programming language.
