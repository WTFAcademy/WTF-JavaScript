// 值类型
let a = 10;
let b = a; // b 是 a 的复制
a = 20;
console.log(b); // 输出 10, b 的值并没有改变


// 引用类型
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20

// 深拷贝
let x = {
  name: "wtf",
  age: 18,
  arr: [],
  obj: {
    a: 1,
  },
};

let y = JSON.parse(JSON.stringify(a));

y.obj.a = 2;

console.log("x: ", x);
console.log("y: ", y);
