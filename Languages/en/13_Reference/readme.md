# WTF JavaScript minimalist tutorial 13. Reference types

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In JavaScript, variables can be defined as value types (also called primitive types) or reference types.

## Value type

Value types include Boolean, null, undefined, String, Number, BigInt, and Symbol. These types of data are stored in stack memory. When you assign a variable of a value type to another variable, the new variable gets a complete copy of the original variable.

Let's look at an example:

```javascript
let a = 10;
let b = a; // b is a copy of a
a = 20;
console.log(b); // Output 10, the value of b has not changed
```

## Reference type

Reference types include Object, Array, Function, Map, Set, etc. These types of data are stored in heap memory, and the variable actually stores a pointer to the value in heap memory. When you assign a reference type variable to another variable, the new variable gets a reference to the original data rather than a complete copy. This means that if we change one of the variables, the other variable will also be affected.

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20
```

So what if you want to copy an object so that the new object has no connection to the original object? This requires a deep copy.

## How to copy

For value type variables, we can copy them through simple assignment.

For reference types, if you want to get a new, completely independent copy, rather than a reference, you need to make a deep copy. Deep copy is to copy all elements of an object, including attributes and sub-objects. The new object has no relationship with the original object. In JavaScript, we can use the `JSON.parse` and `JSON.stringify` methods:

```js
// deep copy
let x = {
   name: "wtf",
   age: 18,
   arr: [],
   obj: {
     a: 1,
   },
};

let y = JSON.parse(JSON.stringify(x));

y.obj.a = 2;

console.log("x: ", x);
console.log("y: ", y);
```

Although there is no problem in using it this way most of the time, there are still many shortcomings to this method.

1. There are fields in the object whose value is `undefined`, and the fields will disappear directly after conversion.
2. If the object has a field value of `RegExp` object, the field value will become `{}` after conversion
3. If the object has a field value of `NaN` or `+-Infinity`, the field value will become `null` after conversion.
4. If the object has a `ring reference`, the conversion will directly report an error.

For more complex objects, you can use the `_.cloneDeep` method of a third-party library such as `lodash`.

## Summary

In this lecture, we introduced reference types in JavaScript, learned how to copy variables of value types and reference types, and discussed the deep copy method and its limitations. In JavaScript programming, it is very important to understand the difference between value types and reference types and how to copy them correctly.
