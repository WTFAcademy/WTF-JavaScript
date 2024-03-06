# WTF JavaScript minimalist tutorial: 3. Common types

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In this lecture, we will introduce the commonly used data types in JavaScript: numeric value (*Number*), string (*String*) and Boolean value (*Boolean*).

## 1. Numeric value Number

Number is the most commonly used type in JavaScript. It can declare both integers and floating point numbers (decimals).

```js
// declare integer
const int = 10;
// Declare floating point number
const float = 1.1;
```

### 1.1 NaN, Infinity, -Infinity

There are three special values ​​in JavaScript.

1. `NaN`: means "not a numeric value", which occurs when an operation that returns a numeric value fails, such as `0 / 0` (meaning 0 divided by 0).
   ```js
   const nan = 0/0 // NaN
   ```

2. `Infinity`: Infinity, indicating a result that exceeds the upper limit, such as `1 / 0`.
   ```js
   const inf = 1/0 // Infinity
   ```

3. `-Infinity`: negative infinity, indicating a result beyond the lower limit, such as `-1 / 0`.
   ```js
   const negInf = -1/0 // -Infinity
   ```

## 2. String String

Text in JavaScript is represented by the String type. You can mark it with double quotes (`""`), single quotes (`''`), or backticks (` `` `).

```js
const str1 = "WTF"; // double quotes (recommended)
const str2 = 'Academy'; // single quote
const str3 = `JavaScript`; // backtick (template string)
```

### 2.1 Template string

In versions after ES6, strings can be marked with backticks, and such strings are called "template literals". It's interesting and can be used for string interpolation: using `${}` in a template string allows variables to be inserted into it and parsed.

```js
const name = "0xAA";
const age = 18;
const template = `Name ${name}, age ${age}. `;
console.log(template); // Name 0xAA, age 18.
```

Changing `name` and `age` When the values ​​​​are changed, the template string will also change accordingly.

## 3. Boolean value Boolean

The Boolean type is used to represent *true or false*, *yes or no*. It has only two values: `true` and `false`. We often use it in control structures such as `if/else` statements, which will be covered in later chapters.

```js
const bool1 = true;
const bool2 = false;
```

## Exercises

Please complete the code below to make it run properly. Note that `nickname` is a string, `age` is a numeric value, and `isDev` is a Boolean value. You can find this code at [link](https://playcode.io/1059248).

```js
const nickname = ; // Nickname
const age = ; // age
const isDev = ; // Whether it is a developer
const template = `Welcome ${age} year old ${nickname} to WTF Academy!
Are you a developer? ${isDev}`;
console.log(template);
```

## Summary

In this lecture, we introduced the three most commonly used variable types: numeric values, strings, and Boolean values. You will continue to deal with them throughout your JavaScript journey!
