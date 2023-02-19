# WTF JavaScript 极简教程: 10. 异步

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的异步，着重讲 `aync/await` 语法。

## 异步编程

![](./img/10-1.png)

JavaScript 是单线程的编程语言，浏览器按照我们代码的顺序一行一行地执行程序。如果执行到一个耗时很长的任务，后面的任务就会被阻塞，拖延整个程序的执行。异步编程技术可以使你的程序在执行一个可能长期运行的任务的同时，继续对其他事件做出反应，不必等待任务完成。

### 回调函数

在 JavaScript 中，函数也是对象，可以作为参数传入另一个函数。这种用法也被称为回调函数，它曾经是 JavaScript 中实现异步函数的主要方式。下面是一个经典的例子，我们定义了一个 `callback()` 函数，并作为参数传给了 `setTimeout()` 定时器函数：

```js
function callback() {
  console.log('Hello, WTF JavaScript!')
}

setTimeout(callback, 1000)
// Hello, WTF JavaScript! (1 秒后输出)
```

上面的程序会在等待 1 秒后执行 `callback` 函数，输出`“Hello, WTF JavaScript!”`。对 `setTimeout` 更详细的介绍请阅读[MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)。

但是如果异步任务数量很多时，这种方案容易出错，现已被 `Promise` 代替。下面是使用回调函数维护 3 个异步任务的例子：

```js
setTimeout(() => {
  console.log('Hello, WTF JavaScript!')
  setTimeout(() => {
    console.log('Hello, WTF HTML!')
    setTimeout(() => {
      console.log('Hello, WTF CSS!')
    }, 1000)
  }, 1000)
}, 1000)
```

### Promise

![](./img/10-2.png)

`Promise` 是异步编程的现代解决方案，比回调函数方案更强大。它由社区最早提出和实现，ES6 将其写进语言标准并统一用法，原生提供了 `Promise` 对象。

`Promise` 对象有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。`Promise` 对象的状态改变，只有两种可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。

由于 `Promise` 比较复杂，这一讲我们着重介绍在它之上建立的 `async/await` 语法，使用起来更简单。

## async/await

async/await 是 `Promise` 的语法糖（功能不变，但是更方便程序员使用的语法），让异步编程更易于理解和使用。

### async 函数

`async` 函数是使用 `async` 关键字声明的函数，一个函数前面如果加上 `async` 关键字 ，那么该函数就会返回一个 `Promise`

```js
async function hello() {
  return 'Hello, WTF JavaScript!'
}

console.log(hello()) // Promise {<fulfilled>: 'Hello, WTF JavaScript!'}
```

如果一个 `async` 函数的返回值看起来不是 `Promise`，那么它将会被隐式地包装在一个 `Promise` 中，所以上面的例子等同于：

```js
function hello() {
  return Promise.resolve('Hello, WTF JavaScript!')
}

console.log(hello()) // Promise {<fulfilled>: 'Hello, WTF JavaScript!'}
```

### await

正常情况下，`await` 命令后面是一个 `Promise` 对象，返回该对象的结果。如果不是 `Promise` 对象，就直接返回对应的值。

```js
async function hello() {
  const value = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })
  console.log(value)
}

hello()

// Hello, WTF JavaScript! (1 秒后输出)
```



## 习题

使用 async/await 重写前面 `Promise` 链式调用获取 WTF Solidity 教程第一课标题的例子。

```jsx live
function TestJS10(props) {
  
}
```

## 总结

这一讲我们介绍了 JavaScript 的异步编程方式，从回调函数到 Promise 再到 async/await。Promise 是现代 JavaScript 异步编程的基础。它避免了深度嵌套回调，使表达和理解异步操作序列变得更加容易。async/await 使得从一系列连续的异步函数调用中建立一个操作变得更加容易，避免了创建显式 Promise 链，并允许你像编写异步代码那样编写同步代码。
