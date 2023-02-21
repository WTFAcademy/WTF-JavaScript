// 1. 函数声明
function foo(input){
    return input;
}
// foo(5) 将返回 5

function bar(input){
    const output = input * 2;
    return output;
}
// bar(5) 将返回 10

function sum(x, y){
    return x + y;
}
// sum(5, 6) 将返回 11



// 2. 函数调用
sum(5, 6); // 返回 11

function sumCall(x, y){
    const output = sum(x, y)
    return output;
}
const sum = function(num1,num2){
    return num1 + num2
}

// 3. 函数表达式
const sum1 = function(x, y){
    return x + y;
}

// 4. 箭头函数(arrow function)
const sum2 = (x, y) => {
    return x + y;
}