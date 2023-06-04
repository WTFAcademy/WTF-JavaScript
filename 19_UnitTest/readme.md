# WTF JavaScript 极简教程 19. 单元测试

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.wtf.academy/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

单元测试是软件开发中的一种关键实践，它可以帮助你确保你的代码在修改或添加新特性后仍然能正常工作。在 JavaScript 中，有多种测试框架可以帮助你进行单元测试，其中包括 Jest, Mocha 和 Chai。在这一章中，我们将介绍如何使用这些工具进行单元测试。

## Jest

Jest 是由 Facebook 开发的一个 JavaScript 测试框架，它提供了包括断言、模拟和覆盖率信息等在内的一整套测试功能。下面是一个简单的 Jest 测试案例：

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

在上述代码中，我们首先引入了我们想要测试的 `sum` 函数。然后，我们定义了一个测试案例，描述了我们正在测试的情况。`expect` 函数用于对结果进行断言，`toBe` 是一个比较函数，用于比较 `expect` 的参数和 `toBe` 的参数是否相等。

## Mocha

Mocha 是另一种流行的 JavaScript 测试框架，它的主要特点是灵活性高，可以和多种断言库（如 Chai）和模拟工具一起使用。以下是一个使用 Mocha 的测试案例：

```javascript
const assert = require('assert');
const sum = require('./sum');

describe('Sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    assert.equal(sum(1, 2), 3);
  });
});
```

在这个例子中，我们使用 `describe` 来分组相关的测试案例，`it` 则用来定义一个具体的测试案例。断言是通过 Node.js 的内置 `assert` 模块进行的。

## Chai

Chai 是一个流行的断言库，它可以配合任何 JavaScript 测试框架使用。Chai 提供了一系列的断言方法，让你的测试代码更加语义化和易读。以下是一个使用 Mocha 和 Chai 的测试案例：

```javascript
const chai = require('chai');
const expect = chai.expect;
const sum = require('./sum');

describe('Sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).to.equal(3);
  });
});
```

在这个例子中，我们使用了 Chai 的 `expect` 接口来进行断言。你可以看到，Chai 的断言方式非常直观和易读。

总的来说，单元测试是一个重要的开发实践，它可以帮助你保证代码的质量和稳定性。Jest, Mocha 和 Chai 是 JavaScript 开发者常用的一些测试工具，可以帮助你更方便地编写和管理测试

案例。