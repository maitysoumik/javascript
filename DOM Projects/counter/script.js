const buttonEl = document.querySelectorAll('button');
const displayEl = document.querySelector('h2');
// console.log(buttonEl);
let value = 0;

buttonEl.forEach((item) => {
    item.addEventListener('click', () => { 
        const id = item.id;
        // console.log(id);
        if(id === "decrement") {
            value --;
        }
        else if(id === 'increment') {
            value++;
        }
        else {
            value = 0;
        }
        displayEl.textContent = value;
        colorize();
    })
})
function colorize() {
    if(value === 0) {
        displayEl.style.color = 'blue';
    }
    else if(value > 0) {
        displayEl.style.color = 'green';
    }
    else {
        displayEl.style.color = 'red';
    }
}