console.log('script start');  // 宏任务

setTimeout(function() {
  console.log('setTimeout');  // 宏任务
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');  // 微任务
}).then(function() {
  console.log('promise2');  // 微任务
});

console.log('script end');  // 宏任务