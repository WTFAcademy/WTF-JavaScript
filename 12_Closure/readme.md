# WTF JavaScript 极简教程 12. 闭包

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

闭包是 JavaScript 中的一种重要概念和关键特性。了解和理解闭包对于编写高效且高质量的 JavaScript 代码十分关键。在这一章，我们将详细讲解闭包的概念，理解它的运作方式以及它在实际开发中的应用。

## 闭包的定义

闭包是 JavaScript 中的一种特性，指的是一个函数可以访问并操作它自己被定义时的作用域里的变量，即使这个函数当前正在另一个作用域中执行。

## 闭包的创建

在 JavaScript 中，闭包的创建并不需要进行任何特殊的操作，任何函数都有可能创建闭包。通常情况下，如果一个函数在其定义的作用域之外被调用，而这个函数引用了其定义作用域中的变量，那么这个函数就会形成一个闭包。

例如，以下代码就创建了一个闭包：

```javascript
function outerFunction() {
  let variableInOuterFunction = 'Hello, World!';
  
  function innerFunction() {
    console.log(variableInOuterFunction);
  }
  
  return innerFunction;
}

let closure = outerFunction();
closure();  // 输出 'Hello, World!'
```

## 闭包的应用

闭包的应用非常广泛，其中最常见的用途是创建私有变量和实现数据封装。

例如，我们可以利用闭包创建一个计数器：

```javascript
function createCounter() {
  let count = 0;
  
  return function() {
    return ++count;
  };
}

let counter = createCounter();

console.log(counter());  // 输出 '1'
console.log(counter());  // 输出 '2'
```

在这个例子中，`counter` 是一个闭包，它可以访问并操作 `createCounter` 函数中的 `count` 变量。因为 `count` 变量无法从 `createCounter` 函数的外部访问，所以它就像一个私有变量。

总结一下，闭包是 JavaScript 中的一个重要特性，理解并熟练掌握闭包对于编写高效且高质量的 JavaScript 代码是非常关键的。在接下来的章节中，我们将继续探讨 JavaScript 中的一些高级主题，包括高级函数、异步编程以及模块化等等。