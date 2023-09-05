# WTF JavaScript 极简教程 13. 引用类型

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

在 JavaScript 中，变量可以被定义为值类型（也称为基础类型）或引用类型。

## 值类型

值类型包括 Boolean、null、undefined、String、Number、BigInt 和 Symbol。这些类型的数据被存储在栈内存中。当你把一个值类型的变量赋值给另一个变量时，新变量会获得原始变量的一个完整复制。

让我们来看一个例子：

```javascript
let a = 10;
let b = a; // b 是 a 的复制
a = 20;
console.log(b); // 输出 10, b 的值并没有改变
```

## 引用类型

引用类型包括 Object、Array、Function、Map、Set 等。这些类型的数据被存储在堆内存中，变量实际上存储的是指向堆内存中的该值的指针。当你把一个引用类型的变量赋值给另一个变量时，新变量得到的是对原始数据的一个引用，而不是一个完整的复制。这就意味着，如果我们改变了其中一个变量，另一个变量也会受到影响。

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20
```

那么如果你想要复制一个对象，且让新的对象和原始对象没有任何关联该怎么办？这就需要进行深拷贝。

## 如何复制

对于值类型的变量，我们可以通过简单赋值的方式进行复制。

对于引用类型，如果你想要得到一个新的，完全独立的复制，而不是一个引用，你需要进行深拷贝。深拷贝就是将一个对象的所有元素，包括属性和子对象都进行复制，新的对象和原来的对象没有任何关联。在 JavaScript 中，我们可以通过 `JSON.parse` 和 `JSON.stringify` 方法：

```js
// 深拷贝
let x = {
  name: "wtf",
  age: 18,
  arr: [],
  obj: {
    a: 1,
  },
};

let y = JSON.parse(JSON.stringify(a));

y.obj.a = 2;

console.log("x: ", x);
console.log("y: ", y);
```

虽然大多数时候这么使用是没有问题的，但这种方式还是有很多缺点的

1. 对象中有字段值为 `undefined`，转换后字段会直接消失
2. 对象如果有字段值为 `RegExp` 对象，转换后字段值会变成 `{}`
3. 对象如果有字段值为 `NaN`、`+-Infinity`，转换后字段值变成 `null`
4. 对象如果有 `环引用`，转换直接报错。

对于更复杂的对象，你可以使用第三方库如 `lodash` 的 `_.cloneDeep` 方法。

## 总结

这一讲，我们介绍了 JavaScript 中的引用类型，了解了如何复制值类型和引用类型的变量，并且探讨了深拷贝的方法和其局限性。在 JavaScript 编程中，理解值类型和引用类型的区别以及如何进行正确的复制是非常重要的。

