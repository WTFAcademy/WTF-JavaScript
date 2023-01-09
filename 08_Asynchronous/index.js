/** callback */
{
  function callback() {
    console.log('Hello, WTF JavaScript!')
  }

  setTimeout(callback, 1000)

  // Hello, WTF JavaScript! (1 秒后输出)

  setTimeout(() => {
    console.log('Hello, WTF JavaScript!')
    setTimeout(() => {
      console.log('Hello, WTF HTML!')
      setTimeout(() => {
        console.log('Hello, WTF CSS!')
      }, 1000)
    }, 1000)
  }, 1000)

  // Hello, WTF JavaScript! (1 秒后输出)
  // Hello, WTF HTML! (2 秒后输出)
  // Hello, WTF CSS! (3 秒后输出)
}

/** Promise 基本用法 */
{
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  p.then((value) => {
    console.log(value)
  })

  // Hello, WTF JavaScript! (1 秒后输出)
}

/** Promise 同步创建 */
{
  const p = new Promise((resolve, reject) => {
    console.log('Promise 创建了')
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  p.then((value) => {
    console.log(value)
  })

  // Promise 创建了
  // Hello, WTF JavaScript! (1 秒后输出)
}

/** Promise reject */
{
  const p = new Promise((resolve, reject) => {
    reject('发生错误！')
  })

  p.then(
    (value) => {
      console.log(value)
    },
    (error) => {
      console.log(error)
    }
  )

  // 发生错误！
}

/** Promise resolve 后执行 reject */
{
  const p = new Promise((resolve, reject) => {
    resolve('Hello, WTF JavaScript!')
    throw new Error('发生错误！')
  })

  p.then(
    (value) => {
      console.log(value)
    },
    (error) => {
      console.log(error)
    }
  )

  // Hello, WTF JavaScript!
}

/** Promise.catch */
{
  const p = new Promise((resolve, reject) => {
    reject('发生错误！')
  })

  p.then((value) => {
    console.log(value)
  }).catch((error) => {
    console.log(error)
  })

  // 发生错误！
}

/** Promise.finally */
{
  const p = new Promise((resolve, reject) => {
    resolve('Hello, WTF JavaScript!')
  })

  p.then((value) => {
    console.log(value)
  }).finally(() => {
    console.log('finally')
  })

  // Hello, WTF JavaScript!
  // finally
}

/** Promise 链式调用 */
{
  const baseURL = 'https://api.wtf.academy/courses/e1faa656-8c53-45f4-bb4f-950db92bee60'

  fetch(`${baseURL}/lessons`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      const id = res.data.list[0].lesson_id
      return fetch(`${baseURL}/user_lessons/${id}`)
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      const title = res.data.lesson.lesson_title
      console.log(title) // HelloWeb3 (三行代码)
    })
}

/** Promise.all */
{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF HTML!')
    }, 3000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF CSS!')
    }, 2000)
  })

  Promise.all([p1, p2, p3]).then((res) => {
    console.log(res)
  })

  // ['Hello, WTF JavaScript!', 'Hello, WTF HTML!', 'Hello, WTF CSS!'] (3 秒后输出)
}

/** Promise.allSettled */
{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF HTML!')
    }, 3000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, WTF CSS!')
    }, 2000)
  })

  Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res)
  })

  // [
  //   { status: 'fulfilled', value: 'Hello, WTF JavaScript!' },
  //   { status: 'fulfilled', value: 'Hello, WTF HTML!' },
  //   { status: '`rejected`', reason: 'Hello, WTF CSS!' })
  // ] (3 秒后输出)
}

/** Promise.race */
{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF HTML!')
    }, 3000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF CSS!')
    }, 2000)
  })

  Promise.race([p1, p2, p3]).then((res) => {
    console.log(res)
  })

  // Hello, WTF JavaScript! (1 秒后输出)
}

/** Promise.any */
{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF JavaScript!')
    }, 1000)
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, WTF HTML!')
    }, 3000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, WTF CSS!')
    }, 2000)
  })

  Promise.any([p1, p2, p3]).then((res) => {
    console.log(res)
  })

  // Hello, WTF JavaScript! (1 秒后输出)

  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, WTF JavaScript!')
    }, 1000)
  })

  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, WTF HTML!')
    }, 3000)
  })

  const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, WTF CSS!')
    }, 2000)
  })

  Promise.any([p4, p5, p6]).then((res) => {
    console.log(res)
  })

  // AggregateError: All promises were rejected
}

/** Promise.resolve */
{
  Promise.resolve('Hello, WTF JavaScript!')
}

/** Promise.reject */
{
  Promise.reject(new Error('发生错误！'))
}

/** async 函数 */
{
  async function hello() {
    return 'Hello, WTF JavaScript!'
  }

  console.log(hello()) // Promise {<fulfilled>: 'Hello, WTF JavaScript!'}
}

/** await */
{
  async function hello() {
    const value = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello, WTF JavaScript!')
      }, 1000)
    })
    console.log(value)
  }

  hello()

  // Hello, WTF JavaScript! (1 秒后输出)
}

/** async 错误处理 */
{
  async function hello() {
    try {
      const value = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('Hello, WTF JavaScript!')
        }, 1000)
      })
      console.log(value)
    } catch (err) {
      console.log(`错误：${err}`)
    }
  }

  hello()

  // 错误：Hello, WTF JavaScript! (1 秒后输出)
}
