# WTF JavaScript Minimalist Tutorial 16. DOM

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In JavaScript, DOM (Document Object Model) and BOM (Browser Object Model) are two important concepts. The DOM is used to access and manipulate elements in an HTML document, while the BOM provides methods and properties for interacting with the browser window. This section will introduce the basic concepts of DOM and BOM to help you better understand and use them.

HTML code used in this lecture:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>DOM And BOM</title>
</head>
<body>
   <div id="myId"></div>
   <div class="myClass"></div>
   <div class="myClass"></div>
   <script src="./DOMAndBOM.js"></script>
</body>
</html>
```

## DOM

DOM (Document Object Model) is an API for representing and manipulating HTML and XML documents. It represents a document as a tree structure consisting of nodes and objects (including elements, attributes, text, etc.). By manipulating the DOM, JavaScript can dynamically add, delete, and modify HTML.

### Select elements

First, you need to know how to select the elements you want to operate on. JavaScript provides several ways to select elements:

| Method | Description |
|-----------------------|----------------------- --------------------------------------------------|
| getElementById | Selects an element based on its id. |
| getElementsByClassName | Selects elements based on their class names and returns a NodeList containing all matching elements. |
| getElementsByTagName | Selects elements based on their tag names and returns a NodeList containing all matching elements. |
| querySelector | Selects elements using a CSS selector, returning only the first matching element. |
| querySelectorAll | Selects elements using a CSS selector, returning a NodeList containing all matching elements. |

For example:

```javascript
const el = document.getElementById('myId') // Select the div element with id 'myId'
const elBySelector = document.querySelector('#myId') // Select the div element whose selector is 'myId', and the value returns the first matching element

const els = document.getElementsByClassName('myClass') // Select all div elements with class 'myClass'
const elsByTag = document.getElementsByTagName('div')
const elsBySelectorAll = document.querySelectorAll('.myClass')
```

### Modify content

Once an element is selected, you can modify its content. You can modify the HTML or text content of an element through the `innerHTML` or `textContent` attributes.

```javascript
const el = document.querySelector('#myId')
el.innerHTML = '<strong>Hello, WTF JavaScript!</strong>' // Modify HTML content
el.textContent = 'Hello, WTF JavaScript!' // Modify text content
```

### Modify style

You can also modify the style of an element by manipulating the `style` attribute. Note that all CSS property names need to be converted to camelCase.

```javascript
const el = document.querySelector('#myId')
el.style.color = 'red' // Modify text color
el.style.backgroundColor = 'black' // Modify the background color
```

### Adding and removing elements

You can dynamically add and remove elements using the `createElement`, `appendChild` and `removeChild` methods.

```javascript
const newEl = document.createElement('div') // Create a new element
document.body.appendChild(newEl) //Add new element

const oldEl = document.querySelector('#myId')
document.body.removeChild(oldEl) // Delete element
```

## BOM

BOM (Browser Object Model) is a programming interface that represents a browser and its components. The BOM allows developers to control browser behavior and interactions, such as popping up new windows, obtaining the size of the browser window, etc. The core object of the BOM is window, which represents a browser window or a frame. Here are some common BOM manipulation examples:

###Open new window

You can open a new window via the `window.open` method.

```javascript
window.open('https://wtf.academy', '_blank') // Open WTF Academy in a new window
```

### Get and set window size

You can get the width and height of the window through the `window.innerWidth` and `window.innerHeight` properties.

```javascript
const width = window.innerWidth // Get window width
const height = window.innerHeight // Get window height

console.log(`Window width: ${width}, window height: ${height}`)
```

### Set timer

You can set timers through the `setTimeout` and `setInterval` methods.

```javascript
setTimeout(() => {
   console.log('Hello, WTF JavaScript!')
}, 1000) // Output Hello, WTF JavaScript! after 1 second!

setInterval(() => {
   console.log('Hello, WTF JavaScript!')
}, 1000) // Output Hello, WTF JavaScript! every 1 second!
```

## Summary

In this section we introduce the basic concepts of DOM and BOM and some common operations. By mastering the DOM and BOM, you'll be able to use JavaScript for web development more effectively, creating richer user interfaces and interactive experiences.
