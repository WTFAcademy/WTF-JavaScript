# WTF JavaScript minimalist tutorial 14. Prototype chain

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

JavaScript is a prototype-based language, which means that relationships between objects are not established through classes, but through prototypes.

## Prototype

A prototype is an internal object in JavaScript that allows us to share methods and properties. Whenever we create a new object, we are actually copying an existing prototype object. The new object inherits the properties of the prototype object. This inheritance is dynamic, if we change the prototype object, then all objects based on that prototype will be affected.

Prototype (`Prototype`), prototype chain (`__proto__`), functions, and objects are closely related concepts. To put it simply:

1. Each function will have an attribute named `prototype` when it is created, which points to the prototype object of the function. When called as a constructor (i.e. via the `new` keyword), the newly created object inherits the function's prototype.

   ```javascript
   function Animal(name) {
       this.name = name;
   }
   Animal.prototype.breathe = function() {
       console.log(this.name + " can breathe.");
   }
   let dog = new Animal('Dog');
   dog.breathe(); // Output: Dog can breathe.
   ```

2. Every JavaScript object (functions are also objects) has a prototype object associated through the `__proto__` attribute, and inherits properties from it. This is also called the prototype chain.

   ```js
   let animal = {
       eats: true
   };
   // Create a new object, using the existing object to provide the __proto__ of the newly created object
   let rabbit = Object.create(animal);
   console.log(rabbit.eats); // true
   console.log(rabbit.__proto__ === animal); // true
   ```

Let’s expand on it below.

## Prototype and constructor

In JavaScript, functions are also objects. When we use the `new` keyword to call a function (in this case we call it a constructor), JavaScript creates a new object and sets the object's prototype to the `prototype` property of the constructor. This property is very useful if you write your code in an object-oriented way.

```javascript
// Declare function object Person
function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
};

const alice = new Person('Alice', 25);
alice.greet(); // Hello, my name is Alice, and I am 25 years old.
```

In the above code, `Person` is a constructor and we create a new `Person` instance `alice`. The prototype of `alice` is `Person.prototype`, that is, `alice.__proto__ === Person.prototype`. Therefore `alice` has access to all properties and methods defined on `Person.prototype`.

## Prototype chain

In JavaScript, almost all objects are associated with another object when they are created. This associated object is the prototype object. When we try to access a property of an object, JavaScript first looks for the property on the object itself. If it is not found, JavaScript will look for it in the object's prototype object. If it is not found in the prototype object, then JavaScript will continue to search on the prototype object of the prototype object until it finds this property or finds `null` at the top of the prototype chain. This forms a prototype chain.

```javascript
// Declare function object Person
function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
};

const alice = new Person('Alice', 25);

console.log(alice.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
```

In the above code, the instance `alice` is created by the Person constructor, and the object can access the prototype object of the object through the `__proto__` attribute, so `alice.__proto__ === Person.prototype`. Since `Person.prototype` is also an object, it also has the `__proto__` attribute, and the object is an instance of `Object`, so `Person.prototype.__proto__ === Object.prototype`. `Object.prototype.__proto__` is the top of the prototype chain, which is `null`.

```javascript
console.log(alice.toString()); // [object Object]
```

In the above code, the `toString` method is not on `alice` or `Person.prototype`, but JavaScript finds it on `Object.prototype`, because the prototype of `Person.prototype` is `Object.prototype`, That is `Person.prototype.__proto__ === Object.prototype`.

Through the prototype chain, all objects can access the properties and methods on `Object.prototype`, which is why we can call `toString` or `hasOwnProperty` and other methods on any object.

## Summary

In this section we learned about prototype (`prototype`) and prototype chain (`__proto__`). Prototype and prototype chain are very important concepts in JavaScript. They are the core of implementing JavaScript inheritance and property lookup mechanism.
