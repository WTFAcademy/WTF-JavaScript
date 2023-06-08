let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20

// let a = {
//   name: "wtf",
//   age: 18,
//   arr: [],
//   obj: {
//     a: 1,
//   },
// };
// let b = JSON.parse(JSON.stringify(a));

// a.obj.a = 2;

// console.log(a.obj.a, b.obj.a); // 2 1

const deepClone = (obj) => {
  if (typeof obj !== "object") {
    return obj;
  }

  let tmp = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    tmp[key] = deepClone(obj[key]);
  }
  return tmp;
};

let a = {
  name: "wtf",
  age: 18,
  arr: [],
  obj: {
    a: 1,
  },
};

let b = deepClone(a);

console.log(a, b); // { name: 'wtf', age: 18, arr: [], obj: { a: 1 } } { name: 'wtf', age: 18, arr: [], obj: { a: 1 } }
