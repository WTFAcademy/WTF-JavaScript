try {
  // 可能会抛出错误的代码
  const a = 1
  a() // 这里会抛出一个 TypeError
} catch (error) {
  // 处理错误
  console.log(error.message) // 输出 'a is not a function'
}

try {
  // 可能会抛出错误的代码
  const a = 1
  a() // 这里会抛出一个 TypeError
} catch (error) {
  // 处理错误
  console.log(error.message) // 输出 'a is not a function'
} finally {
  // 无论是否抛出错误，这里都会被执行
  console.log('执行完毕')
}

function divide(x, y) {
  if (y === 0) {
    throw new Error('除数不能为 0')
  }
  return x / y
}

try {
  const result = divide(10, 0)
  console.log(result)
} catch (error) {
  console.log(error.message)
}
