# WTF JavaScript 极简教程: 3. Common Value Types

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍 JavaScript 中常用的数据类型：*Number*、*String* 和 *Boolean*。

## 1. Number

> 在 JavaScript 中 Number 是一个比较有意思的类型。它既可以声明整数，也可以声明浮点数（小数）。

### 声明 Number 类型变量

```js
let int1 = 10; // 10进制整数
let int2 = 010; // 8进制整数
let int3 = 0x10; // 16进制整数
let float1 = 1.1; // 声明浮点数
let float2 = .1; // 有效，但不推荐
let float3 = 1.1e3; // 科学计数法，结果为1100
```

### 值的范围

Number 类型可表示数的范围非常大，一般情况下不需要担心

```js
console.log(Number.MIN_VALUE); // 可表示最小值，5e-324
console.log(Number.MAX_VALUE); // 可表示最大值，1.7976931348623157e+308
```

**需要注意的是，由于 Number 设计原因，并不适合直接用于高精度计算，在 JavaScript 中有一个库 `BigNumber.js` 专门用于解决这一问题。**

### NaN、Infinity、-Infinity

JavaScript 中有如下三个特殊的数值

1. NaN：表示 “不是数值”，当返回数值的操作失败时会出现，比如 `0 / 0`，可以使用 `isNaN` 函数验证。**注意**：涉及到 NaN的操作始终返回 NaN，其次，每个 NaN 均不相等（NaN != NaN）

2. Infinity：无穷大，表示超出上限的结果，比如 `1 / 0`

3. -Infinity：无穷小，表示超出下限的结果，比如 `-1 / 0`

### 其他类型转换为数值

有三个函数可以其他类型转换为数值：Number()、parseInt()和parseFloat()，Number()可以用于任何数据类型，后面两个函数主要用于将字符串转为数值。

1. Number()函数主要基于如下规则，[在线调试](https://playcode.io/1053488)
   
   - 布尔值，true 转换为1，false 转换为0
   
   - 数值，直接返回
   
   - null，返回 0
   
   - undefined，返回 NaN
   
   - 字符串
     
     - 转换为十进制数值，需要注意的是无法处理八进制，Number('0123') 结果为 123
     
     - 如果字符串包含有效的浮点数格式，则转换为对应的浮点数
     
     - 如果字符串包含十六进制，则转换为十进制返回
     
     - 如果是空字符串，返回 0
     
     - 无效字符会返回 NaN
   
   - 对象，调用 valueOf() 方法，并按照上述规则执行转换。如果转换结果是 NaN，则会调用 toString() 方法，再按照上述规则执行转换。

2. parseInt() 将字符串转为整数时，优先考虑使用此函数，此函数更专注于字符串中是否包含整数，[在线调试](https://playcode.io/1053488?v=2)
   
   - 字符串最前面的空格会被忽略，从第一个非空格字符开始转换，直到字符串末尾或碰到非数值字符
   
   - 如果第一个字符不是数值字符、加号或减号，会立即返回 NaN
   
   - 空字符串会返回 NaN，这点有别于 Number()
   
   - 可以识别十六进制、八进制和十进制
   
   - 可以传入第二个参数用于指定底数（进制数）

3. parseFloat() 与 parseInt() 类似，用于将字符串转换为浮点数，[在线调试](https://playcode.io/1053488?v=3)
   
   - 解析到字符串末尾或无效浮点数字符为止，无效浮点数字符包括第二个出现的小数点

### 常用方法

- Number.isInteger()：判断参数是否为整数

- Math.ceil()：舍去小数向上进位

- Math.floor()：舍去小数向下进位

- Math.round()：四舍五入

- Math.random()：生成 **[ 0, 1 )** 之间的随机数

- toFixed()：限制小数位数，四舍五入，返回值为字符串类型

## 2. String

> String（字符串）类型表示零或多个16位 Unicode 字符序列。可以使用双引号（""）、单引号（''）或反引号（``）标示。

### 声明 String 类型变量

```js
let str1 = "wtf";
let str2 = 'wtf';
let str3 = `wtf`;
```

### 其他类型转换为字符串

有三种方式可以将其他类型转换为字符串，toString()、String() 和 加号操作符

- toString()：可以将数值、布尔值、对象和 *字符串* 转换为字符串。[在线调试](https://playcode.io/1053488?v=4)

- String()：如果需要转换的值有可能是 null 或者 undefined 时，可以使用 String()。[在线调试](https://playcode.io/1053488?v=5)

- 用加号操作符给一个值加上一个空字符串也可以将其转换为字符串：`1 + '' = '1'`

### 模板字符串（使用反引号标示）

模板字符串是 JavaScript 中一种很有意思的字符串声明方式，它不仅可以跨行定义字符串，还可以进行字符串插值。

```js
let str = `123
456
789`;
console.log(str); 
// 结果会保留换行，得到以下字符
// 123
// 456
// 789
```

*由于模板字符串的这个特性，所以在使用时一定要留意其中的空格和换行符，避免出现问题。*

**模板字符串插值**：这是模板字符串最常用的一个特性，使用 `${}` 可以在其中插入变量并解析。

```js
let num1 = 666;
let str1 = "wtf";
let str2 = `模板字符${num1}串插值${str1}`;
console.log(str2); // 模板字符666串插值wtf
```

所有插入的值都会使用 toString() **强制转换**为字符串

## 3. Boolean

> Boolean 类型用于表示 *真和假* ，有两个字面量值：true 和 false（注意是小写）。

### 其他类型转 Boolean

| 数据类型      | 转换结果为 true  | 转换结果为 false |
| --------- | ----------- | ----------- |
| String    | 非空字符串       | ""（空字符串）    |
| Number    | 非零数值（包括无穷值） | 0、NaN       |
| Object    | 任意非 null 对象 | null        |
| Undefined | N/A（不存在）    | undefined   |

理解以上转换非常重要，因为 JavaScript 在执行流程控制语句时，会自动将其他类型值转换为 Boolean 值，例如下面代码运行后会输出 'true'

```js
let wtf = "WTF School";
if (wtf) {
  console.log("true");
} else {
  console.log("false");
}
```
