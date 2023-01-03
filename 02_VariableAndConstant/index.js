var variable = 'hello' //声明变量并初始化
variable = 'world' //改变变量的值

var name='tony',gender='male',age=18 //定义多个变量

//var声明提升
console.log(age) //undefined
var age=18

var age
console.log(age) //undefined
age=18

//var多次声明
var age = 15
var age = 25
var age = 35
console.log(age) //35

//let冗余声明
var name
var name //合法

let age
let age //SyntaxError: Identifier 'age' has already been declared

//混用也会导致冗余声明
var gender
let gender //SyntaxError: Identifier 'age' has already been declared

var address
let address //SyntaxError: Identifier 'address' has already been declared

//age会被提升
console.log(age) //undefined
var age=18

//gender不会被提升
console.log(gender) //ReferenceError: Cannot access 'gender' before initialization
let gender='female'

const age=18
age=20 //TypeError: Assignment to constant variable

//const不允许重复声明
const age=18
const age=20 //SyntaxError: Identifier 'age' has already been declared