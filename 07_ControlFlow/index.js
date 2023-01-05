/** if */
{
  let x = 1

  if (x > 0) {
    x = x + 1
  }

  console.log(x) // 2
}

/** if else */
{
  let x = 1

  if (x > 1) {
    x = x + 1
  } else {
    x = x - 1
  }

  console.log(x) // 0
}

/** if else if */
{
  let x = 1

  if (x === 0) {
    console.log('x 的值为 0')
  } else if (x === 1) {
    console.log('x 的值为 1')
  } else if (x === 2) {
    console.log('x 的值为 2')
  } else {
    console.log('x 为其它值')
  }

  // x 的值为 1
}

/** switch */
{
  let x = 1

  switch (x) {
    case 1: // if (x === 1)
      console.log('x 的值为 1')
      break

    case 2: // if (x === 2)
      console.log('x 的值为 2')
      break

    default:
      console.log('x 为其它值')
      break
  }

  // x 的值为 1
}

/** switch 省略 break */
{
  let x = 1

  switch (x) {
    case 1:
      console.log('x 的值为 1')

    case 2:
      console.log('x 的值为 2')

    default:
      console.log('x 为其它值')
  }

  // x 的值为 1
  // x 的值为 2
  // x 为其它值
}

/** switch case 分组 */
{
  let x = 1

  switch (x) {
    case 1:
    case 2:
      console.log('x 的值为 1 或 2')

    default:
      console.log('x 为其它值')
  }

  // x 的值为 1 或 2
}

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
