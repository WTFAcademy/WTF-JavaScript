# WTF JavaScript 极简教程 15. 继承

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

继承是一种在更为普遍、通用的类（父类）的基础上创建更为特定、专用类（子类）的方法。子类可以通过父类那里继承属性和方法。JavaScript 是一种基于原型的语言，这意味着对象可以从其他对象继承属性和方法。这种机制使我们可以在不同的对象之间共享代码，提高代码重用性。

## 原型链继承

JavaScript 最原始的继承方式是通过原型链。如果一个对象的属性在该对象上不存在，JavaScript 将会在该对象的原型（即 `__proto__` 属性或其构造函数的 `prototype` 属性）上寻找该属性，如果仍然找不到，就会去原型的原型上找，以此类推，直到找到该属性或者到达原型链的尽头（`null`）。

```javascript
function Parent() {
  this.name = 'Parent';
}

Parent.prototype.getName = function() {
  return this.name;
}

function Child() {
  this.name = 'Child';
}

// 设置 Child 的原型为 Parent 的实例
Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child = new Child();
console.log(child.getName());  // 输出 "Child"
```

在上述代码中，`Child` 的原型被设置为 `Parent` 的一个实例，即`Child.prototype.__proto__ === Parent.prototype`。所以 `Child` 的实例可以通过原型链访问 `Parent` 的原型上的 `getName` 方法。

## 类继承

ES6 引入了类（class）语法，使得基于原型的继承看起来更像传统的基于类的继承。我们可以使用 `extends` 关键字来创建一个子类。

```javascript
class Parent {
  constructor() {
    this.name = 'Parent';
  }

  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor() {
    super();  // 调用父类的 constructor
    this.name = 'Child';
  }
}

const child = new Child();
console.log(child.getName());  // 输出 "Child"
```

在上述代码中，`Child` 继承自 `Parent`，`Child` 的实例可以访问 `Parent` 中定义的 `getName` 方法。一般来说，当一个类继承自另一个类时，子类的构造函数会首先通过`super()`调用父类的构造函数，然后再进行自己的初始化。具体来说，父类构造函数被调用时，`this.name` 被设置为`Parent`，但是这个值在子类构造函数中被覆盖了。

需要注意的是，JavaScript 的类实际上仍然是基于原型的。`Child extends Parent` 实际上是设置了 `Child.prototype` 的原型为 `Parent.prototype`，即`Child.prototype.__proto__ === Parent.prototype`。所以 `Child` 的实例可以访问 `Parent.prototype` 上的属性和方法。

## 总结

JavaScript 的继承是一个非常重要的概念，理解它将帮助你编写出更优雅、更高效的代码。
