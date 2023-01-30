# WTF JavaScript 极简教程: 6. 条件语句

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy\_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-JavaScript](https://github.com/WTFAcademy/WTF-JavaScript)

---

这一讲，我们介绍 JavaScript 中的条件语句，它可以让我们做到根据不同条件执行不同的操作。

## if 语句

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

## else 语句

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

## else if 语句

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

## switch 语句

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

## 习题

将下面 `switch` 结构的代码写成 `if..else` 结构：

```jsx live
function TestJS06(props) {
  const name = 'JavaScript'

  switch (name) {
    case 'Solidity':
      return 'Hello, WTF Solidity!'

    case 'HTML':
    case 'CSS':
    case 'JavaScript':
      return 'Hello, WTF Web!'

    default:
      return 'Hello, WTF Academy!'
  }
}
```

## 总结

这一讲我们介绍了 JavaScript 的条件语句。JavaScript 提供了 `if` 和 `switch` 两种条件语句结构进行条件判断，只有满足预设的条件，才会执行相应的语句。
