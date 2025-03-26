const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}
let ans = generateRandomNumber();
let guessesRemaining = 3;


const confirmEl = document.getElementById('confirm');
const guessEl = document.getElementById('guess');
const hintEl = document.getElementById('hint');
const resetEl = document.getElementById('reset');


const hintGenerator = () => {
    
    const userGuess = guessEl.value;
    if (userGuess == ans) { 
        hintEl.textContent = 'You won!';
        guessesRemaining = 0;
        guessEl.value = '';
        confirmEl.removeEventListener('click', hintGenerator);
    }
    else if (userGuess < ans) { 
        hintEl.textContent = 'Guess Higher';
    }
    else {
        hintEl.textContent = 'Guess Lower';
    }
    guessesRemaining--;
    if (guessesRemaining == 0) {
        hintEl.textContent = 'You Lost! The answer was ' + ans;
        guessEl.value = '';
        confirmEl.removeEventListener('click', hintGenerator);
    }
}
function resetGuesser() {
    ans = generateRandomNumber();
    guessesRemaining = 3;
    hintEl.textContent = 'Start Guessing';
    guessEl.value = '';
    confirmEl.addEventListener('click', hintGenerator);
    // console.log(ans);
}

resetEl.addEventListener('click', resetGuesser);
confirmEl.addEventListener('click', hintGenerator);

