// 定义 promise 实例
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, JavaScript Promise!')
  }, 1000)
})
// 运行 Promise 实例
promise.then((value) => {
  console.log(value)
})
console.log('hello Promise')
// hello Promise
// Hello, JavaScript Promise! (1 秒后输出)
