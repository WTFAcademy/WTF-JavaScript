# WTF JavaScript 极简教程 14. 原型链

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

JavaScript 是一种基于原型的语言，这意味着对象之间的关系不是通过类（class）来建立的，而是通过原型（prototype）。

## 原型（Prototype）

原型是 JavaScript 中的一个内部对象，它可以让我们共享方法和属性。每当创建一个新对象时，我们实际上都是在复制一个存在的原型对象。新对象继承了原型对象的属性。这种继承是动态的，如果我们改变原型对象，那么所有基于该原型的对象都将受到影响。

原型（`Prototype`）、原型链（`__proto__`）、函数、对象是密切相关的概念，简单来说：

1. 每个函数在创建时都会有一个名为 `prototype` 的属性，它指向函数的原型对象。当以构造函数方式调用（即通过 `new` 关键字）时，新创建的对象会继承该函数的原型。

  ```javascript
  function Animal(name) {
      this.name = name;
  }
  Animal.prototype.breathe = function() {
      console.log(this.name + " can breathe.");
  }
  let dog = new Animal('Dog');
  dog.breathe(); // 输出：Dog can breathe.
  ```

2. 每一个 JavaScript 对象（函数也是对象）都有一个通过 `__proto__` 属性关联的原型对象，从它那里继承属性，这也被称为原型链。

  ```js
  let animal = {
      eats: true
  };
  // 创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
  let rabbit = Object.create(animal);
  console.log(rabbit.eats); // true
  console.log(rabbit.__proto__ === animal); // true
  ```

下面我们展开讲一下。

## 原型和构造函数

在 JavaScript 中，函数也是对象。当我们使用 `new` 关键字来调用一个函数（此时我们称之为构造函数）时，JavaScript 会创建一个新的对象，并将这个对象的原型设置为构造函数的`prototype`属性。如果按照面向对象的方式编写代码，那么这个属性将非常有用。

```javascript
// 声明函数对象 Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, 我叫 ${this.name}, 我 ${this.age} 岁了。`);
};

const alice = new Person('Alice', 25);
alice.greet();  // Hello, 我叫 Alice, 我 25 岁了.
```

在上述代码中，`Person`是一个构造函数，我们创建了一个新的`Person`实例`alice`。`alice` 的原型就是 `Person.prototype`，即`alice.__proto__ === Person.prototype`。因此`alice`可以访问在`Person.prototype`上定义的所有属性和方法。

## 原型链

在 JavaScript 中，几乎所有的对象在创建的时候都会关联到另一个对象，这个被关联的对象就是原型对象。当我们试图访问一个对象的某个属性时，JavaScript 首先在这个对象本身上查找这个属性。如果找不到，那么 JavaScript 就会去这个对象的原型对象中寻找。如果原型对象中也没有，那么 JavaScript 就会继续在原型对象的原型对象上查找，一直这样查找下去，直到找到这个属性，或者查找到原型链的顶端 `null` 为止。这就形成了一条原型链。

```javascript
// 声明函数对象 Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, 我叫 ${this.name}, 我 ${this.age} 岁了。`);
};

const alice = new Person('Alice', 25);

console.log(alice.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
```

在上述代码中，实例`alice`是由 Person 构造函数创建而来，对象可以通过`__proto__`属性访问该对象的原型对象，所以`alice.__proto__ === Person.prototype`。由于`Person.prototype`也是一个对象，同样具备`__proto__`属性，而该对象是`Object`的实例，所以`Person.prototype.__proto__ === Object.prototype`。`Object.prototype.__proto__`是原型链的顶端，即`null`。

```javascript
console.log(alice.toString());  // [object Object]
```

在上述代码中，`toString`方法并不在`alice`或`Person.prototype`上，但 JavaScript 在`Object.prototype`上找到了它，因为`Person.prototype`的原型就是`Object.prototype`，即`Person.prototype.__proto__ === Object.prototype`。

通过原型链，所有的对象都可以访问`Object.prototype`上的属性和方法，这就是我们为什么可以在任何对象上调用`toString`或`hasOwnProperty`等方法的原因。

## 总结

本节我们学习了原型（`prototype`）和原型链（`__proto__`）的相关知识。原型和原型链在 JavaScript 中是非常重要的概念，它们是实现 JavaScript 继承和属性查找机制的核心。
