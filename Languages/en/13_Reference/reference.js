// value type
let a = 10;
let b = a; // b is a copy of a
a = 20;
console.log(b); // Output 10, the value of b has not changed


// reference type
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20

// deep copy
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
