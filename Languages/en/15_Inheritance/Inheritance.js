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
