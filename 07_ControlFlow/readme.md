# WTF JavaScript 极简教程: 7. 流程控制

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的流程控制语句，你可以用它在你的应用程序中实现大量的交互性功能。

## 条件语句

JavaScript 提供了 `if` 和 `switch` 两种条件语句结构进行条件判断，只有满足预设的条件，才会执行相应的语句。

### if 语句

`if` 语句的基本结构如下：

```js
if (条件) {
  语句
}
```

当 `if` 语句的条件为  `true` 时，则会执行对应的代码块。例如：

```js
let x = 1

if (x > 0) {
  x = x + 1
}

console.log(x) // 2
```

`if` 语句会计算圆括号内的表达式，并将计算结果转换为布尔类型，下列值将会被计算为 `false` ：

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字符串（`""`）

当传递给 `if` 语句所有其他的值，包括所有对象会被计算为 `true`

### else 语句

`if` 代码块后还可以跟随一个 `else` 代码块，如果判断条件不成立，则会执行它内部的代码。

```js
let x = 1

if (x > 1) {
  x = x + 1
} else {
  x = x - 1
}

console.log(x) // 0
```

### else if 语句

有时我们需要进行多次判断，可以通过使用  `else if` 语句实现：

```js
let x = 1

if (x === 0) {
  console.log('x 的值为 0')
} else if (x === 1) {
  console.log('x 的值为 1')
} else if (x === 2) {
  console.log('x 的值为 2')
} else {
  console.log('x 为其它值')
}
```

### switch 语句

`switch` 语句有至少一个  `case` 代码块和一个可选的  `default` 代码块，基本结构如下：

```js
switch (表达式) {
  case value1:
    语句1
    break

  case value2:
    语句2
    break

  default:
    语句3
    break
}
```

`switch` 语句比较表达式的值是否与 `case` 的值**严格相等，**如果相等则执行当前 `case` 下的代码块，直到遇到最靠近的  `break` 语句，否则与下一个 `case` 进行比较，如果没有符合的 case，则执行  `default` 代码块。

```js
let x = 1

switch (x) {
  case 1: // if (x === 1)
    console.log('x 的值为 1')
    break

  case 2: // if (x === 2)
    console.log('x 的值为 2')
    break

  default:
    console.log('x 为其它值')
    break
}

// x 的值为 1
```

上面代码根据变量 `x` 的值，选择执行相应的 `case` 。如果所有 `case` 都不符合，则执行最后的`default` 部分。

需要注意的是，如果 `case` 代码块内部没有 `break` 语句时，程序将不经过任何检查就会继续执行下一个  `case`，而不是跳出`switch` 结构。像下面这样：

```js
let x = 1

switch (x) {
  case 1:
    console.log('x 的值为 1')

  case 2:
    console.log('x 的值为 2')

  default:
    console.log('x 为其它值')
}

// x 的值为 1
// x 的值为 2
// x 为其它值
```

共享同一段代码的几个  `case` 分支可以被分为一组，比如我们希望 `case 1` 和 `case 2` 执行相同的逻辑，我们可以这样做：

```js
let x = 1

switch (x) {
  case 1:
  case 2:
    console.log('x 的值为 1 或 2')

  default:
    console.log('x 为其它值')
}

// x 的值为 1 或 2
```

## 循环语句

循环提供了一种快速和简单的方式去重复执行某些操作，它有多种形式。

### while 循环

`while` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。它的基本结构如下：

```js
while (条件) {
  语句
}
```

例如，下面的例子将循环 3 次，直到 `i` 等于 3 为止：

```js
let i = 0

while (i < 3) {
  console.log(`i 当前的值为：${i}`)
  i++
}

// i 当前的值为：0
// i 当前的值为：1
// i 当前的值为：2
```

下面是一个无限循环的例子，因为循环条件总是为真：

```js
while (true) {
  console.log('Hello, WTF JavaScript')
}
```

### do...while 循环

`do...while`  循环与`while`  循环类似，唯一的不同在于`do...while`  循环会首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。其基本结构如下：

```js
do {
  语句
} while (条件)
```

