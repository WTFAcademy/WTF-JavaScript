# WTF JavaScript 极简教程 12. 闭包

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

闭包是 JavaScript 中的一种重要概念和关键特性。了解和理解闭包对于编写高效且高质量的 JavaScript 代码十分关键。在这一章，我们将详细讲解闭包的概念，理解它的运作方式以及它在实际开发中的应用。

## 定义

**闭包**指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。只看定义可能有点难懂，现在我们只需要知道这是一个关于**作用域**相关的问题就行。接下来我们会举一个简单的例子来快速理解闭包。

## 应用

闭包的应用非常广泛，其中最常见的用途是创建私有变量和实现数据封装。假设我们有这样一个场景：领导让你统计一个业务函数累计被调用的次数。于是你撸起袖子写出了以下代码

```js
let count = 0; // 用于统计func函数被调用次数

function func() {
  count++;
  // 业务逻辑
  return;
}

console.log(count);
```

正当你胸有成竹地测试时，发现 `count` 的值出现了一些问题，有时候甚至会变少，这时候你就开始排查问题，终于发现了这么一段代码：

```js
var count = 0; // 用于统计xxx的数量

function func2() {
  count = xxx; // 改变 count 的业务代码
}
```

这时候你恍然大悟，原来同事之前就在全局定义了一个 `count` 用于统计其他业务。第一时间你想到了给自己的 `count` 改个名，改成 `count2` 。当然，这样也可以解决眼下的问题，但是，有没有更好的办法呢。这时候，闭包就可以发挥它的作用了，下面是用闭包实现

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

通过以上代码，每次调用 `addCount` 函数都会使 `count` 的值递增1，并且返回最新的 `count` 值。通过以上代码，无需改变变量名，保证了代码可读性的同时解决了业务问题。

## 总结

闭包是 JavaScript 中的一个重要特性，就是函数不在定义的词法作用域内被调用，但是仍然可以访问词法作用域中定义的变量。它的最大用处有两个，一个是前面提到的可以防止变量被污染，另一个就是让这些变量的值始终保持在内存中。理解并熟练掌握闭包对于编写高效且高质量的 JavaScript 代码是非常关键的。在接下来的章节中，我们将继续探讨 JavaScript 中的一些高级主题，包括高级函数、异步编程以及模块化等等。
