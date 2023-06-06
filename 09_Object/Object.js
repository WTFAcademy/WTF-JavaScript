// 对象的定义
// 空对象
const empty = {}
// 包含 3 个属性的对象
const intro = {
  name: '0xAA',
  age: 1,
  isDeveloper: true,
}
// 包含方法的对象
const wtf = {
  name: `WTF JavaScript`,
  hello: function(){
    return "Hello JavaScript!";
  }
}

// 读取
// 读取属性
console.log(intro['name']) // 注意 `name` 是个字符串，有引号
console.log(intro.name) // 注意这种写法没有引号
// 使用函数
console.log(wtf.hello()) // "Hello JavaScript!"

// 写入
intro.age = 99;
console.log(intro.age) // 99
// 在 intro 对象中添加 gender 键值对
intro.gender = "male";
console.log(intro.gender) // "male"

// 遍历
for(let key in intro){
  console.log('data '+ key + ': ' + intro[key])
}
// 另一种方法
const keys = Object.keys(intro);
for(let i = 0; i < keys.length; i++){
  console.log('data '+ keys[i] + ': ' + intro[keys[i]])
}

// 删除
delete wtf.name;
// 或 delete wtf["name];
console.log(Object.keys(wtf)); // hello