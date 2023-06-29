// prototype
function Animal(name) {
  this.name = name;
}
Animal.prototype.breathe = function() {
  console.log(this.name + " can breathe.");
}
let dog = new Animal('Dog');
dog.breathe(); // 输出：Dog can breathe.

// __proto__
let animal = {
  eats: true
};
// 创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true
console.log(rabbit.__proto__ === animal); // true

// prototype and constructor
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

// 原型链 __proto__
console.log(alice.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
