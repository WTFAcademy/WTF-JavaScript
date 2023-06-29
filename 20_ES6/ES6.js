// let 和 const
let x = 10;
if (true) {
  let x = 20;  // 这个 x 是一个新的变量
  console.log(x);  // 输出 20
}
console.log(x);  // 输出 10

const y = 30;
y = 40;  // 报错，y 的值不能被改变

//箭头函数
const arr = [1, 2, 3, 4];
const squares = arr.map(x => x * x);
console.log(squares);  // 输出 [1, 4, 9, 16]

//模板字符串
let name = 'Alice';
console.log(`Hello, ${name}!`);  // 输出 "Hello, Alice!"

//扩展运算符
function addNumbers(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// 使用扩展运算符将数组中的元素展开作为函数的参数
const result = addNumbers(...numbers);

console.log(result); // 输出: 6

//解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);  // 输出 1 2 3

let {x, y} = {x: 10, y: 20};
console.log(x, y);  // 输出 10 20

//Promises 和异步函数
// 使用Promise封装一个异步操作
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: 'John' };
      resolve(user);
    }, 2000);
  });
}

// 使用async/await来处理异步任务
async function getUser() {
  try {
    const user = await fetchUser();
    console.log('User:', user);
  } catch (error) {
    console.log('Error:', error);
  }
}

// 调用异步函数
getUser();//2s后输出 User: {id: 1, name: 'John'}
