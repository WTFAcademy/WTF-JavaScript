async function hello() {
    console.log("Hello, JavaScript async!");
}
  
// console.log(hello()) 

async function helloAwait() {
    const value = await hello();
    console.log("hello await");
  }
  helloAwait()
  // Hello, JavaScript async! (1 秒后输出)
  // hello await
  