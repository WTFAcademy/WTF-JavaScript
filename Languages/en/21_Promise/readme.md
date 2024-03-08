# WTF JavaScript Minimalist Tutorial 21. Promise

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

JavaScript is an asynchronous programming language, which means it can perform other tasks while waiting for an operation (such as a network request) to complete. In Lecture 10, we introduced asynchronous programming and `async/await` syntactic sugar. In this lecture, we introduce Promise.

## What is Promise?

Promises are a way to handle asynchronous operations in JavaScript, making asynchronous code easier to understand and manage. It represents an object that may result in the future, which may be a success value, or an error that occurred. Promises are pending until they are resolved (for success) or rejected (for failure).

The following are the three states of Promise:

- **Pending**: Initial state, neither success nor failure.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

Promises are one-shot - they can only move from pending to fulfilled or rejected, and once changed, the state cannot change again. This means that if a Promise is resolved, you cannot resolve or reject it again, and vice versa.

![](./img/21-1.jpeg)

- JavaScript program: I know you are not ready yet (Pending), but can you give me a promise (Promise)?
- 0xAA: Okay, I will give you a promise (Promise). When I am ready, I will call your `resolve` callback function; but if the preparation fails, I will call your `reject` callback function and Tell you why you failed.

## Create Promise

In JavaScript, you can create a new Promise using the `new Promise` constructor, which receives a function as a parameter, which in turn receives two parameters: a `resolve` function and a `reject` function, respectively. To change the state of Promise to Fulfilled or Rejected.

```javascript
const promise = new Promise((resolve, reject) => {
   //Asynchronous operation code
});
```

Inside the executor function, we usually perform some asynchronous operations, such as reading files, making network requests, etc. When the asynchronous operation completes successfully, we call the `resolve` function and pass in the result value. When the operation fails, we call the `reject` function and pass in the error.

For example, here is a simple Promise that uses `setTimeout` to simulate an asynchronous operation:

```javascript
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('WTF Promise resolved');
   }, 1000);
});

//Output 'WTF Promise resolved' after 1 second
promise.then(value => console.log(value));
```

In the above code, we create a new Promise that will be resolved after 1 second and return the string `'Promise resolved''`. We use the `.then` method to register a callback function that will be called when the Promise resolves and receive the resolved value.

## Use Promise

The advantage of Promise is that you can use chained `.then` calls to organize and manage your asynchronous code. The `.then` method accepts two optional parameters: a callback function to handle the parsed value, and a callback function to handle the rejection reason (i.e. error).

```js
promise.then(
   value => {
     // Process the parsed value
   },
   error => {
     // Handle errors
   }
);
```

The `.then` method returns a new Promise, which allows you to chain multiple `.then` calls together.

```javascript
promise
   .then(value => {
     console.log(value);
     return value + 'WTF';
   })
   .then(newValue => console.log(newValue));
```

The `.catch` method can be used to catch errors. It is similar to the `.then` method, both return a new Promise. You can chain them together and if one of the Promises is rejected, `catch` will handle it:

```js
promise
   .then(value => {
     throw new Error('WTF Something went wrong');
   })
   .catch(error => console.error(error));
```

In this example, we first handle the parsed value in the `then` method and then handle the error in the `catch` method. This is a common error handling pattern.

The `finally` method will be executed regardless of the final state of the `Promise` object. The callback function of the `finally` method does not accept any parameters, which means there is no way to know whether the previous `Promise` status is `resolved` or `rejected`. This shows that the operations in the `finally` method should be state-independent and not dependent on the execution result of `Promise`.

```js
const p = new Promise((resolve, reject) => {
   resolve('Hello, WTF JavaScript!')
})

p.then((value) => {
   console.log(value)
}).finally(() => {
   console.log('finally')
})

// Hello, WTF JavaScript!
// finally
```

## Promise API

The Promise API provides some convenience methods for handling Promises:

- `Promise.resolve(value)`: Returns a Promise resolved with the given value. If the value is a Promise, the returned Promise will have the same state and value.
- `Promise.reject(reason)`: Returns a Promise that is rejected with the given reason.
- `Promise.all(iterable)`: Returns a new Promise that resolves after all Promises in iterable have resolved, or is rejected after any Promise in iterable has been rejected.
- `Promise.race(iterable)`: Returns a new Promise with the same resolved value or rejection reason after any Promise in iterable resolves or rejects.
- `Promise.allSettled(iterable)`: Sometimes we want to wait until a set of asynchronous operations are completed, regardless of whether each operation is successful or failed, before proceeding to the next operation. However, the `Promise.all` method is only suitable when all asynchronous operations succeed. If one operation fails, the requirement cannot be met. At this time we need to use the `Promise.allSettled` method.
- `Promise.any`: Similar to `Promise.race`, the difference is that as long as one `Promise` instance becomes `fulfilled` state, the wrapped instance will become `fulfilled` state; all `Promise` instances become `rejected` state, the package instance will become `rejected` state.


## Advanced Promise Mode

When dealing with complex asynchronous operations, we may need to use some more advanced Promise patterns.

- **Chained Promise**: Both the `then` and `catch` methods return a new Promise, which allows us to create a Promise chain to handle multiple asynchronous operations in sequence.

```javascript
fetch('https://api.example.com/data') // Return a Promise
   .then(response => response.json()) // Return a new Promise
   .then(data => console.log(data)) // Return a new Promise
   .catch(error => console.error(error)); // Return a new Promise
```

- **Parallel Promise**: Using the `Promise.all` or `Promise.race` method, we can execute multiple Promise in parallel and resolve the final Promise according to their resolution order or speed.

```javascript
Promise.all([
   fetch('https://api.example.com/data1'),
   fetch('https://api.example.com/data2')
])
   .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
   .then(([data1, data2]) => {
     console.log('Data 1:', data1);
     console.log('Data 2:', data2);
   })
   .catch(error => console.error(error));
```

In this example, we fetch data from two APIs in parallel and then process both responses at the same time.

## Summary

In this lecture, we introduced an important concept in JavaScript, Promise, which facilitates us to handle asynchronous operations. By deeply understanding and using Promises, you can write cleaner, easier-to-maintain asynchronous code.
