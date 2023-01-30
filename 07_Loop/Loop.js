/** while */
{
  let i = 0

  while (i < 3) {
    console.log(`i 当前的值为：${i}`)
    i++
  }

  // i 当前的值为：0
  // i 当前的值为：1
  // i 当前的值为：2
}

/** do while */
{
  let i = 0

  do {
    console.log(`i 当前的值为：${i}`)
    i++
  } while (i < 3)

  // i 当前的值为：0
  // i 当前的值为：1
  // i 当前的值为：2
}

/** for */
{
  for (let i = 0; i < 3; i++) {
    console.log(`i 当前的值为：${i}`)
  }

  // i 当前的值为：0
  // i 当前的值为：1
  // i 当前的值为：2
}

/** break */
{
  let i = 0

  while (i < 3) {
    console.log(`i 当前的值为：${i}`)
    i++
    if (i === 2) break
  }

  // i 当前的值为：0
  // i 当前的值为：1

  for (let i = 0; i < 3; i++) {
    if (i === 2) break
    console.log(`i 当前的值为：${i}`)
  }

  // i 当前的值为：0
  // i 当前的值为：1
}

/** continue */
{
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue

    console.log(`i 当前的值为：${i}`)
  }

  // i 当前的值为：1
  // i 当前的值为：3
  // i 当前的值为：5
  // i 当前的值为：7
  // i 当前的值为：9
}

/** label */
{
  let n = 0

  outPoint: for (let i = 0; i < 10; i++) {
    // i 循环
    for (let j = 0; j < 10; j++) {
      // j 循环
      if (i === 5 && j === 5) {
        break outPoint // 在 i = 5，j = 5 时，跳出所有循环，返回到整个 outPoint 下方，继续执行
      }
      n++
    }
  }

  console.log(n) // 55
}
