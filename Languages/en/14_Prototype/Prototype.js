//prototype
function Animal(name) {
   this.name = name;
}
Animal.prototype.breathe = function() {
   console.log(this.name + " can breathe.");
}
let dog = new Animal('Dog');
dog.breathe(); // Output: Dog can breathe.

// __proto__
let animal = {
   eats: true
};
// Create a new object, using the existing object to provide the __proto__ of the newly created object
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true
console.log(rabbit.__proto__ === animal); // true

// prototype and constructor
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

//Prototype chain __proto__
console.log(alice.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
