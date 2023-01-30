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
