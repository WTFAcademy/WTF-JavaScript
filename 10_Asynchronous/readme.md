# WTF JavaScript 极简教程: 10. 异步

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的异步，我们知道在 JavaScript 这种单线程事件循环模型中，浏览器是按照我们书写代码的顺序一行一行地执行程序。但是如果执行到一个耗时很长的任务，后面的任务就会被阻塞，会拖延整个程序的执行。而异步编程技术可以使你的程序在执行一个可能长期运行的任务的同时继续对其他事件做出反应而不必等待任务完成。下面我们会介绍异步编程几种方式。

## 回调函数

回调函数曾经是 JavaScript 中实现异步函数的主要方式，也是最基本的方式，一个常见的例子是定时器：

```js
function callback() {
  console.log('Hello, WTF JavaScript!')
}

setTimeout(callback, 1000)

// Hello, WTF JavaScript! (1 秒后输出)
```

程序运行等待 1 秒后会执行 `callback` 函数输出 “Hello, WTF JavaScript!”

假如我们需要多次等待来执行不同的任务，就会写出这样的结构：

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

// Hello, WTF JavaScript! (1 秒后输出)
// Hello, WTF HTML! (2 秒后输出)
// Hello, WTF CSS! (3 秒后输出)
```

上面的代码中，我们需要等待 1 秒后执行第一个任务，然后等待 3 秒后执行第二个任务，最后等待 2 秒后执行第三个任务。这样的代码结构很难维护，而且很容易出错。

## Promise

`Promise` 异步编程的一种解决方案，比传统的解决方案回调函数和事件更合理和强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 `Promise` 对象。

`Promise` 对象有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。`Promise` 对象的状态改变，只有两种可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。

### 基本用法

`Promise` 对象的状态改变，就会触发 then 方法绑定的回调函数。

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

p.then((value) => {
  console.log(value)
})

// Hello, WTF JavaScript! (1 秒后输出)
```

`Promise` 的创建是同步的，创建后会立即执行。

```js
const p = new Promise((resolve, reject) => {
  console.log('Promise 创建了')
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

p.then((value) => {
  console.log(value)
})

// Promise 创建了
// Hello, WTF JavaScript! (1 秒后输出)
```

上面的代码中，`Promise` 创建后立即执行。而 then 方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。

`then` 方法可以接受两个回调函数作为参数。第一个回调函数是 `Promise` 对象的状态变为 `resolved` 时调用，第二个回调函数是 P`Promise` 对象的状态变为 `rejected` 时调用。其中，第二个函数是可选的。这两个函数都接受 `Promise` 对象传出的值作为参数。

```js
const p = new Promise((resolve, reject) => {
  reject('发生错误！')
})

p.then(
  (value) => {
    console.log(value)
  },
  (error) => {
    console.log(error)
  }
)

// 发生错误！
```

上面的代码中，`Promise` 对象的状态变为 `rejected`，导致第二个回调函数被调用，而第一个回调函数没有被调用。如果 `Promise` 状态已经变成 resolved，再抛出错误是无效的。

```js
const p = new Promise((resolve, reject) => {
  resolve('Hello, WTF JavaScript!')
  throw new Error('发生错误！')
})

p.then(
  (value) => {
    console.log(value)
  },
  (error) => {
    console.log(error)
  }
)

// Hello, WTF JavaScript!
```

`catch` 方法是 `then` 方法的别名，用于指定发生错误时的回调函数。

```js
const p = new Promise((resolve, reject) => {
  reject('发生错误！')
})

p.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
})

// 发生错误！
```

`finally` 方法用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。`finally` 方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是 `resolved` 还是 `rejected`。这表明，`finally` 方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。

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

### 链式调用

`Promise` 对象的 `then` 方法，返回的是一个新的 `Promise` 对象，因此可以采用链式写法。我们来看下面使用网络请求获取 WTF Solidity 教程第一课标题的例子：

```js
const baseURL = 'https://api.wtf.academy/courses/e1faa656-8c53-45f4-bb4f-950db92bee60'

fetch(`${baseURL}/lessons`)
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    const id = res.data.list[0].lesson_id
    return fetch(`${baseURL}/user_lessons/${id}`)
  })
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    const title = res.data.lesson.lesson_title
    console.log(title) // HelloWeb3 (三行代码)
  })
```

