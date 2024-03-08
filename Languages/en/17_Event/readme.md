# WTF JavaScript Minimalist Tutorial 17. Events

WTF JavaScript tutorial helps newcomers get started with JavaScript quickly.

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | [@0xAA_Science](https://twitter.com/0xAA_Science)

**WTF Academy Community:** [Official website wtf.academy](https://wtf.academy/) | [WTF Solidity Tutorial](https://github.com/AmazingAng/WTFSolidity) | [discord](https ://discord.gg/5akcruXrsk/) | [WeChat group application](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)

All codes and tutorials are open source on github: [github.com/WTFAcademy/WTF-Javascript](https://github.com/WTFAcademy/WTF-Javascript)

---

In web development, an event is some action performed by the user or the browser itself, such as clicking a button, submitting a form, or triggering a mouseover effect, etc. Understanding event handling is key to creating interactive websites.

HTML code used in this lecture:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Event</title>
</head>
<body>
   <button>Click me! </button>

   <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li>
   </ul>
   <script src="./Event.js"></script>
</body>
</html>
```

## Three elements of event

In JavaScript, processing events mainly includes three elements: event source, event type and event handler.

1. **Event Source**: The event source refers to the object that triggers the event, that is, the HTML element that the user interacts with, such as a button, a link, a text box, etc.

2. **Event Type**: The event type represents the specific behavior of the event, such as click, mouseover, keydown, etc. These event types are predefined by the browser, we just need to use them.

3. **Event Handler**: The event handler is the operation we want to perform when the event is triggered, that is, the function used to respond to an event. This function will be called when the event occurs.

These three elements work together to complete a complete event processing. For example, when the user clicks a button (event source) (the event type is click event), we hope to pop up a prompt box (event handler).

Here is a specific example:

```javascript
const btn = document.getElementById('myButton'); // Event source

//The event type is 'click'
btn.onclick = function() { // event handler
     alert('You clicked the button!'); // Operation performed
};
```

In this example, the button is the event source, clicking the button ('click') is the event type, and popping up an alert box is the event handler.

## Event listener

In JavaScript, we use event listeners to handle these events. An event listener is a function that is triggered when a specific event occurs. We use the `addEventListener` method to specify event listeners. Here is an example of a simple click event listener:

```javascript
const button = document.querySelector('button')
button.addEventListener('click', function () {
   alert('Button clicked!')
})
```

In this example, when the user clicks the button, a warning window pops up.

## Event object

When an event is triggered, the browser creates an event object and passes it as a parameter to the event listener. The event object contains detailed information about the event, such as the position of the mouse, or the keys the user pressed. For example:

```javascript
button.addEventListener('click', function (event) {
   console.log('Event type:', event.type)
   console.log('Target element:', event.target)
   console.log(`Mouse click position (${event.clientX}, ${event.clientY})`)
})
```

In this example, we print out the event type, the target element, and the location of the mouse click.

## Event bubbling and capturing

In the DOM tree, an event is not only handled on the element it was triggered on, but also propagates up or down to other elements. This phenomenon is called event bubbling (from inside to outside) and event capturing (from outside to inside). We can use the third parameter to set whether the event listener handles events in the bubbling phase or the capturing phase.

```javascript
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
```

## Event delegation

Due to the bubbling nature of events, we can add event listeners to the parent element rather than directly to the actual target element. This technique is called event delegation. This reduces the number of event listeners and makes handling dynamically added elements easier. The following is an example of event delegation:

```javascript
const ul = document.querySelector('ul')
ul.addEventListener('click', function (event) {
   if (event.target.tagName.toLowerCase() === 'li') {
     alert(`The ${event.target.textContent} li was clicked!`)
   }
})
```

In this example, we add an event listener to the ul element instead of adding it to each li element individually.

## Custom events

In addition to the events that come with the browser, we can also create custom events. Custom events can be used to communicate between different components. Here is an example of a custom event:

```javascript
const customEvent = new CustomEvent('myEvent', {
   detail: { message: 'This is a custom event' },
})

document.addEventListener('myEvent', (event) => {
   console.log('Custom event was triggered:', event.detail.message)
})

document.dispatchEvent(customEvent) // Trigger event
```

In this example, we create a custom event called myEvent and fire this event on the document. Then we added an event listener on the document. When the myEvent event is triggered, the details of the event will be printed.

## Summary

This section introduces the basic concepts of JavaScript events, including event listeners, event objects, event bubbling and capturing, event delegation, and custom events. By understanding these concepts, you can take advantage of JavaScript events to enhance web page interactions.
