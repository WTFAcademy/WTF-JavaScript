# WTF JavaScript 极简教程: 4. 运算符

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍 JavaScript 中常用的运算符：算数运算符、逻辑运算符。

## 1. 算数运算符

算数运算符是和计算相关的运算符， 我们把算数运算符分为以下几类：

- 加法`+`
- 减法`-`
- 乘法`*`
- 除法`/`
- 取余`%`
- 求幂`**`
- 递增`++`
- 递减`--`

前三个都非常简单，我们介绍后五个运算符。

### 1.1 除法`/`

如果你之前学过一些别的编程语言，例如Java、C、C++等，你会知道在很多编程语言中，除法`/`一般都是作整除运算。但是在JavaScript中，除法`/`就是指数学上的除。如果你需要整除运算，则需要调用`Math.floor()`进行向下取整。

```js
5 / 4; // 1.25
Math.floor(5 / 4); // 1
8 / 9; //0.8888888888888888
Math.floor(8 / 9); // 0
```

### 1.2 取余`%`

`a % b`结果是`a`整除`b`的余数。

```js
5 % 4; // 1，5除以4的余数
8 % 9; // 8，8除以9的余数
```

### 1.3 求幂`**`

`a ** b`结果是`a`的`b`次幂。

```js
2 ** 2; // 2² = 4 
2 ** 3; // 2³ = 8
```

### 1.4 递增和递减`++` `--`

递增和递减运算符的原理都类似，我们以递增运算符作为讲解。递增运算符有两个形式：

- 前缀形式（++i）：运算符在变量的前面，先递增，后执行语句。
- 后缀形式（i++）：运算符在变量的后面，先执行语句，后递增。

```js
let num1 = 1, num2 = 1;
console.log(++num1, num1) // 2 2
console.log(num2++, num2) // 1 2
```

## 2. 逻辑运算符

JavaScript中有四个逻辑运算符：

- 或`||`
- 与`&&`
- 非`!`
- 空值合并`??`

### 2.1 或`||`

或运算是指当参与运算的任何一个参数为`true`时，返回的结果就为`true`，否则就返回`false`。

我们可以把或运算理解为“寻找第一个真值，如果没有找到返回最后一个值”的运算。

```js
true || true; // true
false || true; // true
true || false; // true
false || false; // false

// 理解为寻找第一个真值
null || 1; // 1（1是第一个真值）
null || true || 1; // true（true是第一个真值）
null || undefined || 0; // 0（都是假值，返回最后一个值）
```

### 2.2 与`&&`

与运算是指当参与运算的任何一个参数为`false`时，返回的结果就为`false`，否则就返回`true`。

我们可以把与运算理解为“寻找第一个假值，如果没有找到返回最后一个值”的运算。

```js
true && true; // true
false && true; // false
true && false; // false
false && false; // false

// 理解为寻找第一个假值
1 && 2 && null && 3; // null（找到假值，返回假值）
1 && 2 && 3; // 3（没有找到假值，返回最后一个值）
```

### 2.3 非`!`

非运算符是把操作数转换为布尔类型，并返回相反的值。非`!`运算符在逻辑运算符中优先级最高，比或`||`运算符和与`&&`运算符优先级高。

```js
!true; // false
!null; // true
!!null; // false
!undefined; // true
```

### 2.4 空值合并`??`

对于`a ?? b`的结果为：

- 如果`a`的值不是`null`或`undefined`，则结果为`a`
- 如果`a`的值是`null`或`undefined`，则结果为`b`

`a ?? b`的结果可以等价于三目运算符：

`(a !== null && a !== undefined) ? a : b`

我们可以通过空值合并运算符计算出找到第一个不是`null`和`undefined`的值。

```js
let course;
course ?? 'WTF'; // WTF（course值为undefined，返回后一个值）

let name = '0xAA'
name ?? 'WTF'; // 0xAA（name值存在，返回第一个值）
```

## 习题

请思考下面代码每一行的输出，并将结果写下来。你可以在链接【注：文档修改要跳转，此处没跳转】上找到这段代码，运行它，并验证你的结果是否正确。

```js
console.log(1 + (2 ** 3) / 2) // 5

let x = 10
console.log(x++ % 2, x) // 0 11

console.log(null || 1 && 2 || 3) // 2
// null || 1 返回1 （找真，有真返回1）
// 1 && 2 返回2 （找假，没有假返回最后一个）
// 2 || 3 返回2 （找真，找到第一个真就返回）
```

扩展题目：请判断下面代码输出的结果，并思考JavaScript在做浮点运算时需要注意什么，为什么solidity不支持浮点类型？

```js
console.log(0.1 + 0.2 === 0.3) // false

// 修改：
(0.1 * 10 + 0.2 * 10) / 10   // 0.3
```

## 总结

这一讲，我们介绍了基本的运算符：算数运算符，逻辑运算符。你会在之后的 JavaScript 之旅中不断和他们打交道！

