# WTF JavaScript 极简教程: 2. 声明变量

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

编程最基本的技术之一就是使用变量（variable）来表示值，就像用 `0xAA` 来指代一个人。在 JavaScript 程序中使用变量之前必须先声明这个变量。这一讲，我们将介绍声明变量的三个关键字 `let`，`const`，和 `var`，以及它们之间的区别。

## `let`

在现代 JavaScript 中（ES6 版本之后），变量通过 `let` 关键字声明。

```js
// 1. 先声明 year 变量，再给它赋值 2023
let year;
year = 2023;
// 2. 声明 name 变量的同时给它赋值 "0xAA" 
let name = "0xAA";
// 3. 声明 newName 变量，同时将变量 name 的值 “0xAA” 赋给它
let newName = name;
```

在上面的代码中，我们先声明了一个名为 `year` 的变量，并给它赋值 `2023`；之后声明另一个名为 `name` 变量的同时给它赋值 `"0xAA"`。最后，我们声明了一个名为 `newName` 的变量，并将变量 `name` 的值（`"0xAA"`）赋给它。

> 代码中以 `//` 开头的行是注释，用于提高代码的可读性，不会被执行。

## `const`

在声明常量（constant，值不能改变的变量）是要用 `const` 关键字，声明时必须给它赋值。常量在第一次赋值后不能改变，不然会报错。

```javascript
// 声明 age 常量，并赋值 18
const age = 18;
// 尝试改变常量的值时会报错 TypeError: Assignment to constant variable
age = 20; 
```

## `var`（不推荐）

在 ES6 之前的 JavaScript 中，没有 `let` 和 `const` 关键字，声明变量只能用 `var` 关键字。`var` 和 `let` 使用上类似，但是会造成全局对象的污染，是个过时的关键字，不推荐使用。

```javascript
// 声明 variable 变量并赋值 "hello"
var variable = "hello"
```

更多关于 `var` 的细节请参考 [MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)。

## 使用规范

ES6 之后新增的 `let` 和 `const` 关键字很好地解决了过时的 `var` 在作用域和语义上存在的诸多问题，也形成了开发时的使用规范。

1. 能用 `const` 就用 `const`：使用 `const` 声明变量可以确保一些重要的值不会被改变，同时也能迅速发现一些因意外赋值导致的不合理行为。

2. 不能用 `const` 就用 `let`，不要使用`var`：当开发者提前知道某些变量未来需要被修改时就使用 `let`，这样可以确保变量拥有明确的作用域和声明位置。

## 习题

下面的代码是否会报错？如果会，请修改它，让它正确运行。你可以在[链接](https://playcode.io/1058216)上找到这段代码。

```js
const fruit = 'apple'
fruit = 'orange'
console.log(fruit)
```

## 总结

这一讲我们介绍了声明变量的三个关键字 `let`，`const`，和 `var`，并讲解了它们之间的区别和用法。在开发中，能用 `const` 就用 `const`，不能用 `const` 就用`let`，不要使用 `var`。
