# WTF JavaScript 极简教程: 7. 对象

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

上一讲我们学习了可以存储多个数据的数组，这一讲我们学习另外一种复杂数据类型：对象(Object),下面我们来一起学习对象个数据结构的`定义`,`数据读取`,`遍历`以及`增加和修改`

## 1. 对象的定义
创建对象最简单的方式，就是在一对大括号`{}`内部用逗号`,`分割的数据对，每对数据使用冒号间隔的`key`和`value`，例如

```js
// 没有元素的空对象
let empty = {}
// 存储三个数据对的对象
let courses = {
  name:'Javacript',
  age:1,
  isfree:true
}

```

定义对象的时候，key必须是字符串格式，value可以是任意数据结构，你也可以用value来存储数组和对象，构成比较复杂的嵌套对象

```js
// 定义了存储数组和对象的嵌套对象
let courses = {
  name:'wtf',
  list:['Solidity','Javascript'],
  next:{
    name:'React',
    isfree:true
  }
}
```

## 2.对象的读写

我们可以在变量上使用中括号`['key']`来读取对象的`value`, 也可以直接用.key来读取

```js
let courses = {
  name:'wtf',
  list:['Solidity','Javascript'],
  next:{
    name:'React',
    isfree:true
  }
}
console.log(courses['name']) // wtf 注意name是个字符串
console.log(courses.name) // wtf 这种写法没有引号

console.log(courses.list[0]) // Solidity
console.log(courses.next.name) // React 嵌套对象
```
## 对象的遍历

对象的遍历和数组类似，都是依次获取对象内的全部数据, 我们可以使用for/in循环来实现遍历key

```js
let obj = {
  name:'Javascript',
  type:'frontend',
  isfree:true
}
for(let key in obj){
  console.log('key '+key+': ' + obj[key])
}
// key name: Javascript
// key type: frontend
// key isfree: true
```

上面的代码中，for关键词后面的小括号中，我们使用变量 `key in obj`依次获取对象的key，然后通过`obj[key]`的写法获取value


## 对象的增加和修改
对象的增加和修改语法是一样的，直接复制修改即可，如果key不存在就是新增，如果key已经存在就是修改

```js
let obj = {
  name:'Javascript'
}

obj.name = 'Wtf-Javascript' // name存在，就是修改
obj.type = 'frontend'  // name不存在 就是创建
console.log(obj) // {name: 'Wtf-Javascript', type: 'frontend'}

```

## 和数组的区别
既然对象也可以存储多个数据，为什么我们需要对象呢，这里我们学习一下这两个数据结构的区别

数组有点像我们日常工作中的队列，数据是有顺序的排列在一起

对象有点像我们日常生活中的字典，我们可以很方便的查询key和value的对应关系，key之间是没有顺序概念的，实际开发中两种数据结构也是经常配合使用


## 习题
arr是一个不重复数字组成的数组，在下面新增代码，
找到数组中的两个数字相加之和为18，只能用一次for循环

```js
let arr = [1,5,3,9,6,8,10,7,12] //全部是不重复的数字
let obj = {} // 记录需要的目标数字
for(let num1 of arr){
  const key = 18-num1 // 遍历到1的话，key就是需要寻找的17
  obj[key] = true
  // 新增代码
  console.log(num1,num2)
}


```

## 总结

这一讲我们介绍了Javascript中的对象，包括对象的定义，对象元素的读取和修改，如何遍历一个对象，对象是我们日常开发中经常用到的数据结构，还有很多操作数组的方法我们会在后续的教程里使用，你一定要好好掌握