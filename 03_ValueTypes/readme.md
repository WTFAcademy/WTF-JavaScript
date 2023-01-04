> 变量用来存储值，它们有名字和数据类型，变量的数据类型决定了这些值在计算机内存中如何存储，JavaScript 中有6中简单数据类型（也称为**原始类型**）：*Undefined*、*Null*、*Boolean*、*Number*、*BigInt*、*String* 和 *Symbol*。还有一种复杂数据类型 *Object*。所有值都可以用上述 7 中数据类型之一来表示。需要注意的是，JavaScript 是一种弱类型语言，这意味着我们不用提前声明变量的类型，在程序运行时，类型会被自动确定。

## typeof 操作符

在 JavaScript 中，我们可以使用 **typeof** 操作符来确定任意变量的数据类型。有如下两种使用方法：

```js
typeof 变量名
typeof(表达式)
```

## 1. Undefined

> Undefined 类型在 JavaScript 中表示未定义的，其只有一个值，就是特殊值 undefined。

### 什么时候会出现 undefined

- 当使用 var 或者 let 声明了变量但没有初始化时，就相当于给变量赋值了 undefined

```js
let wtf;
console.log(wtf); // undefined
```

- 对未声明的变量调用 typeof 时，会返回 undefined

```js
console.log(wtf); // 报错，因为 wtf 变量未声明
console.log(typeof wtf); // undefined
```

+ 获取对象中不存在的属性时，会返回 undefined

```js
const obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // undefined
```

+ 函数没有返回值或 return 后没有数据时，函数返回值为 undefined

```js
function fun() {}
console.log(fun()); // undefined
```

## 2. Null

> Null 在 JavaScript 中表示空值。其同样只有一个特殊值 null。

### 使用场景

+ 在定义一个事先不确定的对象类型变量时，可以使用 null 来初始化，这样，只要检查这个变量是不是 null 就可以确定是否被重新赋值。

```js
let obj = null;
let obj2 = { a: 1 };
console.log(obj); // null
obj = obj2;
console.log(obj); // {a: 1}
```

+ 当需要释放一个对象的时候，可以将该对象赋值为 null

```js
let obj = { a: 1 };
console.log(obj); // {a: 1}
obj = null; // 释放 obj
console.log(obj); // null
```

### 和 Undefined 的区别

- Null 表示"什么都没有"，Undefined 表示“不存在”

