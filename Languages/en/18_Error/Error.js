let error = new Error("This is an error message");
console.log(error.name); // "Error"
console.log(error.message); // "This is an error message"

try {
   // Code that may throw errors
   const a = 1
   a() // A TypeError will be thrown here
} catch (error) {
   // Handle errors
   console.log(error.message) // Output 'a is not a function'
}

try {
   // Code that may throw errors
   const a = 1
   a() // A TypeError will be thrown here
} catch (error) {
   // Handle errors
   console.log(error.message) // Output 'a is not a function'
} finally {
   // Regardless of whether an error is thrown, this will be executed
   console.log('Execution completed')
}
