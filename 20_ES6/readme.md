# WTF JavaScript 极简教程 20. ES6

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

ES6（也被称为 ECMAScript 2015）是 JavaScript 语言的一个重要的更新，引入了许多新的特性和语法，使得 JavaScript 更加强大和灵活。在这一章中，我们将介绍一些 ES6 的主要特性。

## let 和 const

在 ES6 之前，JavaScript 中只有 `var` 用来声明变量，但它的作用域规则经常会引发一些混淆。ES6 引入了 `let` 和 `const` 两种新的声明方式，使得变量的作用域更加清晰。

- `let`：用来声明一个块级作用域的变量。
- `const`：用来声明一个块级作用域的常量，这个常量的值不能被重新赋值。

```javascript
let x = 10;
if (true) {
  let x = 20;  // 这个 x 是一个新的变量
  console.log(x);  // 输出 20
}
console.log(x);  // 输出 10

const y = 30;
y = 40;  // 报错，y 的值不能被改变
```

## 箭头函数

箭头函数是一种新的函数语法，它更简洁，而且不绑定 `this`。

```javascript
const arr = [1, 2, 3, 4];
const squares = arr.map(x => x * x);
console.log(squares);  // 输出 [1, 4, 9, 16]
```

## 模板字符串

模板字符串提供了一种方便的方式来嵌入变量或表达式到字符串中。

```javascript
let name = 'Alice';
console.log(`Hello, ${name}!`);  // 输出 "Hello, Alice!"
```

## 扩展运算符

ES6中可以通过三个点（...）将一个可迭代对象（如数组或字符串）展开，将其元素或字符序列分别提取出来，用于函数调用、数组字面量等场景。

```javascript
function addNumbers(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// 使用扩展运算符将数组中的元素展开作为函数的参数
const result = addNumbers(...numbers);

console.log(result); // 输出: 6
```

## 解构赋值

解构赋值允许我们将数组或对象的属性赋值给单独的变量。

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);  // 输出 1 2 3

let {x, y} = {x: 10, y: 20};
console.log(x, y);  // 输出 10 20
```

## Promises 和异步函数

ES6 引入了 Promises，它提供了一种更好的方式来处理异步操作。此外，ES6 也引入了 async/await 语法，使得异步代码更像同步代码。

```javascript
// 使用Promise封装一个异步操作
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: 'John' };
      resolve(user);
    }, 2000);
  });
}

// 使用async/await来处理异步任务
async function getUser() {
  try {
    const user = await fetchUser();
    console.log('User:', user);
  } catch (error) {
    console.log('Error:', error);
  }
}

// 调用异步函数
getUser();//2s后输出 User: {id: 1, name: 'John'}
```

## 总结

以上只是 ES6 的一部分特性。ES6 还引入了许多其他新特性，如类（class），模块（module），生成器（generator），迭代器（iterator），Symbol 类型，新的数据结构如 Map 和 Set，以及许多新的数组和对象的方法。

ES6 的所有这些特性都使 JavaScript 成为一个更强大，更现代化的编程语言。
