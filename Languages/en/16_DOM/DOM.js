const el = document.getElementById('myId')
const elBySelector = document.querySelector('#myId')

const els = document.getElementsByClassName('myClass')
const elsByTag = document.getElementsByTagName('div')
const elsBySelectorAll = document.querySelectorAll('.myClass')

el.innerHTML = '<strong>Hello, World!</strong>' // Modify HTML content
el.textContent = 'Hello, World!' // Modify text content

el.style.color = 'red' // Modify text color
el.style.backgroundColor = 'black' // Modify the background color

const newEl = document.createElement('div') // Create a new element
document.body.appendChild(newEl) //Add new element

const oldEl = document.querySelector('#myId')
document.body.removeChild(oldEl) // Delete element

window.open('https://wtf.academy', '_blank') // Open WTF Academy in a new window

const width = window.innerWidth // Get window width
const height = window.innerHeight // Get window height

console.log(`Window width: ${width}, window height: ${height}`)

setTimeout(() => {
   console.log('Hello, WTF JavaScript!')
}, 1000) // Output Hello, WTF JavaScript! after 1 second!

setInterval(() => {
   console.log('Hello, WTF JavaScript!')
}, 1000) // Output Hello, WTF JavaScript! every 1 second!
