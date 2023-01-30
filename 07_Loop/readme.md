# WTF JavaScript 极简教程: 7. 循环语句

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的循环语句，我们经常需要重复执行一些操作，比如将列表中的商品逐个输出，循环提供了一种快速和简单的方式去重复执行某些操作，它有多种形式。

## while 循环

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

## do...while 循环

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

## for 循环

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

## break 语句

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

## continue 语句

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

## label 语句

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

使用任意循环输出 10 以内的偶数。

```jsx live
function TestJS07(props) {
  
}
```

## 总结

这一讲我们介绍了 JavaScript 的循环语句。主要讲解了主要讲解了 `while` 和 `for` 两种循环结构，以及跳出循环的方式。