### Promise API

在 `Promise` 类中，有 6 种静态方法。下面我们分别介绍它们的使用场景。

#### Promise.all

`Promise.all` 方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。只有所有 `Promise` 实例的状态都变成 fulfilled，或者其中有一个变为 rejected，才会调用 `Promise.all` 方法后面的回调函数。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF HTML!')
  }, 3000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF CSS!')
  }, 2000)
})

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res)
})

// ['Hello, WTF JavaScript!', 'Hello, WTF HTML!', 'Hello, WTF CSS!'] (3 秒后输出)
```

> 注意，结果数组中元素的顺序与其在传递给 `Promise.all` 的数组中顺序相同。

#### Promise.allSettled

有时我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，`Promise.all` 方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。这时我们需要使用 `Promise.allSettled` 方法。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF HTML!')
  }, 3000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello, WTF CSS!')
  }, 2000)
})

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res)
})

// [
//   { status: 'fulfilled', value: 'Hello, WTF JavaScript!' },
//   { status: 'fulfilled', value: 'Hello, WTF HTML!' },
//   { status: '`rejected`', reason: 'Hello, WTF CSS!' })
// ] (3 秒后输出)
```

#### Promise.race

与 `Promise.all` 类似，区别在于只要其中一个 `Promise` 实例改变状态，就会将率先改变状态的 Promise 实例的返回值传递给`Promise.all` 方法后面的回调函数。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF HTML!')
  }, 3000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF CSS!')
  }, 2000)
})

Promise.race([p1, p2, p3]).then((res) => {
  console.log(res)
})

// Hello, WTF JavaScript! (1 秒后输出)
```

#### Promise.any

与 `Promise.race` 类似，区别在于只要有一个 `Promise` 实例变成 `fulfilled` 状态，包装实例就会变成 `fulfilled` 状态；所有 `Promise` 实例都变成 `rejected` 状态，包装实例才会变成 `rejected` 状态。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF JavaScript!')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, WTF HTML!')
  }, 3000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello, WTF CSS!')
  }, 2000)
})

Promise.any([p1, p2, p3]).then((res) => {
  console.log(res)
})

// Hello, WTF JavaScript! (1 秒后输出)

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello, WTF JavaScript!')
  }, 1000)
})

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello, WTF HTML!')
  }, 3000)
})

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello, WTF CSS!')
  }, 2000)
})

Promise.any([p4, p5, p6]).then((res) => {
  console.log(res)
})

// AggregateError: All promises were rejected
```

#### Promise.resolve

`Promise.resolve` 用来创建一个 `resolved` 的 `Promise`

```js
Promise.resolve('Hello, WTF JavaScript!')
```

等同于：

```js
new Promise((resolve, reject) => resolve('Hello, WTF JavaScript!'))
```

#### Promise.reject

`Promise.reject` 用来创建一个 `rejected` 的 `Promise`

```js
Promise.reject(new Error('发生错误！'))
```

等同于：

```js
new Promise((resolve, reject) => reject(new Error('发生错误！')))
```

### async/await

async/await 是 `Promise` 的语法糖，可以让编写 promise 非常易于理解和使用。

#### async 函数

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

#### await

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

#### 错误处理

如果 `await` 后面的异步操作出错，那么等同于 `async` 函数返回的 `Promise` 对象被 `reject`。一般我们将 `await` 命令放在 `try...catch` 代码块中来捕获错误。

```js
async function hello() {
  try {
    const value = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Hello, WTF JavaScript!')
      }, 1000)
    })
    console.log(value)
  } catch (err) {
    console.log(`错误：${err}`)
  }
}

hello()

// 错误：Hello, WTF JavaScript! (1 秒后输出)
```

## 习题

使用 async/await 重写前面 `Promise` 链式调用获取 WTF Solidity 教程第一课标题的例子。

```jsx live
function TestJS10(props) {
  
}
```

## 总结

这一讲我们介绍了 JavaScript 的异步编程方式，从回调函数到 Promise 再到 async/await。Promise 是现代 JavaScript 异步编程的基础。它避免了深度嵌套回调，使表达和理解异步操作序列变得更加容易。async/await 使得从一系列连续的异步函数调用中建立一个操作变得更加容易，避免了创建显式 Promise 链，并允许你像编写异步代码那样编写同步代码。
