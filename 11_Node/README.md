# WTF JavaScript 极简教程 11. Node.js

WTF JavaScript 教程，帮助新人快速入门 JavaScript。

**推特**：[@WTFAcademy_](https://twitter.com/WTFAcademy_) ｜ [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy 社群：** [官网 wtf.academy](https://wtf.academy/) | [WTF Solidity 教程](https://github.com/AmazingAng/WTFSolidity) | [discord](https://discord.gg/5akcruXrsk/) | [微信群申请](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

所有代码和教程开源在 github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Node.js 或 Node 是一个开源的、跨平台的 JavaScript 运行环境，它让 JavaScript 可以脱离浏览器环境在服务器上运行。在这一章中，我们将介绍 Node.js 的基础知识，包括如何安装和使用 Node.js，以及如何使用 npm（Node 包管理器）管理项目的依赖。

## 安装Node.js

首先，你需要在你的电脑上安装 Node.js。你可以从 Node.js 的官方网站（https://nodejs.org/zh-cn） 下载对应你的操作系统的安装包，并按照提示进行安装。

安装完成后，你可以在命令行中输入 `node -v` 来查看你的 Node.js 版本：

```bash
$ node -v
v18.16.0
```

## Node.js REPL

Node.js 提供了一个交互式运行环境，叫做 REPL（Read-Eval-Print Loop）。在 REPL 中，你可以输入并执行 JavaScript 代码，查看代码的执行结果。

要启动 Node.js REPL，你只需要在命令行中输入 `node`，然后就可以开始输入 JavaScript 代码了：

```bash
$ node
> console.log('Hello, WTF Node.js!');
Hello, WTF Node.js!
```

## Node.js 模块

在 Node.js 中，每个文件都是一个模块。你可以使用 `require` 函数导入其他模块，使用 `module.exports` 或 `exports` 导出模块：

```javascript
// lib.js
module.exports = 'Hello, WTF Node.js!';

// app.js
let message = require('./lib');
console.log(message);  // 输出 'Hello, WTF Node.js!'
```

在上面的例子中，我们创建了两个 `js` 文件 `lib.js` 和 `app.js`，你可以在命令行输入 `node app.js`，会得到输出 'Hello, WTF Node.js!'。

## npm（Node 包管理器）

npm 是 Node.js 的默认包管理器。你可以使用 npm 来安装和管理你的项目的依赖。在命令行中输入 `npm -v` 可以查看你的 npm 版本：

```bash
$ npm -v
8.11.0
```


要使用 npm 创建一个新的项目，你可以使用 `npm init` 命令。这个命令会引导你创建一个 `package.json` 文件，这个文件用来保存你的项目的配置和依赖信息。

要安装一个新的依赖，你可以使用 `npm install` 命令：

```bash
$ npm install express
```

## 总结

这一讲，我们介绍了 Node.js 的基础知识。掌握 Node.js，你就可以使用 JavaScript 来创建服务器端的应用/脚本，这将大大扩展你的 JavaScript 编程能力。
