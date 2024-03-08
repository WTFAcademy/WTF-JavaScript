const button = document.querySelector('button')
button.addEventListener('click', function () {
   alert('Button clicked!')
})

button.addEventListener('click', function (event) {
   console.log('Event type:', event.type)
   console.log('Target element:', event.target)
   console.log(`Mouse click position (${event.clientX}, ${event.clientY})`)
})

// Handle events during the bubbling phase
button.addEventListener(
   'click',
   function () {
     alert('The button was clicked during the bubbling stage!')
   },
   false
)

// Handle events during the capture phase
button.addEventListener(
   'click',
   function () {
     alert('The button was clicked during the capture phase!')
   },
   true
)

const ul = document.querySelector('ul')
ul.addEventListener('click', function (event) {
   if (event.target.tagName.toLowerCase() === 'li') {
     alert(`The ${event.target.textContent} li was clicked!`)
   }
})

const customEvent = new CustomEvent('myEvent', {
   detail: { message: 'This is a custom event' },
})

document.addEventListener('myEvent', (event) => {
   console.log('Custom event was triggered:', event.detail.message)
})

document.dispatchEvent(customEvent)
