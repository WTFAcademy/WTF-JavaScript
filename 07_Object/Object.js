
// ## 1. 对象的定义
{
  // 没有元素的空对象
  let empty = {}
  // 存储三个数据对的对象
  let courses = {
    name:'Javacript',
    age:1,
    isfree:true
  } 
}

// 定义了存储数组和对象的嵌套对象
{
  let courses = {
    name:'wtf',
    list:['Solidity','Javascript'],
    next:{
      name:'React',
      isfree:true
    }
  }
}



// ## 2.对象的读写
{
  let courses = {
    name:'wtf',
    list:['Solidity','Javascript'],
    next:{
      name:'React',
      isfree:true
    }
  }
  console.log(courses['name']) // wtf 注意name是个字符串
  console.log(courses.name) // wtf 这种写法没有引号

  console.log(courses.list[0]) // Solidity
  console.log(courses.next.name) // React 嵌套对象
}

// ## 对象的遍历
{
  let obj = {
    name:'Javascript',
    type:'frontend',
    isfree:true
  }
  for(let key in obj){
    console.log('key '+key+': ' + obj[key])
  }
}


// ## 对象的增加和修改
{
  let obj = {
    name:'Javascript'
  }

  obj.name = 'Wtf-Javascript' // name存在，就是修改
  obj.type = 'frontend'  // name不存在 就是创建
  console.log(obj) // {name: 'Wtf-Javascript', type: 'frontend'}
}