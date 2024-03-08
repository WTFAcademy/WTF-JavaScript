// Simple promise example
const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('WTF Promise resolved');
     }, 1000);
   });
//Print 'Promise resolved' to the console
promise.then(value => console.log(value));


// .then chained calls
promise
   .then(value => {
     console.log(".then chained calls")
     console.log(value);
     return value + 'WTF';
   })
   .then(newValue => console.log(newValue));

// .catch capture errors
promise
   .then(value => {
     throw new Error('WTF Something went wrong');
   })
   .catch(error => console.error(error));
