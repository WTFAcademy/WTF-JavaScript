// Object definition
// empty object
const empty = {}
// Object containing 3 properties
const intro = {
   name: '0xAA',
   age: 1,
   isDeveloper: true,
}
// Object containing methods
const wtf = {
   name: `WTF JavaScript`,
   hello: function(){
     return "Hello JavaScript!";
   }
}

// read
//Read properties
console.log(intro['name']) // Note that `name` is a string with quotes
console.log(intro.name) // Note that there are no quotes in this way of writing
// use function
console.log(wtf.hello()) // "Hello JavaScript!"

// write
intro.age = 99;
console.log(intro.age) // 99
//Add the gender key-value pair in the intro object
intro.gender = "male";
console.log(intro.gender) // "male"

// traverse
for(let key in intro){
   console.log('data '+ key + ': ' + intro[key])
}
// Another way
const keys = Object.keys(intro);
for(let i = 0; i < keys.length; i++){
   console.log('data '+ keys[i] + ': ' + intro[keys[i]])
}

// delete
delete wtf.name;
// or delete wtf["name];
console.log(Object.keys(wtf)); // hello
