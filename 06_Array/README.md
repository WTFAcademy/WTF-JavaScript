# WTF JavaScript 极简教程: 5. 数组

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---
这一讲，我们会介绍Javascript中用到最多的复杂类型：数组（Array)，可以把多个数据有序的存储在一起，下面我们来一起学习数组这个数据结构的`定义`,`数据读取`,`遍历`以及`增加和修改`

## 1. 数组的定义
创建数组最简单的方式，就是在一对中括号`[]`内部用逗号`,`分割的列表，例如

```js
// 没有元素的空数组
let empty = [] 
// 存储三个字符串的数组
let courses = ["Solidity","Etherjs","Javascript"]
// 存储不同数据类型的数组
let mix = [1,'WTF',true]

```

数组中除了存储基础类型，也可以是另外一个数组，这样你就可以通过数组存储比较复杂的嵌套数据

```js
// arr是一个数组，包含两个元素，每个元素都是另外一个数组
let arr = [
  [1,2,3],
  ["Solidity","Etherjs","Javascript"]
]

```

## 2.数组的读写

我们可以在变量上使用中括号`[]`来读取数组元素, 需要注意的是数组的索引是从0开始计算的,你还对数组某个位置进行赋值来修改数组

```js
let arr = [1,2,3,["Solidity",true]]
console.log(arr[0])  // 1
// 获取嵌套数组的数据
console.log(arr[3][0]) // Solidity

// 修改数组的第1个元素
arr[1] = 6
console.log(arr) //[1, 6, 3, Array(2)]
```

除了通过中括号读取值之外，数组变量上还有一些属性可以读取，比如每个数组的length属性会返回数组的长度

```js
let arr = [1,2,3]
console.log(arr.length) // 3

```

## 数组的遍历

数组中存储着多个数据，我们需要一种方式能够读取一个数组内部所有的值进行处理，最简单的就是使用for/of循环

```js
let courses = ["Solidity","Etherjs","Javascript"]
for(let course of courses){
  console.log("I love "+course)
}
// I love Solidity
// I love Etherjs
// I love Javascript
```
上面的代码中，for关键字后面的小括号中，我们使用变量`course of 数组`的方式依次读取数组，在后面的大括号`{}`内部就可以通过`course`获取数组中的每个元素

比如我们可以实现一个获取数组平均值的函数
```js
function getAverage(nums){
  let sum = 0
  for(let num of nums){
    sum = sum + num
  }
  return sum/nums.length
}
let average = getAverage([1,2,3,4,5,6])
console.log(average) // 3.5

```

如果你需要知道每个元素是第几个，我们可以使用for循环,具体的语法格式如下
```js
for(定义数值是; 循环是否继续;每次循环结束执行){
  代码
}
```
比如我们可以使用`for`循环的方式获取数组中每个元素
```js
let courses = ["Solidity","Etherjs","Javascript"]
// i初始值是0，每次循环+1，当i小于courses长度时，就一直循环
for(let i=0;i<courses.length;i++){
  // i就是当前的索引，通过courses[i]获取数组的值
  console.log(i + ": I love "+courses[i])
}
```
上面代码中的`for/of`和`for`循环都是可以嵌套使用的，可以遍历多层
## 数组的增加和修改

数组内置了很多的操作方法，我们这里介绍使用最多的`push`,`pop`，`slice`, 关于更多的数组操作方法可以参考 [MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)

数组中我们可以使用`push`方法在数组最后`推入`一个新数据，也可以使用`pop`方法`弹出一个数据`

```js
let nums = [1,2,3]
nums.push(4)
console.log(nums) // [1, 2, 3, 4]
let last = nums.pop()
console.log(last) // 4  弹出
console.log(nums) // [1, 2, 3]

```

数组内部还可以通过`slice`方法获取连续区域的值，我们称之为`切片`

```js
// 数组.slice(开始位置, 结束位置)
let nums = [1,2,3,4,5,6]
// 从第1个到第4个的连续数据
console.log(nums.slice(1,4)) // [2, 3, 4]
// 只有一个参数，就是从第3个到数组结尾
console.log(nums.slice(3)) // [4, 5, 6]

```

## 习题
arr是一个不重复数字组成的数组，在下面新增代码，
找到数组中的两个数字相加之和为18

```js
let arr = [1,5,3,9,6,8,10,7,12] //全部是不重复的数字
for(let num1 of arr){
  for(let num2 of arr){
    // 新增代码
    console.log(num1,num2) // num1+num2 == 18
  }
}


```

## 总结

这一讲我们介绍了Javascript中的数组，包括数组的定义，数组元素的读取和修改，如何遍历一个数组，数组是我们日常开发中经常用到的数据结构，还有很多操作数组的方法我们会在后续的教程里使用，你一定要好好掌握