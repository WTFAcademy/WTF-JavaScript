// 例子
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable){
    console.log('outerVariable:', outerVariable);
    console.log('innerVariable:', innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // logs: "outerVariable: outside" and "innerVariable: inside"


// 一般方式实现
let count = 0; // 用于统计func函数被调用次数

function func() {
  count++;
  // 业务逻辑
  return;
}

console.log(count);

// 闭包实现
function func2() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let addCount = func2();

console.log(addCount()); // 1
console.log(addCount()); // 2
