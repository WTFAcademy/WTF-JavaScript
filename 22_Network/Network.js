const axios = require('axios');

axios.get('https://api.github.com/search/users?q=amazingang')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });