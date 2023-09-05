# WTF JavaScript 极简教程 12. 闭包

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

闭包是 JavaScript 中的一种重要概念和关键特性。了解和理解闭包对于编写高效且高质量的 JavaScript 代码十分关键。在这一章，我们将详细讲解闭包的概念，理解它的运作方式以及它在实际开发中的应用。

## 什么是闭包

在 JavaScript 中，闭包是一个函数和其所在的作用域的组合。这个环境包含了这个闭包创建时所能访问的所有局部变量。换句话说，闭包可以让你从内部函数访问到外部函数作用域。

在 JavaScript 中，函数是一级公民，这意味着函数可以作为参数传递，也可以作为返回值返回。当函数在其声明的作用域之外执行时，会形成闭包。

举个例子：

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

在上述代码中，`innerFunction` 保持对 `outerFunction` 的 `outerVariable` 的引用，即使 `innerFunction` 在其声明的环境之外执行。这种情况就形成了一个闭包。

## 闭包的规则和行为

闭包的行为和规则主要受 JavaScript 的作用域和变量生命周期影响。下面是几点需要注意的地方：

1. 闭包有权访问外部函数的变量和参数，但是并不会复制这些数据，而是通过引用的方式使用它们。也就是说，闭包可以修改这些变量的值。

2. 闭包拥有外部函数的所有变量，直到外部函数结束执行，这些变量才会被垃圾收集器回收。

3. 闭包可以形成在循环中。例如，如果你在一个循环中创建函数，并且这个函数访问了循环的计数器变量，那么每个函数都会创建一个新的闭包，并分别保存各自的计数器值。

4. 由于闭包可以访问外部函数的变量，因此它们也可以用于实现私有变量和方法，这在构造函数和对象方法中特别有用。

使用闭包时需要注意，由于闭包可以访问外部函数的变量，且这些变量不会被垃圾回收，如果不恰当地使用闭包，可能会导致内存泄露。

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

闭包是 JavaScript 中的一个重要特性，就是函数不在定义的词法作用域内被调用，但是仍然可以访问词法作用域中定义的变量。它的最大用处有两个，一个是前面提到的可以防止变量被污染，另一个就是让这些变量的值始终保持在内存中。理解并熟练掌握闭包对于编写高效且高质量的 JavaScript 代码是非常关键的。