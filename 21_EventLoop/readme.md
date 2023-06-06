# WTF JavaScript 极简教程 21. 事件循环

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---


在 JavaScript 中，为了管理异步操作和回调函数，有一个重要的概念叫做事件循环（Event Loop）。事件循环是 JavaScript 运行时环境（如浏览器和 Node.js）用来处理异步操作的一种机制。在这一章中，我们将探讨事件循环的两个重要组成部分：微任务和宏任务。

## 宏任务（Macrotask）

宏任务也称为任务，是由 JavaScript 运行时环境直接创建的任务，包括：

- 整个 script （主线程代码）
- setTimeout 和 setInterval 的回调
- setImmediate (Node.js 环境)

运行时环境会把每一个宏任务都放入一个队列，称为宏任务队列。每次事件循环，运行时环境都会从宏任务队列中取出一个任务来执行。

## 微任务（Microtask）

微任务是在当前宏任务结束后立即执行的任务。这意味着微任务的执行时机总是在当前宏任务结束和下一个宏任务开始之间。微任务包括：

- Promise 的 then 和 catch 的回调
- process.nextTick（Node.js 环境）
- MutationObserver (浏览器环境）的回调

与宏任务一样，所有的微任务也会被放入一个队列，称为微任务队列。不同的是，每次事件循环，运行时环境会在当前宏任务结束后，执行完所有的微任务。

## 事件循环和任务队列

事件循环的工作原理可以简单概括为以下步骤：

1. 从宏任务队列中取出一个任务来执行。
2. 执行完这个任务后，执行所有的微任务。
3. 当微任务队列清空后，进入下一次事件循环，执行下一个宏任务。

这意味着微任务的优先级高于宏任务。当微任务队列中有任务时，它们会在下一个宏任务之前全部执行完。

下面是一个示例，展示了宏任务和微任务的执行顺序：

```javascript
console.log('script start');  // 宏任务

setTimeout(function() {
  console.log('setTimeout');  // 宏任务
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');  // 微任务
}).then(function() {
  console.log('promise2');  // 微任务
});

console.log('script end');  // 宏任务
```

上面的代码的输出将会是：

```
script start
script end
promise1
promise2
setTimeout
```

解释：
1. 首先，代码执行到`console.log('script start')`，输出 "script start"。
2. 然后，遇到`setTimeout`，将其回调函数推入宏任务队列中。
3. 接着，遇到`Promise.resolve().then()`，将第一个`then`回调函数推入微任务队列中。
4. 继续执行，遇到第二个`then`回调函数，将其推入微任务队列中。
5. 执行到`console.log('script end')`，输出 "script end"。
6. 当前宏任务（script主线程代码）执行完毕，事件循环开始处理微任务队列，按顺序执行微任务。
7. 执行第一个微任务，输出 "promise1"。
8. 执行第二个微任务，输出 "promise2"。
9. 微任务执行完毕，事件循环开始处理下一个宏任务。
10. 从宏任务队列中取出`setTimeout`的回调函数，输出 "setTimeout"。

总的来说，理解微任务和宏任务以及它们在事件循环中的角色，是理解 JavaScript 异步编程的关键。
