# WTF JavaScript Minimalist Tutorial 15. Inheritance

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Inheritance is a method of creating more specific, specialized classes (subclasses) based on a more general, general class (parent class). Subclasses can inherit properties and methods from their parent class. JavaScript is a prototype-based language, which means objects can inherit properties and methods from other objects. This mechanism allows us to share code between different objects and improve code reusability.

## Prototype chain inheritance

The most primitive way of inheritance in JavaScript is through the prototype chain. If an object's property does not exist on the object, JavaScript will look for the property on the object's prototype (that is, the `__proto__` attribute or the `prototype` attribute of its constructor), and if still not found, it will The prototype of the prototype is searched, and so on, until the property is found or the end of the prototype chain (`null`) is reached.

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

//Set Child's prototype to be an instance of Parent
Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child = new Child();
console.log(child.getName()); // Output "Child"
```

In the above code, the prototype of `Child` is set to an instance of `Parent`, i.e. `Child.prototype.__proto__ === Parent.prototype`. So an instance of `Child` can access the `getName` method on the prototype of `Parent` through the prototype chain.

## Class inheritance

ES6 introduces class syntax, making prototype-based inheritance look more like traditional class-based inheritance. We can use the `extends` keyword to create a subclass.

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
     super(); // Call the constructor of the parent class
     this.name = 'Child';
   }
}

const child = new Child();
console.log(child.getName()); // Output "Child"
```

In the above code, `Child` inherits from `Parent`, and instances of `Child` can access the `getName` method defined in `Parent`. Generally speaking, when a class inherits from another class, the constructor of the subclass will first call the constructor of the parent class through `super()`, and then perform its own initialization. Specifically, `this.name` is set to `Parent` when the parent class constructor is called, but this value is overridden in the child class constructor.

It should be noted that JavaScript classes are actually still based on prototypes. `Child extends Parent` actually sets the prototype of `Child.prototype` to `Parent.prototype`, that is, `Child.prototype.__proto__ === Parent.prototype`. So instances of `Child` can access properties and methods on `Parent.prototype`.

## Summary

Inheritance in JavaScript is a very important concept, and understanding it will help you write more elegant and efficient code.
