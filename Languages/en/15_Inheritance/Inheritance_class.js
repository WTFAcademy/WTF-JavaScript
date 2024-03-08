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
