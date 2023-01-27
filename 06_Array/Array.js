// ## 1. 数组的定义

// 没有元素的空数组
let empty = [] 
// 存储三个字符串的数组
let courses = ["Solidity","Etherjs","Javascript"]
// 存储不同数据类型的数组
let mix = [1,'WTF',true]

// arr1是一个数组，包含两个元素，每个元素都是另外一个数组
let arr1 = [
  [1,2,3],
  ["Solidity","Etherjs","Javascript"]
]


// ## 2.数组的读写
let arr = [1,2,3,["Solidity",true]]
console.log(arr[0])  // 1
// 获取嵌套数组的数据
console.log(arr[3][0]) // Solidity

// 修改数组的第1个元素
arr[1] = 6
console.log(arr) //[1, 6, 3, Array(2)]

let arr = [1,2,3]
console.log(arr.length) // 3

for(let course of courses){
  console.log("I love "+course)
}
// I love Solidity
// I love Etherjs
// I love Javascript

function getAverage(nums){
  let sum = 0
  for(let num of nums){
    sum = sum + num
  }
  return sum/nums.length
}
let average = getAverage([1,2,3,4,5,6])
console.log(average) // 3.5

// i初始值是0，每次循环+1，当i小于courses长度时，就一直循环
for(let i=0;i<courses.length;i++){
  // i就是当前的索引，通过courses[i]获取数组的值
  console.log(i + ": I love "+courses[i])
}

let nums = [1,2,3]
nums.push(4)
console.log(nums) // [1, 2, 3, 4]
let last = nums.pop()
console.log(last) // 4  弹出
console.log(nums) // [1, 2, 3]

// 数组.slice(开始位置, 结束位置)
let nums = [1,2,3,4,5,6]
// 从第1个到第4个的连续数据
console.log(nums.slice(1,4)) // [2, 3, 4]
// 只有一个参数，就是从第3个到数组结尾
console.log(nums.slice(3)) // [4, 5, 6]
