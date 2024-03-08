// example
function outerFunction(outerVariable) {
   return function innerFunction(innerVariable){
     console.log('outerVariable:', outerVariable);
     console.log('innerVariable:', innerVariable);
   }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // logs: "outerVariable: outside" and "innerVariable: inside"


//General implementation
let count = 0; // Used to count the number of times the func function is called

function func() {
   count++;
   // Business logic
   return;
}

console.log(count);

// Closure implementation
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
