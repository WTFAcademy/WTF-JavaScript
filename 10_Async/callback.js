function callback() {
  console.log('Hello, JavaScript!')
}

setTimeout(callback, 1000)
console.log('hello')
// hello
// Hello, JavaScript! (1 秒后输出)

setTimeout(() => {
  console.log('Hello, WTF JavaScript!')
  setTimeout(() => {
    console.log('Hello, WTF HTML!')
    setTimeout(() => {
      console.log('Hello, WTF CSS!')
    }, 1000)
  }, 1000)
}, 1000)
