console.log('script start'); // Macro task

setTimeout(function() {
   console.log('setTimeout'); // Macro task
}, 0);

Promise.resolve().then(function() {
   console.log('promise1'); // Microtask
}).then(function() {
   console.log('promise2'); // Microtask
});

console.log('script end'); // Macro task
