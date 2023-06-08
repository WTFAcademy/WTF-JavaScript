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
