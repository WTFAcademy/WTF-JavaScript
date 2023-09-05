# WTF JavaScript 极简教程: 4. 运算符

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

运算符可以对单个或多个变量（操作数）进行某些操作并产生结果。这一讲，我们将介绍 JavaScript 中常用的运算符，包括算数运算符，比较运算符，和逻辑运算符。

## 1. 算数运算符

算数运算符用于操作数之间的数学运算，有以下几种（`x` 和 `y` 为数值变量）：
| 运算符 | 描述     | 例子           | 
|--------|----------|----------------|
| +      | 加法     | x + y          | 
| -      | 减法     | x - y          | 
| *      | 乘法     | x * y          | 
| /      | 除法     | x / y          | 
| %      | 取余     | x % y          | 
| **     | 求幂     | x ** y         | 
| ++     | 递增运算 | num1++ 或 ++num1 | 
| --     | 递减运算 | num2-- 或 --num2 | 

```js
let num1 = 1 + 1; // 2
let num2 = 1 - 1; // 0
let num3 = 2 * 3; // 6
let num4 = 6 / 2; // 3
let num5 = 7 % 2; // 1
let num6 = 2 ** 3; // 8
num1++ // 3
num2--; // -1
```
前三个运算符非常简单，我们主要介绍后五个。

### 1.1 除法

在很多编程语言中，例如 Java、C、C++ 等，除法 `/` 一般都是作整除运算。但是在 JavaScript 中，除法 `/` 就是指数学上的除。如果你要做整除运算，需要调用 `Math.floor()` 函数进行向下取整。

```js
5 / 4; // 1.25
Math.floor(5 / 4); // 1
```

### 1.2 取余

`x % y` 结果是 `x` 整除 `y` 的余数。

```js
5 % 4; // 1
```

### 1.3 求幂

`x % y` 结果是 `a` 的 `y` 次方。

```js
2 ** 3; // 2³ = 8
```

### 1.4 递增和递减

递增和递减运算符的原理都类似，我们以递增运算符作为讲解。递增运算符有两个形式：

- 前缀形式（++i）：运算符在变量的前面，先递增，后执行语句。
- 后缀形式（i++）：运算符在变量的后面，先执行语句，后递增。

```js
let x = 1;
let y = x++; // y 赋值 1，然后 x 递增为 2
let z = ++x; // x 递增为 3，然后 z 赋值为 3
console.log(x, y, z) // 3, 1, 3
```

## 2. 比较运算符

比较运算符用于确定操作数之间的差异，然后返回一个布尔值。主要有以下几种：


| 操作符 | 描述          |
|-------|---------------|
| ==    | 相等          |
| !=    | 不相等        |
| >     | 大于          |
| <     | 小于          |
| >=    | 大于等于      |
| <=    | 小于等于      |
| ===   | 严格相等（推荐） |
| !==   | 严格不相等（推荐） |

```js
let x = 1;
let y = 2;
let bool1 = (x == y); // false
let bool2 = (x != y); // true
let bool3 = (x > y); // false
let bool4 = (x < y); // true
let bool5 = (x >= y); // flase
let bool6 = (x <= y); // true
let bool7 = (x === y); // flase
let bool8 = (x !== y); // true
```

## 严格不相等

JavaScript 是弱类型语言，开发者在声明变量的时候不需要声明变量类型，而是由 JavaScript 引擎在编译时隐式完成。这会带来方便，但也带来一些坑。比如 `==` 和 `!=` 操作符在比较时，会先对变量进行强制类型转换，然后再做比较：例如 `"5" == 5` 会返回 `true`。但是强制类型转换的规则很复杂，比如 `"" == "0"` 返回 `false`，但是 `0 == ""` 返回 `true`。

因此实际使用时，推荐用 `===` 和 `!==` 进行相等和不相等的判断:

- 严格相等 `===`：只有变量的值和类型均相等时，才算严格相等。
- 严格不相等 `!==`：不同类型的变量是不相等的，例如 `"5"` 和 `5` 不相等。

```js
// 相等/不相等，强制类型转换
"5" == 5; // true
"5" != 5; // false
// 严格相等/严格不相等，不进行类型转换
"5" === 5; // false
"5" !== 5; // true
```

## 3. 逻辑运算符

逻辑运算符常用于布尔值之间，主要有以下 `3` 个 (`a` 和 `b` 为布尔值)：

- 或 `||`: `a || b`
- 与 `&&`: `a && b`
- 非 `!` : `!a`

### 3.1 或 `||`

或运算是指当参与运算的任何一个操作数为 `true` 时，返回的结果就为 `true`，否则就返回 `false`。即只要有一个操作数是对的，整个表达式就是对的。

```js
true || true; // true
false || true; // true
true || false; // true
false || false; // false
```

### 3.2 与 `&&`

与运算是指当参与运算的任何一个操作数为`false`时，返回的结果就为`false`，否则就返回`true`。即所有操作数均是对的，整个表达式才是对的。

```js
true && true; // true
false && true; // false
true && false; // false
false && false; // false
```

### 3.3 非 `!`

非运算符是对操作数取反，将 `true` 变为 `false`，`false` 变为 `true`。
```js
!true; // false
!false; // true
```

## 习题

给出下面 `6` 个变量的值。你可以在[链接](https://playcode.io/1061414)上找到这段代码。

```js
let a = 69;
let b = a++ + a;
let c = a * 2;
let d = (b === c);
let e = true;
let f = e && d;

console.log(f);
```

## 总结

这一讲，我们介绍了 JavaScript 中最常用的运算符：算数运算符，比较运算符，逻辑运算符。大家可能对递增/递减（`++`/`--`）和严格等于（`===`）比较陌生，不用担心，我们将在之后的教程中反复练习。

