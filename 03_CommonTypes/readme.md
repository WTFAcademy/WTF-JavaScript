# WTF JavaScript 极简教程: 3. 常用类型

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍 JavaScript 中常用的数据类型：数值（*Number*）、字符串（*String*） 和 布尔值（*Boolean*）。

## 1. 数值 Number

数值（Number）是 JavaScript 中最常用的类型，它既可以声明整数，也可以声明浮点数（小数）。

```js
// 声明整数
const int = 10;
// 声明浮点数
const float = 1.1;
```

### 1.1 NaN、Infinity、-Infinity

JavaScript 中有三个特殊数值。

1. `NaN`：表示 “不是数值”，当返回数值的操作失败时会出现，比如 `0 / 0`（表示 0 除以 0）。
  ```js
  const nan = 0/0 // NaN
  ```

2. `Infinity`：无穷大，表示超出上限的结果，比如 `1 / 0`。
  ```js
  const inf = 1/0 // Infinity
  ```

3. `-Infinity`：负无穷大，表示超出下限的结果，比如 `-1 / 0`。
  ```js
  const negInf = -1/0 // -Infinity
  ```

## 2. 字符串 String

JavaScript 中的文本由字符串（String）类型表示。你可以使用双引号（`""`）、单引号（`''`）或反引号（` `` `）标示它。

```js
const str1 = "WTF"; // 双引号（推荐）
const str2 = 'Academy'; // 单引号
const str3 = `JavaScript`; // 反引号（模板字符串）
```

### 2.1 模板字符串

在 ES6 之后的版本中，字符串可以用反引号标示，这样的字符串被称为“模板字符串”（Template Literals）。它很有意思，可以用作字符串插值：在模板字符串使用 `${}` 可以在其中插入变量并解析。

```js
const name = "0xAA";
const age = 18;
const template = `姓名 ${name}，年龄 ${age}。`;
console.log(template); // 姓名 0xAA，年龄 18。
```

改变 `name` 和 `age` 值改变的时候，模板字符串也会作相应改变。

## 3. 布尔值 Boolean

布尔值（Boolean）类型用于表示 *真或假*，*是与非*。它只有两个值：`true` 和 `false`。我们经常在控制结构，比如 `if/else` 语句中使用它，之后章节中会涉及。

```js
const bool1 = true;
const bool2 = false;
```

## 习题

请补全下面的代码，让它正常运行。注意，`nickname` 为字符串， `age` 为数值，`isDev` 为布尔值。你可以在[链接](https://playcode.io/1059248)上找到这段代码。

```js
const nickname = ; // 昵称
const age = ; // 年龄
const isDev = ; // 是否为开发者
const template = `欢迎 ${age} 岁的 ${nickname} 来到 WTF Academy！
你是开发者吗？ ${isDev}`;
console.log(template);
```

## 总结

这一讲，我们介绍了三种最常用的变量类型：数值，字符串，和布尔值。你会在之后的 JavaScript 之旅中不断和他们打交道！
