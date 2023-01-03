# WTF JavaScript 极简教程: 2. variable and constant

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍声明变量的三个关键字`var`、`let`和`const`，并讲解它们之间的区别和用法。

## var 关键字

要声明一个变量，可以使用var操作符，后面跟上变量名，而且声明变量时可以设置它的初始值。

```javascript
var variable = 'hello' //声明变量并初始化
```

在这个语句中，我们声明了一个名为`variable`的变量，并给它赋上了初始值`'hello'`。如果没有给它赋初始值，变量的值就为`undefined`。之后我们还可以改变变量的值。

```javascript
var variable = 'hello'
variable = 'world' //改变变量的值
```

### 定义多个变量

可以在一条语句中声明多个变量，变量之间用`,`分隔，每个变量都可以初始化：

```javascript
var name='tony',gender='male',age=18 //定义多个变量
```

### var声明的提升

使用var进行变量声明时，下面的代码不会报错

```javascript
console.log(age) //undefined
var age=18
```

`console.log(age)`这一行代码不会报错，会在控制台输出`undefined`，这是因为使用`var`关键字声明的变量会自动提升到代码的顶部，我们可以把它等价于以下代码：

```javascript
var age
console.log(age) //undefined
age=18
```

这就是`var`声明的提升，也就是把使用了`var`的变量声明都提到了代码的顶部，因此我们可以在变量赋值之前使用它，只不过此时它的值为`undefined`。

同时，多次使用`var`声明同一个变量是没问题的，但该变量会获取到最新的值。

```javascript
var age = 15
var age = 25
var age = 35
console.log(age) //35
```

## let 关键字

`let`和`var`的作用类似，但在作用域上有非常显著的区别，这一块的内容我们会在后续讲到作用域时继续补充，现在先暂时跳过。

### 冗余声明

`let`不允许出现冗余声明，否则会报错：

```javascript
var name
var name //合法

let age
let age //SyntaxError: Identifier 'age' has already been declared
```

混用`let`和`var`同样会导致冗余声明报错

```javascript
var gender
let gender //SyntaxError: Identifier 'age' has already been declared

var address
let address //SyntaxError: Identifier 'address' has already been declared
```

### let 不会声明提升

`let`和`var`的另一个重要区别，就是`let`声明的变量不会在代码中提升

```javascript
//age会被提升
console.log(age) //undefined
var age=18

//gender不会被提升
console.log(gender) //ReferenceError: Cannot access 'gender' before initialization
let gender='female'
```

也就是说，不能在使用`let`声明变量之前使用该变量。

## const 关键字

`const`和`let`的作用类似，唯一一个重要的区别就是用`const`声明变量时必须给它赋值，同时之后不能改变它的值，因此`const`一般用来声明常量，也就是不会改变的值。

```javascript
const age=18
age=20 //TypeError: Assignment to constant variable
```

由于`const`声明的值无法改变，因此它也不允许重复声明

```javascript
const age=18
const age=20 //SyntaxError: Identifier 'age' has already been declared
```

## 使用规范

ES6新增的`let`和`const`很好地解决了行为怪异的`var`在作用域和语义上存在的诸多问题，也形成了开发时的使用规范。

### 1.能用`const`就用`const`

使用`const`声明可以确保一些重要的值不会被改变，同时也能迅速发现一些因意外赋值导致的不合理行为。

### 2.不能用`const`就用`let`，不使用`var`

当开发者提前知道某些变量未来需要被修改时就使用`let`，这样可以确保变量拥有明确的作用域和声明位置。

## 总结

这一讲我们介绍了声明变量的三个关键字`var`、`let`和`const`，并讲解了它们之间的区别和用法。在目前的开发中，能用`const`就用`const`，不能用`const`就用`let`，`var`基本上不会使用。

## 参考资料

JavaScript高级程序设计（第4版）3.3 变量