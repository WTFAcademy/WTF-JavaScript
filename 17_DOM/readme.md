# WTF JavaScript 极简教程 17. DOM

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

DOM（文档对象模型）是 JavaScript 与网页内容交互的关键。通过操作 DOM，JavaScript 能够动态地添加、删除和修改 HTML。

## 选择元素

首先，你需要知道如何选择你要操作的元素。JavaScript 提供了多种方式来选择元素：

- `getElementById`：根据元素的 id 选择元素。
- `getElementsByClassName`：根据元素的类名选择元素，返回一个包含所有匹配元素的 NodeList。
- `getElementsByTagName`：根据元素的标签名选择元素，返回一个包含所有匹配元素的 NodeList。
- `querySelector`：使用 CSS 选择器选择元素，只返回第一个匹配的元素。
- `querySelectorAll`：使用 CSS 选择器选择元素，返回一个包含所有匹配元素的 NodeList。

例如：

```javascript
let el = document.getElementById('myId');
let els = document.getElementsByClassName('myClass');
let els = document.getElementsByTagName('div');
let el = document.querySelector('#myId');
let els = document.querySelectorAll('.myClass');
```

## 修改内容

选择元素后，你就可以修改它的内容。你可以通过 `innerHTML` 或 `textContent` 属性来修改元素的 HTML 或文本内容。

```javascript
let el = document.querySelector('#myId');
el.innerHTML = '<strong>Hello, World!</strong>';  // 修改 HTML 内容
el.textContent = 'Hello, World!';  // 修改文本内容
```

## 修改样式

你也可以通过操作 `style` 属性来修改元素的样式。注意，所有的 CSS 属性名都需要转换为驼峰命名法。

```javascript
let el = document.querySelector('#myId');
el.style.color = 'red';  // 修改文本颜色
el.style.backgroundColor = 'black';  // 修改背景颜色
```

## 添加和删除元素

使用 `createElement`，`appendChild` 和 `removeChild` 方法，你可以动态地添加和删除元素。

```javascript
let newEl = document.createElement('div');  // 创建新元素
document.body.appendChild(newEl);  // 添加新元素

let oldEl = document.querySelector('#myId');
document.body.removeChild(oldEl);  // 删除元素
```

总的来说，理解并掌握 DOM 操作是前端开发的核心技能之一。只有了解了如何使用 JavaScript 来操作 HTML 元素，你才能创建动态和交互式的网页。下一章，我们将深入研究事件处理，这是使网页具有交互性的关键。