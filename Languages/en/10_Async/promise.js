//Define promise instance
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('Hello, JavaScript Promise!')
   }, 1000)
})
//Run the Promise instance
promise.then((value) => {
   console.log(value)
})
console.log('hello Promise')
// hello Promise
// Hello, JavaScript Promise! (output after 1 second)
