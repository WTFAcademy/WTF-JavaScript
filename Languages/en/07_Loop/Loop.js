/** while */
{
   console.log("for loop");
   for (let i = 0; i < 10; i++) {
     console.log(`i current value is: ${i}`);
   }
}
//The current value of i is: 0
//The current value of i is: 1
// ...
//The current value of i is: 9

/** while */
{
   console.log("while loop");
   let i = 0
   while (i < 10) {
     console.log(`i current value is: ${i}`)
     i++
   }
}

/** do-while */
{
   console.log("do-while loop");
   let i = 0
   do {
     console.log(`i current value is: ${i}`);
     i++;
   } while (i < 9)
}
/** break */
{
   for (let i = 0; i < 3; i++) {
     console.log(`i current value is: ${i}`);
     if (i === 2) break;
   }
}

/** continue */
{
   for (let i = 0; i < 10; i++) {
     if (i % 2 === 0) continue
     console.log(`i current value is: ${i}`)
   }
   }
