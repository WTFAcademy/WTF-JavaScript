# WTF JavaScript 极简教程 16. DOM

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

在 JavaScript 中，DOM（文档对象模型）和 BOM（浏览器对象模型）是两个重要的概念。DOM 用于访问和操作 HTML 文档中的元素，而 BOM 则提供了与浏览器窗口进行交互的方法和属性。本节将介绍 DOM 和 BOM 的基本概念，帮助您更好地理解和运用它们。

这一讲所使用的 HTML 代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM And BOM</title>
</head>
<body>
  <div id="myId"></div>
  <div class="myClass"></div>
  <div class="myClass"></div>
  <script src="./DOMAndBOM.js"></script>
</body>
</html>
```

## DOM

DOM（文档对象模型）是一种用于表示和操作 HTML 和 XML 文档的 API。它将文档表示为由节点和对象（包括元素，属性，文本等）组成的树形结构。通过操作 DOM，JavaScript 能够动态地添加、删除和修改 HTML。

### 选择元素

首先，你需要知道如何选择你要操作的元素。JavaScript 提供了多种方式来选择元素：

| 方法                      | 描述                                                                |
|-------------------------|---------------------------------------------------------------------|
| getElementById          | 根据元素的 id 选择元素。                                            |
| getElementsByClassName  | 根据元素的类名选择元素，返回一个包含所有匹配元素的 NodeList。      |
| getElementsByTagName    | 根据元素的标签名选择元素，返回一个包含所有匹配元素的 NodeList。    |
| querySelector           | 使用 CSS 选择器选择元素，只返回第一个匹配的元素。                  |
| querySelectorAll        | 使用 CSS 选择器选择元素，返回一个包含所有匹配元素的 NodeList。     |

例如：

```javascript
const el = document.getElementById('myId') // 选择 id 为 'myId' 的 div 元素
const elBySelector = document.querySelector('#myId') // 选择 selector 为 'myId' 的 div 元素，值返回第一个匹配的元素

const els = document.getElementsByClassName('myClass') // 选择所有 class 为 'myClass' 的 div 元素
const elsByTag = document.getElementsByTagName('div')
const elsBySelectorAll = document.querySelectorAll('.myClass')
```

### 修改内容

选择元素后，你就可以修改它的内容。你可以通过 `innerHTML` 或 `textContent` 属性来修改元素的 HTML 或文本内容。

```javascript
const el = document.querySelector('#myId')
el.innerHTML = '<strong>Hello, WTF JavaScript!</strong>' // 修改 HTML 内容
el.textContent = 'Hello, WTF JavaScript!' // 修改文本内容
```

### 修改样式

你也可以通过操作 `style` 属性来修改元素的样式。注意，所有的 CSS 属性名都需要转换为驼峰命名法。

```javascript
const el = document.querySelector('#myId')
el.style.color = 'red' // 修改文本颜色
el.style.backgroundColor = 'black' // 修改背景颜色
```

### 添加和删除元素

使用 `createElement`，`appendChild` 和 `removeChild` 方法，你可以动态地添加和删除元素。

```javascript
const newEl = document.createElement('div') // 创建新元素
document.body.appendChild(newEl) // 添加新元素

const oldEl = document.querySelector('#myId')
document.body.removeChild(oldEl) // 删除元素
```

## BOM

BOM（浏览器对象模型）是一个表示浏览器及其组件的编程接口。BOM 允许开发者控制浏览器的行为和交互，如弹出新窗口、获取浏览器窗口的尺寸等。BOM 的核心对象是 window，它表示浏览器窗口或者一个框架。以下是一些常见的 BOM 操作示例：

### 打开新窗口

你可以通过 `window.open` 方法打开一个新窗口。

```javascript
window.open('https://wtf.academy', '_blank') // 在新窗口中打开 WTF Academy
```

### 获取和设置窗口尺寸

你可以通过 `window.innerWidth` 和 `window.innerHeight` 属性获取窗口的宽度和高度。

```javascript
const width = window.innerWidth // 获取窗口宽度
const height = window.innerHeight // 获取窗口高度

console.log(`窗口宽度：${width}，窗口高度：${height}`)
```

### 设置定时器

你可以通过 `setTimeout` 和 `setInterval` 方法设置定时器。

```javascript
setTimeout(() => {
  console.log('Hello, WTF JavaScript!')
}, 1000) // 1 秒后输出 Hello, WTF JavaScript!

setInterval(() => {
  console.log('Hello, WTF JavaScript!')
}, 1000) // 每隔 1 秒输出 Hello, WTF JavaScript!
```

## 总结

本节我们介绍了 DOM 和 BOM 的基本概念以及一些常见的操作。通过掌握 DOM 和 BOM，您将能够更有效地使用 JavaScript 进行 Web 开发，创建更丰富的用户界面和交互体验。
