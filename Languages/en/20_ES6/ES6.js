// let and const
let x = 10;
if (true) {
   let x = 20; // This x is a new variable
   console.log(x); //output 20
}
console.log(x); //output 10

const y = 30;
y = 40; // Error, the value of y cannot be changed

//arrow function
const arr = [1, 2, 3, 4];
const squares = arr.map(x => x * x);
console.log(squares); // Output [1, 4, 9, 16]

//Template string
let name = 'Alice';
console.log(`Hello, ${name}!`); // Output "Hello, Alice!"

//Extension operator
function addNumbers(x, y, z) {
   return x + y + z;
}

const numbers = [1, 2, 3];

// Use the spread operator to expand the elements in the array as parameters of the function
const result = addNumbers(...numbers);

console.log(result); // Output: 6

//destructuring assignment
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output 1 2 3

let {x, y} = {x: 10, y: 20};
console.log(x, y); // Output 10 20

//Promises and asynchronous functions
// Use Promise to encapsulate an asynchronous operation
function fetchUser() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       const user = { id: 1, name: 'John' };
       resolve(user);
     }, 2000);
   });
}

// Use async/await to handle asynchronous tasks
async function getUser() {
   try {
     const user = await fetchUser();
     console.log('User:', user);
   } catch (error) {
     console.log('Error:', error);
   }
}

//Call asynchronous function
getUser();//Output after 2s User: {id: 1, name: 'John'}
