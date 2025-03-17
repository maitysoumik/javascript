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


