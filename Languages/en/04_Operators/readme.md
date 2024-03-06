# WTF JavaScript minimalist tutorial: 4. Operators

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Operators can perform certain operations on single or multiple variables (operands) and produce results. In this lecture, we will introduce commonly used operators in JavaScript, including arithmetic operators, comparison operators, and logical operators.

## 1. Arithmetic operators

Arithmetic operators are used for mathematical operations between operands, and there are the following types (`x` and `y` are numerical variables):

| Operator | Description | Example |
|--------|----------|----------------|
| + | addition | x + y |
| - | Subtraction | x - y |
| * | Multiplication | x * y |
| / | Division | x / y |
| % | Remainder | x % y |
| ** | Exponentiation | x ** y |
| ++ | Increment operation | num1++ or ++num1 |
| -- | Decrement operation | num2-- or --num2 |

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

The first three operators are very simple, and we mainly introduce the last five.

### 1.1 Division

In many programming languages, such as Java, C, C++, etc., division `/` is generally used for integer division operations. But in JavaScript, division `/` means mathematical division. If you want to do integer division, you need to call the `Math.floor()` function to round down.

```js
5 / 4; // 1.25
Math.floor(5 / 4); // 1
```

### 1.2 Remainder

The result of `x % y` is the remainder of `x` when it divides `y`.

```js
5 % 4; // 1
```

### 1.3 Exponentiation

The result of `x ** y` is `x` raised to the power of `y`.

```js
2 ** 3; // 2³ = 8
```

### 1.4 Increasing and Decreasing

The principles of the increment and decrement operators are similar. We use the increment operator as an explanation. The increment operator has two forms:

- Prefix form (++i): The operator is in front of the variable, increments first, and then executes the statement.
- Suffix form (i++): The operator is after the variable, the statement is executed first, and then incremented.

```js
let x = 1;
let y = x++; // y is assigned the value 1, then x is incremented to 2
let z = ++x; // x is incremented to 3, then z is assigned the value 3
console.log(x, y, z) // 3, 1, 3
```

## 2. Comparison operators

Comparison operators are used to determine the difference between operands and then return a Boolean value. There are mainly the following types:

| Operator | Description |
|-------|---------------|
| == | equal |
| != | Not equal |
| > | greater than |
| < | less than |
| >= | Greater than or equal to |
| <= | Less than or equal to |
| === | Strict equality (recommended) |
| !== | Strictly not equal (recommended) |

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

## Strictly not equal

JavaScript is a weakly typed language. Developers do not need to declare variable types when declaring variables. Instead, the JavaScript engine does this implicitly during compilation. This brings convenience, but also some pitfalls. For example, when comparing the `==` and `!=` operators, the variables will be forced to type conversion first, and then compared: for example, `"5" == 5` will return `true`. But the rules for coercion are complicated. For example, `"" == "0"` returns `false`, but `0 == ""` returns `true`.

Therefore, in actual use, it is recommended to use `===` and `!==` to judge equality and inequality:

- Strict equality `===`: Strict equality is considered only when the values ​​and types of variables are equal.
- Strict inequality `!==`: Variables of different types are not equal, for example, `"5"` and `5` are not equal.

```js
//Equal/unequal, forced type conversion
"5" == 5; // true
"5" != 5; // false
// Strict equality/strict inequality, no type conversion
"5" === 5; // false
"5" !== 5; // true
```

## 3. Logical operators

Logical operators are commonly used between Boolean values, and there are mainly the following `3` (`a` and `b` are Boolean values):

- or `||`: `a || b`
- with `&&`: `a && b`
- not `!` : `!a`

### 3.1 or `||`

The OR operation means that when any of the operands participating in the operation is `true`, the returned result is `true`, otherwise it returns `false`. That is, as long as one operand is correct, the entire expression is correct.

```js
true || true; // true
false || true; // true
true || false; // true
false || false; // false
```

### 3.2 With `&&`

The AND operation means that when any of the operands involved in the operation is `false`, the returned result is `false`, otherwise it returns `true`. That is, all operands are correct, and the entire expression is correct.

```js
true && true; // true
false && true; // false
true && false; // false
false && false; // false
```

### 3.3 Not `!`

The NOT operator inverts the operands, turning `true` into `false` and `false` into `true`.
```js
!true; // false
!false; // true
```

## Exercises

Give the values ​​of the following `6` variables. You can find this code at [link](https://playcode.io/1061414).

```js
let a = 69;
let b = a++ + a;
let c = a * 2;
let d = (b === c);
let e = true;
let f = e && d;

console.log(f);
```

## Summary

In this lecture, we introduced the most commonly used operators in JavaScript: arithmetic operators, comparison operators, and logical operators. You may be unfamiliar with increment/decrement (`++`/`--`) and strict equal (`===`). Don’t worry, we will practice it repeatedly in the following tutorials.
