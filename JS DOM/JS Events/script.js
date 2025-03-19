// console.log("Connected...")
// Actions or occurrences that happen in the system you are programming.
// Eg:
// - Clicking on an Element.
// - Typing into a text-field.
// - Hovering over an Element.
// - Submitting a form.
// - Closing a window.
// - Dragging an Element.

// There are three ways of looking for an event to occur.

// 1. In your HTML element using attributes.
// 2. JS Event Listener
// 3. addEventListerner()

// function run() {
//     alert('Button Clicked');
// }

// const buttonEl = document.querySelector('#btn');
// buttonEl.onclick = run;

// const buttonEl = document.querySelector('#btn');
// buttonEl.addEventListener('dblclick', run);

// Difference between method 2 and method 3

// const buttonEl = document.querySelector('#btn');
// buttonEl.onclick = function() {
//     console.log("Hello JS");
// }
// buttonEl.onclick = function() {
//     console.log("Hello Java");
// }

// buttonEl.addEventListener('click', (event)=>{
//     console.log(event.currentTarget);
// })

// const ulEl = document.querySelector('ul');
// ulEl.addEventListener('click', (event) => { 
//     console.log(event.offsetX);
//     console.log(event.offsetY);
// })
// buttonEl.addEventListener('click', ()=>{
//     console.log("Hello Java");
// })

/*
    target - The element that triggered the event.
    currentTarget - The element that the event listener is attached to.
    type - The type of the event that was triggered.
    timeStamp - The time the event was triggered.
    clientX - The x position of the mouse click relative to the window.
    clientY - The y position of the mouse click relative to the window.
    offsetX - The x position of the mouse click relative to the element.
    offsetY - The y position of the mouse click relative to the element.
*/

// const buttonEl = document.querySelector('#btn');
// buttonEl.addEventListener('click', run);
// function run(e) {
//     console.log(e.type);
// }
// ================================================================


// function abc() {
//     console.log('abc');
// }
// const linkEl = document.querySelector('a');
// linkEl.addEventListener('click', (event) => {
//     event.preventDefault();
// });

// ================================================================
// Event Bubbling

// const ulEl = document.querySelector('ul');
// const liEl = document.querySelector('.child1');
// ulEl.addEventListener('click', function() {
//     alert("UL Elment is clicked")
// });
// liEl.addEventListener('click', function(e){
//     alert("LI Elment is clicked");
//     e.stopPropagation();
// });
// document.body.addEventListener('click', function() {
//     alert("Body was clicked")
// });

// ================================================================
// Event Delegation

// const listEl = document.querySelectorAll('.child');
// console.log(listEl);
// listEl.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     })
// })

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})

