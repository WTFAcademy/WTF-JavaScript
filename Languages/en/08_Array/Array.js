//define
// Empty array with no elements
const empty = [];
//Array to store three strings
const courses = ["Solidity", "Etherjs", "JavaScript"];
// Store arrays of different data types
const mix = [1,'WTF',true];
// complex is an array containing two elements, each element is another array
const complex = [courses, mix];
const nested = [[1, 2], [1, 1, 1]];


// read and write
const arr = [1,2,3,["Solidity",true]]
//Read the 0th element
console.log(arr[0]) // 1
//Read the 0th element of the nested array
console.log(arr[3][0]) // "Solidity"
//Modify the first element of the array
arr[1] = 6
console.log(arr) //[1, 6, 3, Array(2)]
//Output array length
console.log(arr.length) // 4

// Traverse the array
const numArr = [5, 8, 9, 11, 55];
let average = 0;
for(let i = 0; i < numArr.length; i++){
   average += numArr[i] / numArr.length
}
console.log(`average is: ${average}`) // 17.6

// Add and delete
const nums = [1,2,3]
nums.push(4)
console.log(nums) // [1, 2, 3, 4]
// The pop method will return the popped element
const last = nums.pop()
console.log(last) // 4 pop up
console.log(nums) // [1, 2, 3]
