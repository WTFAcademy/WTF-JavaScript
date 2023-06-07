# WTF JavaScript 极简教程 16. 事件

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

在 Web 开发中，事件是用户或浏览器自身执行的某种动作，例如点击按钮，提交表单，或者触发鼠标悬停效果等等。理解事件处理是创建交互式网站的关键。

## 事件监听器

在 JavaScript 中，我们使用事件监听器（Event Listener）来处理这些事件。事件监听器是一个函数，它会在特定事件发生时被触发。我们使用 `addEventListener` 方法来指定事件监听器。以下是一个简单的点击事件监听器示例：

```javascript
const button = document.querySelector('button')
button.addEventListener('click', function () {
  alert('按钮被点击！')
})
```

在这个例子中，当用户点击按钮时，会弹出一个警告窗口。

## 事件对象

当事件被触发时，浏览器会创建一个事件对象，并将其作为参数传递给事件监听器。事件对象包含了关于事件的详细信息，例如鼠标的位置，或者用户按下的键等。例如：

```javascript
button.addEventListener('click', function (event) {
  console.log('事件类型：', event.type)
  console.log('目标元素：', event.target)
  console.log(`鼠标点击位置 (${event.clientX}, ${event.clientY})`)
})
```

在这个例子中，我们打印出了事件类型、目标元素和鼠标点击时的位置。

## 事件冒泡与捕获

在 DOM 树中，事件不仅仅会在它被触发的元素上进行处理，还会向上或向下传播到其他元素。这种现象称为事件冒泡（从内到外）和事件捕获（从外到内）。我们可以使用第三个参数来设置事件监听器是在冒泡阶段还是捕获阶段处理事件。

```javascript
// 在冒泡阶段处理事件
button.addEventListener(
  'click',
  function () {
    alert('按钮在冒泡阶段被点击！')
  },
  false
)

// 在捕获阶段处理事件
button.addEventListener(
  'click',
  function () {
    alert('按钮在捕获阶段被点击！')
  },
  true
)
```

## 事件委托

由于事件的冒泡特性，我们可以将事件监听器添加到父元素，而不是直接添加到实际的目标元素。这种技术称为事件委托。这样可以减少事件监听器的数量，并且使得对动态添加的元素的处理变得更加容易。以下是一个事件委托的示例：

```javascript
const ul = document.querySelector('ul')
ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    alert(`第 ${event.target.textContent} 个 li 被点击了！`)
  }
})
```

在这个例子中，我们给 ul 元素添加了一个事件监听器，而不是给每个 li 元素单独添加。

## 自定义事件

除了浏览器自带的事件，我们还可以创建自定义事件。自定义事件可以用来在不同的组件之间进行通信。以下是一个自定义事件的示例：

```javascript
const customEvent = new CustomEvent('myEvent', {
  detail: { message: '这是一个自定义事件' },
})

document.addEventListener('myEvent', (event) => {
  console.log('自定义事件被触发了：', event.detail.message)
})

document.dispatchEvent(customEvent)
```

在这个例子中，我们创建了一个名为 myEvent 的自定义事件，并在 document 上触发了这个事件。然后我们在 document 上添加了一个事件监听器，当 myEvent 事件被触发时，会打印出事件的详细信息。

## 总结

本节介绍了 JavaScript 事件的基本概念，包括事件监听器、事件对象、事件冒泡与捕获、事件委托和自定义事件。通过了解这些概念，您可以利用 JavaScript 事件来增强网页交互。
