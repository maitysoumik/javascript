const displayEl = document.getElementById('color-display');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');

let intervalId;
let isChanging = false;

function generateRandomColor() {
    const hexCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) { 
        const randomIndex = Math.floor(Math.random() * 16); //pick a number between 0 to 15
        hexColor += hexCharacters[randomIndex];
    }
    return hexColor;

}
function startChange() {
    if (isChanging) {
        return;
    }
    isChanging = true;
    intervalId = setInterval(()=> {
        const newColor = generateRandomColor();
        displayEl.innerText = newColor;
        document.body.style.backgroundColor = newColor;
    }, 1000);
}

function stopChange() {
    isChanging = false;
    clearInterval(intervalId);
}
//Adding Event Listeners
startEl.addEventListener('click', startChange);
stopEl.addEventListener('click', stopChange);