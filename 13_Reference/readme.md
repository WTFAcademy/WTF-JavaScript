# WTF JavaScript 极简教程 13. 引用类型

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

在 JavaScript 中，数据类型可以分为两种大类：基本类型和引用类型。基本类型包括 Number, String, Boolean, Null, Undefined, 和 Symbol。这些类型的值都是不可变的。

引用类型则是由多个值构成的对象。当你操作对象时，实际上是在操作对象的引用而不是实际的对象。因此，当你将一个对象赋值给一个新的变量时，赋的其实是该对象在内存中的地址，也就是说，新变量和原始变量引用的是同一个对象。因此，改变其中一个变量，就会影响到另一个变量。

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);  // 输出 20
```

那么如果你想要复制一个对象，且让新的对象和原始对象没有任何关联该怎么办？这就需要进行深拷贝。

## 深拷贝

深拷贝就是将一个对象的所有元素，包括属性和子对象都进行复制，新的对象和原来的对象没有任何关联。

在 JavaScript 中，实现深拷贝的一种简单方法是使用 JSON 对象的 `parse` 和 `stringify` 方法。

```javascript
let obj1 = { value: 10, child: { value: 20 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.child.value = 30;
console.log(obj1.child.value);  // 输出 20
```

在上述代码中，`JSON.stringify(obj1)` 会将 `obj1` 转换为 JSON 字符串，然后 `JSON.parse` 会将这个 JSON 字符串解析为一个新的对象。

但这种方法也有它的局限，它不能复制函数和 undefined 值，也不能复制循环引用的对象。

对于更复杂的需求，你可能需要使用一些库，如 lodash 的 `_.cloneDeep` 方法，或者手动实现深拷贝。

深拷贝是 JavaScript 中一个重要的概念，理解它会帮你避免很多关于对象操作的常见问题。