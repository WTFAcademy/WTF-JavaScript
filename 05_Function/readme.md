---
title: 5. 函数
---

# WTF JavaScript 极简教程: 5. 函数

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

这一讲，我们将介绍 JavaScript 中的函数 `function`，包括定义函数的语法、函数引用和函数的参数。

## 函数声明

函数是 JavaScript 的基本组件之一，它将一串指令包装起来，形成一个代码块，方便重复利用，让代码更加系统化，你可以把搜索引擎理解为一个函数，每次在你输入搜索内容并点击搜索键之后，它会运行一串非常复杂的逻辑，然后返回给你搜索结果。

函数最大的特征是拥有参数和返回值：

```js
function foo(input){
    return input;
}
// foo(5) 将返回 5
```

上面的代码中，我们用 `function` 关键字声明了一个名为 `foo` 的函数。它有一个参数 `input`，可以在调用函数的时候输入。花括号 `{}` 中包裹着函数体，承载着函数的逻辑。这个函数逻辑非常简单，我们用 `return` 关键字定义了一个返回值，它会结束函数的运行并将 `input` 原封不动的返回给调用者。 

`foo()` 看起来有点没用，下面我们丰富一下函数体，让它完成更多功能。
```js
function bar(input){
    const output = input * 2;
    return output;
}
// bar(5) 将返回 10
```

上面的 `bar()` 函数中，我们计算了 `input * x`，然后将它赋值给 `output` 变量，最后返回。

函数可以承载多个参数，下面的 `sum()` 函数中，我们实现了加法，将参数 `x` 和 `y` 相加，并返回。这里返回值我们没有使用变量，而是一个表达式；运行时，程序会先执行表达式，然后将结果返回。

```js
function sum(x, y){
    return x + y;
}
// sum(5, 6) 将返回 11
```

## 函数调用

你可以使用 `函数名(参数)` 的模式来调用函数，例如:
```js
sum(5, 6); // 返回 11
```

你也可以在函数中调用另一个函数:

```js
function sumCall(x, y){
    const output = sum(x, y)
    return output;
}
```
> `Tips`: 如果仅使用 `函数名` 的话，会返回该函数对象，而非返回值，因此调用函数时一定要加括号和参数。

## 函数表达式和箭头函数

下面我们介绍另外两种定义函数的方法。

1. 函数表达式: 它与上面的方式声明几乎一样，唯一的区别就是函数名 `sum1` 被提到前面作为变量，并且多了赋值操作。使用起来也是一样的。更多内容见 [MDN 教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function#%E8%AF%AD%E6%B3%95)

    ```js
    const sum1 = function(x, y){
        return x + y;
    }
    ```

2. 箭头函数: ES6 版本新增了使用箭头语法 `=>` 来定义函数，这种语法比另外两种方法更为简洁。更多内容见 [MDN 教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

    ```js
    const sum2 = (x, y) => {
        return x + y;
    }
    ```
## 习题

修改下面的 `prod()` 函数，让它返回两个参数 `x` 和 `y` 的积。

```jsx live
function TestJS05(props) {
  // 要修改的函数 prod，计算x和y的积
  function prod(x, y){
    return ;
  }

  // 应返回30
  return prod(5, 6);
}
```

## 总结

这一讲，我们介绍了 JavaScript 中的函数，包括定义函数的语法和如何调用函数。函数是你编程中最好的伴侣，我们会在之后的教程中反复利用它。