这种结构的特点是不管条件是否为真，循环体至少执行一次。将前面 `while` 循环中打印 `i` 的例子改成 `do…while` 循环如下：

```js
let i = 0

do {
  console.log(`i 当前的值为：${i}`)
  i++
} while (i < 3)

// i 当前的值为：0
// i 当前的值为：1
// i 当前的值为：2
```

### for 循环

`for` 循环是最常使用的循环形式，它可以指定循环的起点、终点和终止条件。其基本结构如下：

```js
for (初始化表达式; 条件; 增量表达式) {
  语句
}
```

- 初始表达式：初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。只在循环开始时执行一次。
- 条件表达式：每轮循环开始时，都会计算这个条件表达式的值，只有值为真，才继续进行循环。否则，停止循环。
- 增量表达式：每轮循环执行的最后一个操作，通常用来更新循环变量。

下面是循环打印 `i` 的例子：

```js
for (let i = 0; i < 3; i++) {
  console.log(`i 当前的值为：${i}`)
}

// i 当前的值为：0
// i 当前的值为：1
// i 当前的值为：2
```

`for` 循环的任何语句段都可以被省略。如果全部被省略就会导致无限循环：

```js
for (;;) {
  console.log('Hello, WTF JavaScript')
}
```

### break 语句

`break` 语句用于跳出代码块或循环。

```js
let i = 0

while (i < 3) {
  console.log(`i 当前的值为：${i}`)
  i++
  if (i === 2) break
}

// i 当前的值为：0
// i 当前的值为：1
```

上面的例子只会执行两次循环，当 `i` 等于 2 时，就会跳出循环。改写成 `for` 循环如下：

```js
for (let i = 0; i < 3; i++) {
  if (i === 2) break
  console.log(`i 当前的值为：${i}`)
}

// i 当前的值为：0
// i 当前的值为：1
```

### continue 语句

`continue` 语句也用于跳出循环，与 `break` 语句不同的是，它不会中止整个循环，而是立即终止本轮循环，返回循环结构的头部，开始下一轮循环。下面是一个打印奇数的例子：

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue

  console.log(`i 当前的值为：${i}`)
}

// i 当前的值为：1
// i 当前的值为：3
// i 当前的值为：5
// i 当前的值为：7
// i 当前的值为：9
```

### label 语句

一个  `label` 提供了一个让你在程序中其他位置引用它的标识符。其基本结构如下：

```js
label: 语句
```

`label` 的值可以是任何的非保留字的 JavaScript 标识符，语句可以是任意你想要标识的语句（块）。例如，你可以用 `label` 标识一个循环，然后使用  `break` 或者  `continue` 来指出程序是否该停止循环还是继续循环。

**未添加 `label`：**

```js
let n = 0

for (let i = 0; i < 10; i++) {
  // i 循环
  for (let j = 0; j < 10; j++) {
    // j 循环
    if (i === 5 && j === 5) {
      break // i = 5，j = 5 时，会跳出 j 循环，但 i 循环会继续执行
    }
    n++
  }
}

console.log(n) // 95
```

**添加 `label` 后：**

```js
let n = 0

outPoint: for (let i = 0; i < 10; i++) {
  // i 循环
  for (let j = 0; j < 10; j++) {
    // j 循环
    if (i === 5 && j === 5) {
      break outPoint // 在 i = 5，j = 5 时，跳出所有循环，返回到整个 outPoint 下方，继续执行
    }
    n++
  }
}

console.log(n) // 55
```

## 习题

1. 将下面 `switch` 结构的代码写成 `if..else` 结构：

```js
const name = 'JavaScript'

switch (name) {
  case 'Solidity':
    console.log('Hello, WTF Solidity!')
    break

  case 'HTML':
  case 'CSS':
  case 'JavaScript':
    console.log('Hello, WTF Web!')
    break

  default:
    console.log('Hello, WTF Academy!')
}
```

2. 使用任意循环输出 10 以内的偶数。

## 总结

这一讲我们介绍了 JavaScript 的流程控制，包括条件语句和循环语句。条件语句中主要讲解了 `if` 和 `switch` 两种结构。循环语句中主要讲解了 `while` 和 `for` 两种循环结构，以及跳出循环的方式。