```js
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

## 3. Boolean

> Boolean 类型用于表示 *真和假* ，有两个字面量值：true 和 false（注意是小写）。

### 其他类型转 Boolean

| 数据类型      | 转换结果为 true  | 转换结果为 false |
| --------- | ----------- | ----------- |
| String    | 非空字符串       | ""（空字符串）    |
| Number    | 非零数值（包括无穷值） | 0、NaN       |
| Object    | 任意非 null 对象 | null        |
| Undefined | N/A（不存在）    | undefined   |

理解以上转换非常重要，因为 JavaScript 在执行流程控制语句时，会自动将其他类型值转换为 Boolean 值，例如下面代码运行后会输出 'true'

```js
let wtf = "WTF School";
if (wtf) {
  console.log("true");
} else {
  console.log("false");
}
```

## 4. Number

> 在 JavaScript 中 Number 是一个比较有意思的类型。它既可以声明整数，也可以声明浮点数（小数）。

### 声明 Number 类型变量

```js
let int1 = 10; // 10进制整数
let int2 = 010; // 8进制整数
let int3 = 0x10; // 16进制整数
let float1 = 1.1; // 声明浮点数
let float2 = .1; // 有效，但不推荐
let float3 = 1.1e3; // 科学计数法，结果为1100
```

### 值的范围

Number 类型可表示数的范围非常大，一般情况下不需要担心

```js
console.log(Number.MIN_VALUE); // 可表示最小值，5e-324
console.log(Number.MAX_VALUE); // 可表示最大值，1.7976931348623157e+308
```

**需要注意的是，由于 Number 设计原因，并不适合直接用于高精度计算，在 JavaScript 中有一个库 `BigNumber.js` 专门用于解决这一问题。**

### NaN、Infinity、-Infinity

JavaScript 中有如下三个特殊的数值

1. NaN：表示 “不是数值”，当返回数值的操作失败时会出现，比如 `0 / 0`，可以使用 `isNaN` 函数验证。**注意**：涉及到 NaN的操作始终返回 NaN，其次，每个 NaN 均不相等（NaN != NaN）

2. Infinity：无穷大，表示超出上限的结果，比如 `1 / 0`

3. -Infinity：无穷小，表示超出下限的结果，比如 `-1 / 0`

### 其他类型转换为数值

有三个函数可以其他类型转换为数值：Number()、parseInt()和parseFloat()，Number()可以用于任何数据类型，后面两个函数主要用于将字符串转为数值。

1. Number()函数主要基于如下规则，[在线调试]()
   
   - 布尔值，true 转换为1，false 转换为0
   
   - 数值，直接返回
   
   - null，返回 0
   
   - undefined，返回 NaN
   
   - 字符串
     
     - 转换为十进制数值，需要注意的是无法处理八进制，Number('0123') 结果为 123
     
     - 如果字符串包含有效的浮点数格式，则转换为对应的浮点数
     
     - 如果字符串包含十六进制，则转换为十进制返回
     
     - 如果是空字符串，返回 0
     
     - 无效字符会返回 NaN
   
   - 对象，调用 valueOf() 方法，并按照上述规则执行转换。如果转换结果是 NaN，则会调用 toString() 方法，再按照上述规则执行转换。

2. parseInt() 将字符串转为整数时，优先考虑使用此函数，此函数更专注于字符串中是否包含整数，[在线调试]()
   
   - 字符串最前面的空格会被忽略，从第一个非空格字符开始转换，直到字符串末尾或碰到非数值字符
   
   - 如果第一个字符不是数值字符、加号或减号，会立即返回 NaN
   
   - 空字符串会返回 NaN，这点有别于 Number()
   
   - 可以识别十六进制、八进制和十进制
   
   - 可以传入第二个参数用于指定底数（进制数）

3. parseFloat() 与 parseInt() 类似，用于将字符串转换为浮点数，[在线调试]()
   
   - 解析到字符串末尾或无效浮点数字符为止，无效浮点数字符包括第二个出现的小数点

## 5. BigInt

> 为什么有了 number 类型，还会有 BigInt ？
> 
> JavaScript 里的最大安全整数是 `2^53 - 1`，如果超出这个范围，就会出现**计算不准确的问题**。因此出现了 BigInt 类型用于声明任意大的整数。

### 声明BigInt

```js
let int1 = 123456789n; // 只需要在整数后面加上 n 即可声明 BigInt 类型数值
let int2 = 123456789n;
console.log(typeof int1); // bigint
console.log(int1 * int2); // 15241578750190521n
```

它在某些方面类似于 Number，但是也有几个关键的不同点：

1. 不能用于 Math 对象中的方法

2. 不能和任何 Number 数值混合运算（可能会造成精度丢失）

3. 当使用 BigInt 时，带小数的运算会被取整

## 6. String

> String（字符串）类型表示零或多个16位 Unicode 字符序列。可以使用双引号（""）、单引号（''）或反引号（``）标示。

### 声明 String 类型变量

```js
let str1 = "wtf";
let str2 = 'wtf';
let str3 = `wtf`;
```

### 其他类型转换为字符串

有三种方式可以将其他类型转换为字符串，toString()、String() 和 加号操作符

- toString()：可以将数值、布尔值、对象和 *字符串* 转换为字符串。[在线调试]()

- String()：如果需要转换的值有可能是 null 或者 undefined 时，可以使用 String()。[在线调试]()

- 用加号操作符给一个值加上一个空字符串也可以将其转换为字符串：`1 + '' = '1'`

### 模板字符串（使用反引号标示）

模板字符串是 JavaScript 中一种很有意思的字符串声明方式，它不仅可以跨行定义字符串，还可以进行字符串插值。

```js
let str = `123
456
789`;
console.log(str); 
// 结果会保留换行，得到以下字符
// 123
// 456
// 789
```

*由于模板字符串的这个特性，所以在使用时一定要留意其中的空格和换行符，避免出现问题。*

**模板字符串插值**：这是模板字符串最常用的一个特性，使用 `${}` 可以在其中插入变量并解析。

```js
let num1 = 666;
let str1 = "wtf";
let str2 = `模板字符${num1}串插值${str1}`;
console.log(str2); // 模板字符666串插值wtf
```

所有插入的值都会使用 toString() **强制转换**为字符串

## 7. Symbol

> Symbol（符号）一种特殊的原始值，它的实例是唯一的且不可变。它的用途就是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

```js
let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 === sym2); // false，因为每个 symbol 实例均不相等
```

### 如何使用 Symbol

```js
let attr1 = Symbol("attr");
let attr2 = Symbol("attr");

console.log(attr1, attr2); // Symbol(attr) Symbol(attr)

const obj = {
  attr1: "wtf",
  attr2: "school",
};

console.log(obj.attr1, obj.attr2); // wtf school
```

## 8. Object

> 在 JavaScript 中，对象其实就是一组数据和功能的集合。我们可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法。通常我们会使用 **对象字面量** 的方式创建。

```js
// --- 通过实例创建 ---
const obj1 = new Object();
obj1.name = "wtf";
obj1.getName = () => obj1.name;

console.log(obj1.name, obj1.getName()); // wtf wtf

// --- 通过对象字面量方式创建 ---
const obj2 = {
  name: "wtf",
  getName: () => obj2.name,
};

console.log(obj2.name, obj2.getName()); // wtf wtf
```

### 对象属性的增删改查

```js
let obj = {};

// 增
obj.name = "wtf";
obj["age"] = 18; //这两种方法都可以往对象中新增属性或方法
console.log(obj); // {name: 'wtf', age: 18}

// 删
delete obj.name;
delete obj["age"]; // 与新增方法类似，这两种方式都可以删除对象中的某个属性
console.log(obj); // {}

// 改
obj = { name: "wtf", age: 18 };
obj.name = "Write The Friendly";
console.log(obj); // {name: 'Write The Friendly', age: 18}

// 查
console.log(obj.name) // 对象.属性名/方法名 直接查看某一属性或方法
console.log(Object.keys(obj)) // ['name', 'age'] 查看某一对象的所有键
console.log(Object.values(obj)) // ['Write The Friendly', 18] 查看某一对象的所有值
```

### 扩展知识

每个 Object 实例都有如下属性和方法：

- constructor：用于创建当前对象的函数。

- hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性(propertyName)，propertyName 必须是字符串。

- isPrototypeof(object)：用于判断当前对象是否为另一个对象的原型。

- propertyIsEnumerate(propertyName)：用于判断给定的属性是否可以使用 `for-in` 语句枚举。

- toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。

- toString()：返回对象的字符串表示。

- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString() 方法返回值相同。
