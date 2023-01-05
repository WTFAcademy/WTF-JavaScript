//函数声明
function sum(num1,num2){
    return num1 + num2
}

//函数表达式
let sum = function(num1,num2){
    return num1 + num2
}

//箭头函数(arrow function)
let sum = (num1,num2) => {
    return num1+num2
}

//箭头函数可以省略小括号
let add = x => {return x + 1} //只有一个参数
let getRandom = () =>{return Math.random()} //没有参数需要括号
let sum = (num1,num2) => {return num1 + num2} //多个参数需要括号
let sum = num1,num2 => {return num1 + num2} // 错误的写法

//箭头函数可以省略大括号
let double = x => x * 2 //返回x的2倍
let print = x => console.log(x) //返回undefined

//形参
function sum1(num1) {
    console.log('num1 =',num1) //num1 = undefined
}

//函数作为参数
function ft1(x) {
    console.log('x =',x)
}
function ft2(){
    console.log('我是fn2函数')
}
ft1(ft2)