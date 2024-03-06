// 1. Function declaration
function foo(input){
     return input;
}
// foo(5) will return 5

function bar(input){
     const output = input * 2;
     return output;
}
// bar(5) will return 10

function sum(x, y){
     return x + y;
}
// sum(5, 6) will return 11



// 2. Function call
sum(5, 6); // returns 11

function sumCall(x, y){
     const output = sum(x, y)
     return output;
}
const sum = function(num1,num2){
     return num1 + num2
}

// 3. Function expression
const sum1 = function(x, y){
     return x + y;
}

// 4. Arrow function (arrow function)
const sum2 = (x, y) => {
     return x + y;
}
