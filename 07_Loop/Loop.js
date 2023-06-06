/** while */
{
  console.log("for循环");
  for (let i = 0; i < 10; i++) {
    console.log(`i 当前的值为：${i}`);
  }
}
// i 当前的值为：0
// i 当前的值为：1
// ...
// i 当前的值为：9

/** while */
{
  console.log("while循环");
  let i = 0
  while (i < 10) {
    console.log(`i 当前的值为：${i}`)
    i++
  }  
}

/** do-while */
{
  console.log("do-while循环");
  let i = 0
  do {
    console.log(`i 当前的值为：${i}`);
    i++;
  } while (i < 9)
}
/** break */
{
  for (let i = 0; i < 3; i++) {
    console.log(`i 当前的值为：${i}`);
    if (i === 2) break;
  }
}

/** continue */
{
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue
    console.log(`i 当前的值为：${i}`)
  }
  }
