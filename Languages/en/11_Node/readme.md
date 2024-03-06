# WTF JavaScript Minimalist Tutorial 11. Node.js

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

Node.js or Node is an open source, cross-platform JavaScript runtime environment that allows JavaScript to run on the server outside of the browser environment. In this chapter, we'll cover the basics of Node.js, including how to install and use Node.js, and how to use npm (the Node package manager) to manage your project's dependencies.

## Install Node.js

First, you need to install Node.js on your computer. You can download the installation package corresponding to your operating system from the official website of Node.js (https://nodejs.org/zh-cn) and install it according to the prompts.

After the installation is complete, you can enter `node -v` on the command line to check your Node.js version:

```bash
$ node -v
v18.16.0
```

## Node.js REPL

Node.js provides an interactive running environment called REPL (Read-Eval-Print Loop). In the REPL, you can enter and execute JavaScript code and view the results of the code execution.

To start the Node.js REPL, you just type `node` at the command line and start typing JavaScript code:

```bash
$node
> console.log('Hello, WTF Node.js!');
Hello, WTF Node.js!
```

## Node.js modules

In Node.js, every file is a module. You can import other modules using the `require` function and export modules using `module.exports` or `exports`:

```javascript
//lib.js
module.exports = 'Hello, WTF Node.js!';

// app.js
let message = require('./lib');
console.log(message); // Output 'Hello, WTF Node.js!'
```

In the above example, we created two `js` files `lib.js` and `app.js`. You can enter `node app.js` on the command line and you will get the output 'Hello, WTF Node.js' !'.

## npm (Node package manager)

npm is the default package manager for Node.js. You can use npm to install and manage your project's dependencies. Type `npm -v` on the command line to view your npm version:

```bash
$ npm -v
8.11.0
```


To create a new project using npm, you can use the `npm init` command. This command will guide you to create a `package.json` file, which is used to save the configuration and dependency information of your project.

To install a new dependency, you can use the `npm install` command:

```bash
$ npm install express
```

## Summary

In this lecture, we introduced the basics of Node.js. Mastering Node.js, you can use JavaScript to create server-side applications/scripts, which will greatly expand your JavaScript programming capabilities.
