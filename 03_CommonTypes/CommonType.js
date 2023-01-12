// 1. 数值
// 声明整数
const int = 10;
// 声明浮点数
const float = 1.1;
// NaN, Infinite, -Infinite
const nan = 0/0 // NaN
const inf = 1/0 // Infinity
const negInf = -1/0 // -Infinity

// 2. 字符串
const str1 = "WTF"; // 双引号（推荐）
const str2 = 'Academy'; // 单引号
const str3 = `JavaScript`; // 反引号（模板字符串）
// 模版字符串
const name = "0xAA";
const age = 18;
const template = `姓名 ${name}，年龄 ${age}。`;
console.log(template); // 姓名 0xAA，年龄 18。

// 3. 布尔值
const bool1 = true;
const bool2 = false;