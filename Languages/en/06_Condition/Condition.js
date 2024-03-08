/** if */
let x = 1;
if (x > 0) {
   x = x + 1;
}
console.log(x); // 2

/** if else */
let y = 1;
if (y != 1) {
   y = y + 1;
} else {
   y = y - 1;
}
console.log(y); // 0

/** else if */
const z = 2;
if (z === 0) {
   console.log('x value is 0');
} else if (z === 1) {
   console.log('x value is 1');
} else if (z === 2) {
   console.log('x value is 2');
} else {
   console.log('x is other value');
}


/** Ternary operator */
// Return the larger number between x and z
const bigger = x < z ? z : x;
console.log(bigger);
