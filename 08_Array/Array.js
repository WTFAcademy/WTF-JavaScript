// 定义
// 没有元素的空数组
const empty = [];
// 存储三个字符串的数组
const courses = ["Solidity", "Etherjs", "JavaScript"];
// 存储不同数据类型的数组
const mix = [1,'WTF',true];
// complex是一个数组，包含两个元素，每个元素都是另外一个数组
const complex = [courses, mix];
const nested = [[1, 2], [1, 1, 1]];


// 读写
const arr = [1,2,3,["Solidity",true]]
// 读取第 0 个元素
console.log(arr[0])  // 1
// 读取嵌套数组第 0 个元素
console.log(arr[3][0]) // "Solidity"
// 修改数组的第1个元素
arr[1] = 6
console.log(arr) //[1, 6, 3, Array(2)]
// 输出数组长度
console.log(arr.length) // 4

// 遍历数组
const numArr = [5, 8, 9, 11, 55];
let average = 0;
for(let i = 0; i < numArr.length; i++){
  average += numArr[i] / numArr.length
}
console.log(`平均值为: ${average}`) // 17.6

// 增加和删除
const nums = [1,2,3]
nums.push(4)
console.log(nums) // [1, 2, 3, 4]
// pop方法会返回被弹出的元素
const last = nums.pop()
console.log(last) // 4  弹出
console.log(nums) // [1, 2, 3]