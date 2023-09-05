# WTF JavaScript 极简教程 19. 单元测试

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

所有人都会写出有 bug 的代码，如何测试你写的程序是否能正常运行就非常重要了。在 JavaScript 中，有多种测试框架可以帮助你进行单元测试（Unit Test），其中包括 Jest, Mocha 和 Chai。在这一章中，我们将介绍如何使用这些工具进行单元测试。

## 什么是单元测试

单元测试（Unit Testing）是软件测试的一种方法，它的基本原理是将程序分解成独立的可测试的模块（或者称为“单元”），然后对这些模块进行单独和独立的测试。这些模块一般是函数、方法、类、模块等代码组织单元。

在 JavaScript 中，单元测试通常涉及到对单个函数或对象方法的测试，以验证其是否正常工作。这些测试一般会检查函数的返回值、副作用、错误抛出等情况，以确保函数的行为符合预期。

## 为什么需要单元测试

单元测试有许多优点，以下是其中的一些：

1. **确保代码质量**：单元测试可以帮助我们发现代码的缺陷和问题，从而提高代码的质量。对每个模块进行详细的测试可以确保每个组件都按照预期工作。

2. **简化重构**：当我们需要修改或重构代码时，如果有一套完整的单元测试，就可以迅速检查修改后的代码是否仍然符合预期，这大大降低了重构的风险。

3. **提升开发速度**：虽然编写单元测试需要时间，但长期来看，它可以帮助我们更快地开发和维护代码。有了单元测试，我们可以更有信心地进行修改和优化，而不必担心无意中破坏了现有的功能。

4. **文档化代码**：良好的单元测试可以作为一种形式的文档，显示函数或方法应该如何使用，以及在给定输入时应该返回什么。

单元测试是一种预防性的工作，它能够提前发现并修复问题，从而防止问题在产品中出现，对于任何想要保证代码质量的项目来说，都是必不可少的一环。

## Jest

Jest 是由 Facebook 开发的一个 JavaScript 测试框架，它提供了包括断言、模拟和覆盖率信息等在内的一整套测试功能。

要使用 Jest，首先你需要通过 yarn 或 npm 安装它：
```shell
yarn add --dev jest
## 或者
npm install --save-dev jest
```

然后我们写一个求和函数，保存为 `sum.js` 用来测试：

```javascript
function sum(a, b) {
    return a + b;
  }

module.exports = sum;
```

在测试代码中，引入想要测试的 `sum` 函数，然后定义一个测试案例来描述测试的情况。`expect` 函数用于对结果进行断言，`toBe` 是一个比较函数，用于比较 `expect` 的参数和 `toBe` 的参数是否相等。将测试代码保存为 `sum.test.js`

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

接下来，我们要修改 `package.json` 文件，加上下面这项：

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

添加完后，你的 `package.json` 可能长这样:
```json
{
    "name": "wtf-javascript",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "test": "jest"
    },
    "dependencies": {
        "jest": "^29.5.0"
    }
}
```

最后，你可以在命令行运行 `yarn test` 或 `npm test` 开始测试，你会看到测试通过的信息:

```shell
> wtf-javascript@1.0.0 test
> jest

 PASS  19_UnitTest/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.366 s, estimated 1 s
```

注意，Jest 仅支持 `CommonJS` 语法，默认不支持 `ES` 的语法，包括 `import` 和 `export`。

## Mocha

Mocha 是另一种流行的 JavaScript 测试框架，它的主要特点是灵活性高，可以和多种断言库（如 Chai）和模拟工具一起使用。

首先，你需要安装 `mocha` 包:

```shell
npm install mocha
```

在根目录下创建一个 `test` 文件夹，将下面代码保存到 `mocha_test.js` 文件中：

```javascript
import assert from 'assert';

function sum(a, b) {
  return a + b;
}

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
      assert(sum(1, 2) === 3);
    });
  });
```

在这个例子中，我们使用 `describe` 来分组相关的测试案例，`it` 则用来定义一个具体的测试案例。断言是通过 Node.js 的内置 `assert` 模块进行的。

接下来，我们要修改 `package.json` 文件，加上下面这项：

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

然后运行 `npm test` 进行测试：

```shell
> wtf-javascript@1.0.0 test
> mocha



  sum
    ✔ adds 1 + 2 to equal 3


  1 passing (4ms)
```

## Chai

[Chai](https://www.chaijs.com/) 是一个流行的断言库，它可以配合任何 JavaScript 测试框架使用。Chai 提供了一系列的断言方法，让你的测试代码更加语义化和易读。你可以使用 npm 安装 Chai：

```bash
npm install chai
```

Chai 提供了三种断言风格：Should、Expect 和 Assert。下面我们分别介绍他们。

### Should

Should 风格将断言函数绑定到被测试对象的原型上。因此，你可以在任何对象上调用 should 方法。以下是一个例子：

```javascript
const chai = require('chai');
const should = chai.should();

(5).should.be.a('number');
```

### Expect

Expect 风格提供了一种更传统的、功能更强大的方式来编写断言。它允许更具描述性的断言，以及更深层次的比较。以下是一个例子：

```javascript
const chai = require('chai');
const expect = chai.expect;

expect(5).to.be.a('number');
```

### Assert

Assert 风格是对 Node.js 的内置 assert 模块的扩展。这种风格的断言更符合传统的编程观念，非常适合那些喜欢使用类似于 Node.js 的 assert 函数的开发者。以下是一个例子：

```javascript
const chai = require('chai');
const assert = chai.assert;

assert.typeOf(5, 'number');
```

## 总结

这一讲，我们介绍了 JavaScript 中的单元测试，它可以帮助你保证代码的质量和稳定性。Jest, Mocha 和 Chai 是 JavaScript 开发者常用的一些测试工具，可以帮助你更方便地编写和管理测试案例。