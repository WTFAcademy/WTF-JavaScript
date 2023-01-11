# WTF JavaScript 极简教程: 6. function

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍JS中的`function`，包括三种定义函数的语法、函数引用和函数的参数。

## 三种定义函数的语法

下面我们以加法为例使用三种方法来定义具有相同功能的函数。

### 函数声明

```javascript
function sum(num1,num2){
    return num1 + num2
}
```

`function`表示函数类型，`sum`代表函数名。

小括号中的`num1`、`num2`表示函数的两个参数，大括号中的语句表示函数体，也就是调用函数后要执行的代码。

`return`关键字指定函数的返回值，任何值都可以作为返回值。如果不写`return`或者只写`return`后面不跟任何值，就相当于`return undefined`。

如果函数体中存在`return`，那么函数执行到`return`就结束了，后面写再多语句也是无效的。

### 函数表达式

```javascript
let sum = function(num1,num2){
    return num1 + num2
}
```

函数表达式与函数声明几乎一样，唯一的区别就是与函数声明相比，`sum`被提到前面作为变量，同时函数被赋值给它，因此该函数可以通过变量`sum`来引用。

### 箭头函数（arrow function）

ES6新增了使用`=>`语法来定义函数，这种语法比函数声明和函数表达式都更为简洁。

```javascript
let sum = (num1,num2) => {
    return num1+num2
}
```

在上面的语句中，`=`右边的就是箭头函数，该函数同样也是被赋值给变量`sum`。

箭头函数如果只有一个参数，可以不使用小括号。只有在没有参数，或者有多个参数的情况下，才必须使用小括号：

```javascript
let add = x => {return x + 1} //只有一个参数
let getRandom = () =>{return Math.random()} //没有参数需要括号
let sum = (num1,num2) => {return num1 + num2} //多个参数需要括号
let sum = num1,num2 => {return num1 + num2} // 错误的写法
```

箭头函数的大括号也可以省略，如果不使用大括号，那么箭头后面就只能有一行代码，并且如果这行代码有值的话会被返回。

```javascript
let double = x => x * 2 //返回x的2倍
let print = x => console.log(x) //返回undefined
```

## 函数引用

在上述三种定义函数的例子中，`sum`均为函数名。

使用不带括号的函数名会返回该函数，带上括号后才会执行该函数。

![](./img/4-1.png)

## 函数的参数

函数的参数分为形参和实参。

### 形参

在下面这个函数中，`num1`是在定义函数时创建的形式参数（形参），并且`num1`会自动在函数内部声明但不会被赋值。

```javascript
function sum1(num1) {
    console.log('num1 =',num1) //num1 = undefined
}
```

![](./img/4-2.png)

### 实参

在调用函数时，可以通过函数的`()`传递任意数量的实参，实参会赋值给对应位置的形参并遵循以下规则：

1. 如果实参和形参数量一样，则实参和形参的值一一对应。
2. 如果实参比形参多，那么多余的实参不会被使用。
3. 如果形参比实参多，那么多余的形参为`undefined`，也就是未被赋值。

![](./img/4-3.png)

### 函数也可以作为参数

```javascript
function ft1(x) {
    console.log('x =',x)
}
function ft2(){
    console.log('我是fn2函数')
}
ft1(ft2)
```

![](./img/4-4.png)

## 总结

这一讲，我们具体介绍了JS中的`function`，包括三种定义函数的语法、函数引用和函数的参数。箭头函数和函数表达式其实存在一些区别，学员可以自行探索一下。

## 参考资料

JavaScript高级程序设计（第4版）10 函数