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
