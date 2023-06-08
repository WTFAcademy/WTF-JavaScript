# WTF JavaScript 极简教程 13. 引用类型

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

在 JavaScript 中，数据类型可以分为两种大类：基本类型和引用类型。基本类型包括 Number, String, Boolean, Null, Undefined, 和 Symbol。除过上面的 6 种基本数据类型外，剩下的就是引用类型了，统称为 Object 类型。细分的话，有：Object 类型、Array 类型、Date 类型、RegExp 类型、Function 类型 等。当你操作对象时，实际上是在操作对象的引用而不是实际的对象。因此，当你将一个对象赋值给一个新的变量时，赋的其实是该对象在内存中的地址，也就是说，新变量和原始变量引用的是同一个对象。因此，改变其中一个变量，就会影响到另一个变量。

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20
```

那么如果你想要复制一个对象，且让新的对象和原始对象没有任何关联该怎么办？这就需要进行深拷贝。

## 深拷贝

深拷贝就是将一个对象的所有元素，包括属性和子对象都进行复制，新的对象和原来的对象没有任何关联。在JavaScript中实现深拷贝的方法有很多，下面介绍常用的两种：



- **JSON.parse(JSON.stringify( ))**

```js
let a = {
  name: "wtf",
  age: 18,
  arr: [],
  obj: {
    a: 1,
  },
};
let b = JSON.parse(JSON.stringify(a));

a.obj.a = 2;

console.log(a.obj.a, b.obj.a);.a, b.obj.a)
```

虽然大多数时候这么使用是没有问题的，但这种方式还是有很多缺点的

1. 对象中有字段值为 `undefined`，转换后字段会直接消失
2. 对象如果有字段值为 `RegExp` 对象，转换后字段值会变成 `{}`
3. 对象如果有字段值为 `NaN`、`+-Infinity`，转换后字段值变成 `null`
4. 对象如果有 `环引用`，转换直接报错



- **for ... in + 递归**

```js
const deepClone = (obj) => {
  if (typeof obj !== "object") {
    return obj;
  }

  let tmp = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    tmp[key] = deepClone(obj[key]);
  }
  return tmp;
};

let a = {
  name: "wtf",
  age: 18,
  arr: [],
  obj: {
    a: 1,
  },
};

let b = deepClone(a);

console.log(a, b); // { name: 'wtf', age: 18, arr: [], obj: { a: 1 } } { name: 'wtf', age: 18, arr: [], obj: { a: 1 } }

```