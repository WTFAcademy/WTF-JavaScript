# WTF JavaScript Minimalist Tutorial: 9. Objects

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In the last lecture, we learned about arrays that can store multiple data. In this lecture, we learn about another complex data type: object (Object), including object definition, reading and writing, traversal, and addition and subtraction. Everything in JavaScript is an object, including strings, values, arrays, and functions. You must master them.

## Definition

An object type in JavaScript is a collection of properties and methods. For example, a car has attributes such as "color", "displacement", and "brand", and has methods such as "start", "steering", and "brake"; each car has these attributes and methods, but they The values ​​are different.

The way to create an object variable is very simple. Wrap the object's key-value pair list in braces `{}`, and separate the key-value pairs with commas `,`. You can understand the object as a dictionary, `key` is the word, and `value` is the corresponding meaning of the word.


```js
// empty object
const empty = {};
// Object containing 3 properties
const intro = {
   name: '0xAA',
   age: 1,
   isDeveloper: true,
};
```

Objects can also contain methods (functions):

```js
// Object containing methods
const wtf = {
   name: `WTF JavaScript`,
   hello: function(){
     return "Hello JavaScript!";
   }
};
```

## Read

You can use the index `object name['key']` to read the value of the object; you can also use `object.key` to read it directly.

```js
//Read properties
console.log(intro['name']); // Note that `name` is a string with quotes
console.log(intro.name); // Note that there are no quotes in this way of writing
```

Methods inside the object can be called using `object.functionname()`:

```js
// use function
console.log(wtf.hello()); // "Hello JavaScript!"
```

## Write

We can use indexes to edit the value of an object:
```js
intro.age = 99;
console.log(intro.age); // 99
```
We can use non-existing indexes to introduce new key-value pairs into the object.
```js
//Add the gender key-value pair in the intro object
intro.gender = "male";
console.log(intro.gender); // "male"
```

## Traverse

We can use a `for-in` loop to traverse `key`. The syntax is slightly different from the loop we learned before:

```js
for(let key in intro){
   console.log('data '+ key + ': ' + intro[key])
}
//data name: 0xAA
// data age: 99
// data isDeveloper: true
// data gender: male
```

We can also use `Object.keys(object)` to get all keys in the object, and then loop through all key-value pairs through `for`. This method is more complicated and is not recommended.

```js
const keys = Object.keys(intro);
for(let i = 0; i < keys.length; i++){
   console.log('data '+ keys[i] + ': ' + intro[keys[i]])
}
```

## delete

You can use the `delete` keyword to delete key-value pairs in an object

```js
delete wtf.name;
// or delete wtf["name"];
console.log(Object.keys(wtf)); // hello
```

## Exercises

Complete the following `isDev` function to complete the logic. When the `isDeveloper` property of the input object `obj` is `true`, return `true`, otherwise return `false`.

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
console.log(isDev(obj1)); // should output true
console.log(isDev(obj2)); // should output false
```

## Summary

In this lecture we introduced objects in Javascript, including definition, reading, writing, traversing, and deletion. Everything in JavaScript is an object, including strings, values, arrays, and functions. You must master them.
