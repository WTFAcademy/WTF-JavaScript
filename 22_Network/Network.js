const axios = require('axios');

// 创建 XMLHttpRequest 对象
let xhr = new XMLHttpRequest();

// 指定请求的方法和 URL
xhr.open("GET", 'https://api.github.com/search/users?q=amazingang', true);

// 设置回调函数，处理请求的响应
xhr.onreadystatechange = function () {
  // 请求成功
  if (xhr.readyState == 4 && xhr.status == 200)
    // 处理响应数据
    console.log(JSON.parse(xhr.responseText));
}
// 发送请求
xhr.send();

fetch('https://api.github.com/search/users?q=amazingang')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


axios.get('https://api.github.com/search/users?q=amazingang')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
