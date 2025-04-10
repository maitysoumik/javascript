const displayEl = document.querySelector('#display');
const startEl = document.querySelector('#start-btn');
const stopEl = document.querySelector('#stop-btn');
const resetEl = document.querySelector('#reset-btn');

let startTime = 0;
let elaspedTime = 0;
let isRunning = false;
let intervalId;

function startTimer() {
    if(isRunning) return;
    startTime = Date.now() - elaspedTime;
    isRunning = true;
    intervalId = setInterval(()=>{
        elaspedTime = Date.now() - startTime;
        updateDisplay();
    }, 20);
}
//8:25 - Started
//8:26 - Stopped
// elapsedTime = 1*60*1000 = 60000
//00:01:00:00
//8:31 - Start
//startTime = 8:30
//8:32 - Stop
//00:02:00:00
function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
}
function resetTimer() {
    clearInterval(intervalId);
    startTime = 0;
    elaspedTime = 0;
    isRunning = false;
    updateDisplay();
}
function updateDisplay() {
    displayEl.textContent = formatTime();
}
function formatTime() {
    let hours = Math.floor(elaspedTime / (1000 * 3600));
    let minutes = Math.floor((elaspedTime % (1000 * 3600)) / 60000);
    let seconds = Math.floor((elaspedTime % 60000) / 1000);
    let centiseconds = Math.floor((elaspedTime % 1000)/10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    centiseconds = centiseconds < 10 ? '0' + centiseconds : centiseconds;

    return `${hours}:${minutes}:${seconds}:${centiseconds}`;
}
//Adding Event Listeners
startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);


