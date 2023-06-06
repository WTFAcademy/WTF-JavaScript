# WTF JavaScript 极简教程 18. 异常处理

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---
在 JavaScript 编程中，错误处理和调试是必备的技能。无论你的代码编写得多么完美，错误总是难以避免的。在这一章节中，我们将介绍如何使用 try...catch 语句处理错误，以及如何使用浏览器的开发者工具进行调试。

## 错误处理：try...catch

JavaScript 提供了 `try...catch` 语句来捕获和处理运行时错误。你可以将可能会抛出错误的代码放在 `try` 块中，然后在 `catch` 块中处理错误。

```javascript
try {
  // 可能会抛出错误的代码
  let a = 1;
  a();  // 这里会抛出一个 TypeError
} catch (error) {
  // 处理错误
  console.log(error.message);  // 输出 'a is not a function'
}
```

如果 `try` 块中的代码没有抛出错误，那么 `catch` 块将不会被执行。如果 `try` 块中的代码抛出了错误，那么 `catch` 块将被执行，你可以在其中访问到错误对象。

## 调试：浏览器的开发者工具

大部分的浏览器都有内置的开发者工具，你可以使用它们来调试你的 JavaScript 代码。开发者工具提供了许多强大的功能，包括断点、单步执行、查看变量值等等。

你可以通过以下步骤来打开开发者工具：

1. 打开浏览器。
2. 右键点击网页，选择 “Inspect” 或 “Inspect Element”。
3. 切换到 “Console” 或 “Sources” 标签。

在开发者工具中，你可以查看到所有的 JavaScript 错误，包括错误的类型、错误的信息，以及错误发生的位置。

你还可以在代码中的任何位置设置断点。当代码执行到断点的时候，它将会暂停，你可以查看变量的值，或者单步执行代码。

总的来说，错误处理和调试是非常重要的技能。只有当你了解如何处理错误，以及如何有效地找出并修复错误，你才能编写出健壮和高质量的代码。在接下来的章节中，我们将讨论更高级的话题，比如网络请求和 API 使用。