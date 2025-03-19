// console.log(window);
// console.log(window.document);
// console.dir(document);

// document.body.textContent
// document.body.innerText
// document.body.innerHTML

//These things are not read-only. You can manipulate them as well.

// console.log(document.body.innerText);
// document.body.innerHTML = '<h2>Sample Heading 2</h2>'

// document.write('Hello World');

//---------------------------------------------------

// DOM Single Element Selectors:

// a) document.getElementById('');
// b) document.querySelector(''); //Gets the 1st occurance of the specified selector if multiple is present.

// console.log(document.getElementById('heading'));
// document.getElementById('heading').id = "headline-1";

//Get Attributes:

// console.log(document.getElementById('heading').getAttribute("id"));

//Set Attribute:

// document.getElementById('heading').setAttribute('title', 'heading');
// console.log(document.getElementById('heading'));

//We can save the reference in a variable.

// const headEl = document.getElementById('heading');
//headEl.id = "heading-1";

//Changing text/style:

// headEl.innerText = "Demo DOM";
// headEl.innerHTML = "<i> Hello </i> World";
// headEl.style.color = "red";

//console.log(document.querySelector('a').setAttribute("href", "https://www.leetcode.com"));

// const headEl = document.querySelector('#heading');
// console.log(headEl.id);

// const ulEl = document.querySelector('#uList');

//We can use querySelector on other elemets and is not only specific to document object.
// ulEl.querySelector('.child').style.color = 'red';

// ------------------------------------------------------------

// DOM Multiple Element Selectors:
// a) document.querySelectorAll(''); 

// const liEl = document.querySelectorAll('.child');
// NodeList will be returned. NodeList behaves exactly like an array.
// Index based accessing is allowed. Also array methods work on NodeList.
// console.log(liEl);
// console.log(liEl[1]);
// console.log(liEl[1].innerText);

// liEl[1].style.color = 'red';

// liEl.forEach(item => item.style.color = 'red');

// const ulEl = document.querySelector('ul');
// const liEl = ulEl.querySelectorAll('li');
// console.log(liEl);

// b) 
// const listEl = document.getElementsByClassName('child');
// console.log(listEl);
//An HTML Collection is getting returned.
// Accessing HTML Collection with index:

// console.log(listEl[0]);

//But array methods dont work for HTMLCollection
// const listArray = Array.from(listEl);
// listArray.forEach( item => console.log(item));

// c)
// const listEl = document.getElementsByTagName('li');
// console.log(listEl);
// console.log(listEl[0]);


// ==============================================
// Day 2

// Traverse the DOM Elements 

// a) From parent to child
// const parentEl = document.querySelector('#uList');

// console.log(parentEl.children);
// console.log(parentEl.childNodes);
// console.dir(parentEl.children);

// parentEl.children[1].innerText = "Child Two";
// parentEl.children[1].style.color = "red";

// parentEl.firstElementChild.innerText = "Child One";
// parentEl.lastElementChild.innerText = "Child Three";

// b) From child to parent.

// const childEl = document.querySelector('.child1');
// console.log(childEl.parentElement);
// childEl.parentElement.style.border = '1px solid black';

// c) Get access to sibling elements

// const secondElement = document.querySelector('li:nth-child(2)');
// console.log(secondElement.previousElementSibling);
// console.log(secondElement.nextElementSibling);

// ==============================================
// Traversing DOM Nodes:

// const parentEl = document.querySelector('#uList');
// console.log(parentEl.childNodes);

// const secondElement = document.querySelector('li:nth-child(2)');
// console.log(secondElement.previousSibling);
// console.log(secondElement.nextSibling);

// ==============================================
// Creating and Appending Elements

//a) create element

// const divEl = document.createElement('div');
// divEl.id = "child";
// divEl.setAttribute('title', 'Current Div');
// console.log(divEl);

//add text to your element.

// divEl.innerText = "Sample Text";
// console.log(divEl);

// const textEl = document.createTextNode("Hello World");


// b) Append Elements into another element ot into DOM

// divEl.appendChild(textEl);
// console.log(divEl);

// const parentEl = document.querySelector('#parent');
// parentEl.appendChild(divEl);

// c) Other ways of inserting elements in DOM

/*
    insertAdjacentElement()
    insertAdjacentHTML()
    insertAdjacentText()

    These funtions take in 2 arguments:
        - Insert Position( 1 of 4 )
        - Element/HTML/Text to be inserted.

    4 positions:
    <!-- beforebegin -->
    <div>
        <!-- afterbegin -->
        ....
        ....
        <!-- beforeend -->
    </div>
    <!-- afterend -->
*/
// const h1El = document.createElement('h1');
// h1El.textContent = 'Demo Text Within Demo Element';

// const parentEl = document.querySelector('#parent');
// parentEl.insertAdjacentElement('beforeend', h1El);

// parentEl.insertAdjacentHTML('afterbegin', "<h2>Text Afterbegin</h2>");

// ==============================================
// Replace DOM Elements

// a) replaceWith()
// const newEl = document.createElement('li');
// newEl.textContent = 'Replaced Child 1';
// const firstEl = document.querySelector('li:first-child');
// firstEl.replaceWith(newEl);

// b)Outer HTML

// const secondEl = document.querySelector('.child2');
// secondEl.outerHTML = '<li>Replaced Child 2</li>';

// Activity: Replace all the <li> s with new <li> with same class name but the text should be like "Replaced Child 1", "Replaced Child 2", ...AbortController

// const fullListEl = document.querySelectorAll('.child');
// console.log(fullListEl);
// fullListEl.forEach((item,index) => {
//     item.outerHTML = `<li class="child child${index+1}">Replaced Child ${index + 1}</li>`;
// })

// ==============================================

// Removing DOM Elements:

// .remove()
// .removeChild() - Applied on the parent element.

// const btnEl = document.querySelector('button');
// btnEl.remove();

// const ulEl = document.querySelector('ul');
// const firstLiEl = ulEl.querySelector('li:first-child');
// ulEl.removeChild(firstLiEl);

// ==============================================

// function run() {
    // const divEl = document.querySelector('div');
    // divEl.className = 'dark'; //returns a string with all the class names.

    // console.log(divEl.classList); // returns a DOMTokenList. DOMTokenList acts as an array and array methods are also available.

    // divEl.classList.add('hidden');
    // divEl.classList.remove('light');
    // divEl.classList.toggle('dark');
    // divEl.classList.replace('light', 'dark');
    // console.log(divEl.className);

// }



