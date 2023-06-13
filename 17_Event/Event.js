const button = document.querySelector('button')
button.addEventListener('click', function () {
  alert('按钮被点击！')
})

button.addEventListener('click', function (event) {
  console.log('事件类型：', event.type)
  console.log('目标元素：', event.target)
  console.log(`鼠标点击位置 (${event.clientX}, ${event.clientY})`)
})

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

const ul = document.querySelector('ul')
ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    alert(`第 ${event.target.textContent} 个 li 被点击了！`)
  }
})

const customEvent = new CustomEvent('myEvent', {
  detail: { message: '这是一个自定义事件' },
})

document.addEventListener('myEvent', (event) => {
  console.log('自定义事件被触发了：', event.detail.message)
})

document.dispatchEvent(customEvent)
