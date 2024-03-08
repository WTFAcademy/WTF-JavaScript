async function hello() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Hello, JavaScript async!')
     }, 1000)
   })
}

async function helloAwait() {
   const value = await hello()
   console.log(value)
   console.log('hello await')
}
helloAwait()
// Hello, JavaScript async! (output after 1 second)
// hello await
