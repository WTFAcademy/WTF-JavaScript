const axios = require('axios');

//Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

//Specify the request method and URL
xhr.open("GET", 'https://api.github.com/search/users?q=amazingang', true);

//Set the callback function to handle the response to the request
xhr.onreadystatechange = function () {
   // Request successful
   if (xhr.readyState == 4 && xhr.status == 200)
     // Process response data
     console.log(JSON.parse(xhr.responseText));
}
// send request
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
