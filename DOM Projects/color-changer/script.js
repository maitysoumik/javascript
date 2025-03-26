const buttonEl = document.getElementById('change');
const displayEl = document.getElementById('display');

buttonEl.addEventListener('click', ()=>{
    const nextColor = generateRandomColor();
    document.body.style.backgroundColor = nextColor;
    displayEl.textContent = nextColor;
    displayEl.style.color = nextColor;
})

function generateRandomColor() {
    const hexCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) { 
        const randomIndex = Math.floor(Math.random() * 16); //pick a number between 0 to 15
        hexColor += hexCharacters[randomIndex];
    }
    return hexColor;

}