# WTF JavaScript 极简教程: 10. 异步

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的异步，着重讲 `async/await` 语法。

## 异步编程

![](./img/10-1.png)

JavaScript 是单线程的编程语言，浏览器按照我们代码的顺序一行一行地执行程序。如果执行到一个耗时很长的任务，后面的任务就会被阻塞，拖延整个程序的执行。异步编程技术允许我们执行一个长时间任务时，程序不需要进行等待，而是继续执行后面的代码，直到任务完成之后再回来通知。这大大提高了程序的效率，尤其是对于输入输出密集的程序，比如文件读取，数据库查询，网络访问。

### 回调函数

在 JavaScript 中，函数也是对象，可以作为参数传入另一个函数，这也被称为回调函数。它曾经是 JavaScript 中实现异步函数的主要方式。下面是一个经典的例子，我们定义了一个 `callback()` 函数，并作为参数传给了 `setTimeout()` 定时器函数：

```js
function callback() {
  console.log('Hello, JavaScript!');
}

setTimeout(callback, 1000);
console.log('hello');
// hello
// Hello, JavaScript! (1 秒后输出)
```

上面的程序会先输出 `hello`，然后再等待 1 秒后执行 `callback` 函数，输出`“Hello, JavaScript!”`，即使 `setTimeout` 函数在 `console.log("hello")` 之前。对 `setTimeout` 更详细的介绍请阅读[MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)。

但如果异步任务数量很多时，这种方案容易出错，下面是使用回调函数维护 3 个异步任务的例子：

```js
setTimeout(() => {
  console.log('Hello, WTF JavaScript!');
  setTimeout(() => {
    console.log('Hello, WTF HTML!');
    setTimeout(() => {
      console.log('Hello, WTF CSS!');
    }, 1000)
  }, 1000)
}, 1000)
```

这种代码极难维护，也被称为 “回调地狱” （callback hell），现已被 `Promise` 方案取代。

### Promise

![](./img/10-2.png)

`Promise` （承诺）是异步编程的现代解决方案，比回调函数方案更强大。它由社区最早提出和实现，ES6 将其写进语言标准并统一用法，原生提供了 `Promise` 对象。

`Promise` 对象有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。初始状态为 `pending`，最终状态由异步操作的结果决定。`Promise` 对象的状态改变，只有两种可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。下面我们用 `Promise` 重写第一个示例:

```js
// 定义 promise 实例
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, JavaScript Promise!');
  }, 1000)
})
// 运行 Promise 实例
promise.then((value) => {
  console.log(value);
})
console.log('hello Promise');
// hello Promise
// Hello, JavaScript Promise! (1 秒后输出)
```

由于 `Promise` 比较复杂，我们在后面的教程中再详细讲解。这一讲我们着重介绍在它之上建立的 `async/await` 语法。

## async/await

async/await 是 `Promise` 的语法糖，让异步编程更易于理解和使用。

### async 函数

我们可以在一个函数前面加上 `async` 关键字 ，将它变为异步函数，它的返回值会被自动包装为一个 `Promise`。与普通函数不同，异步函数不会阻塞程序的运行，让 JavaScript 引擎同时处理其他任务：执行其他脚本，处理事件等。

```js
async function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, JavaScript async!');
    }, 1000)
  })
}
```

### await 关键字

`await` 关键字**只能在** `async` 函数内工作，一般情况下，`await` 后跟随一个 `Promise` 对象，作用是让 JavaScript 引擎等待直到 `Promise` 完成并返回结果。

```js
async function helloAwait() {
  const value = await hello();
  console.log(value);
  console.log('hello await');
}
helloAwait()
// Hello, JavaScript async! (1 秒后输出)
// hello await
```

注意，上面的代码会等待 1 秒后输出 `Hello async`，然后才是 `hello await`。

### async/await 例子

![](./img/10-3.png)

下面，我们演示如何使用 `async/await` 语法来读取非常流行的无聊猿（BAYC）NFT的元数据。

1. NFT 元数据是构成 NFT 内容的一组数据，通常以 [JSON](https://zh.wikipedia.org/wiki/JSON) 格式保存在网络上。比如下面 `url` 中的 [ipfs](https://gateway.ipfscdn.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1) 链接保存着 `id = 1` 的BAYC元数据，包括小图片网址和属性（嘴、头发、衣服等特征）。

  ```js
  const url = `https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1`;
  // 数据形式
  // {"image":"ipfs://QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi","attributes":[{"trait_type":"Mouth","value":"Grin"},{"trait_type":"Clothes","value":"Vietnam Jacket"},{"trait_type":"Background","value":"Orange"},{"trait_type":"Eyes","value":"Blue Beams"},{"trait_type":"Fur","value":"Robot"}]}
  ```

2. 你可以使用 `fetch()` 函数来进行 HTTP 访问，获取网络数据。它会返回一个包装成 `Promise` 的 HTTP 响应，因此你需要使用 `await` 关键字来获取结果 `response`。然后，你需要用 `json()` 方法获取 JSON 的内容，也就是元数据。

  ```js
  const response = await fetch(url);
  const BaycMetadata = await response.json();
  ```

3. 将上面的代码组合成一个 `async` 函数 `getBaycMetadata`:

```js
// async/await 示例
async function getBaycMetadata(){
  const url = `https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1`;
  const response = await fetch(url);
  const BaycMetadata = await response.json();
  console.log(BaycMetadata);
}
getBaycMetadata()
// image: "ipfs://QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi"
// attributes...
```

## 习题

基于这一讲的例子，写一个根据用户输入的 tokenId（1~10000）来获取相应的无聊猿的元数据。

> 提示: 示例中url的最后一位的代表 tokenId，可以使用 `{$tokenId}` 进行替换。

```jsx live
function getBaycMetadataById(tokenId) {
  
}
```

## 总结

这一讲我们介绍了 JavaScript 的异步编程，包括回调函数，Promise，以及重点讲的 async/await，并且利用它获取了无聊猿NFT的元数据。Promise 是现代 JavaScript 异步编程的基础。它避免了深度嵌套回调，使表达和理解异步操作序列变得更加容易。async/await 使得从一系列连续的异步函数调用中建立一个操作变得更加容易，避免了创建显式 Promise 链，并允许你像编写异步代码那样编写同步代码。
