fetch('https://api.github.com/search/users?q=amazingang', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
