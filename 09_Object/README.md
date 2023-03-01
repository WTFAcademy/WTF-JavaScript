# WTF JavaScript 极简教程: 9. 对象

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

上一讲我们学习了可以存储多个数据的数组，这一讲我们学习另外一种复杂数据类型：对象（Object），包括对象的定义，读写，遍历，和增减。JavaScript 中的所有事物都是对象，包括字符串、数值、数组、函数，你一定哟好好掌握。

## 定义

JavaScript 中的对象类型是一系列属性和方法的集合。比如一辆车，它有`颜色`，`排量`，`品牌`等属性，且有`启动`，`转向`，`刹车`等方法；每辆车都有这些属性和方法，但他们的值不同。

创建对象变量的方式很简单，把对象的键值对（key-value pair）列表用大括号 `{}` 包裹起来，键值对之间用逗号 `,` 分割。你可以把对象理解为一个字典，`key` 就是字，`value` 就是字对应的含义。


```js
// 空对象
const empty = {};
// 包含 3 个属性的对象
const intro = {
  name: '0xAA',
  age: 1,
  isDeveloper: true,
};
```

对象也可以包含方法（函数）:

```js
// 包含方法的对象
const wtf = {
  name: `WTF JavaScript`,
  hello: function(){
    return "Hello JavaScript!";
  }
};
```

## 读取

你可以使用索引 `对象名['key']` 来读取对象的值；也可以直接用 `对象.key` 来读取。

```js
// 读取属性
console.log(intro['name']); // 注意 `name` 是个字符串，有引号
console.log(intro.name); // 注意这种写法没有引号
```

对象内部的方法可以用 `对象.函数名()` 的方式调用：

```js
// 使用函数
console.log(wtf.hello()); // "Hello JavaScript!"
```

## 写入

我们可以利用索引来编辑对象的值：
```js
intro.age = 99;
console.log(intro.age); // 99
```

我们可以使用不存在的索引在对象里引入新的键值对。
```js
// 在 intro 对象中添加 gender 键值对
intro.gender = "male";
console.log(intro.gender); // "male"
```

## 遍历

我们可以使用 `for-in` 循环来实现遍历 `key`，语法与之前学的循环稍有不同：

```js
for(let key in intro){
  console.log('data '+ key + ': ' + intro[key])
}
// data name: 0xAA
// data age: 99
// data isDeveloper: true
// data gender: male
```

我们也可以使用 `Object.keys(对象)` 来获取对象中所有键，然后通过 `for` 循环遍历所有键值对。这个方法比较复杂，不推荐。

```js
const keys = Object.keys(intro);
for(let i = 0; i < keys.length; i++){
  console.log('data '+ keys[i] + ': ' + intro[keys[i]])
}
```

## 删除

你可以使用 `delete` 关键字来删除对象中的键值对

```js
delete wtf.name;
// 或 delete wtf["name"];
console.log(Object.keys(wtf)); // hello
```

## 习题

补全下面的 `isDev` 函数，完成逻辑，当输入的对象 `obj` 的 `isDeveloper` 属性为 `true` 时，返回 `true`，否则返回 `false`。

```js
function isDev(obj){

}

const obj1 = {
  name: "0xAA",
  isDeveloper: true,
}
const obj2 = {
  name: "Trump",
}
console.log(isDev(obj1)); // 应该输出 true
console.log(isDev(obj2)); // 应该输出 false
```

## 总结

这一讲我们介绍了 Javascript 中的对象，包括定义，读取，写入，遍历，和删除。JavaScript 中的所有事物都是对象，包括字符串、数值、数组、函数，你一定哟好好掌握。