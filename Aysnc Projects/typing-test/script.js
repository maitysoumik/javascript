const apiUrl = 'http://api.quotable.io/random'

const timerEl = document.querySelector('.timer');
const quoteDisplayEl = document.querySelector('.quote');
const quoteInputEl = document.querySelector('.typing');

async function getRandomQuotes() {
    return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data.content);
}


async function renderNewQuote() {
    const newQuote = await getRandomQuotes();
    quoteDisplayEl.textContent = '';
    newQuote.split('').forEach((character) => {
        const characterSpan = document.createElement('span');
        characterSpan.textContent = character;
        quoteDisplayEl.appendChild(characterSpan);
    })
    quoteInputEl.value = null;
    startTimer();
}

let intervalId;
function startTimer() {
    timerEl.innerText = 0;
    let startTime = new Date();
    intervalId = setInterval(()=> {
       timerEl.innerText = Math.floor((new Date() - startTime)/1000);
    }, 1000)
}
renderNewQuote();

//On input logic:

quoteInputEl.addEventListener('input', ()=> {
    const arrayQuote = document.querySelectorAll('span');
    const typedQuoteArray = quoteInputEl.value.split('');
    let correct = true;

    arrayQuote.forEach((characterSpan, index) => {
        if(typedQuoteArray[index] == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }
        else if (typedQuoteArray[index] === characterSpan.innerText) { 
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else {
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct = false;
        }
    })
    if(correct) {
        renderNewQuote();
        clearInterval(intervalId);
    }


})
