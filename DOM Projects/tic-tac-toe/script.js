const childEl = document.querySelectorAll('.child');
const messageEl = document.querySelector('.message');
const players = ['X', 'O'];
let currentPlayer = players[0];
const winningPatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

childEl.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(item.textContent !== '') {
            return;
        }
        item.textContent = currentPlayer;
        // if(checkWinner(currentPlayer)) {
        //     messageEl.textContent = `Player ${currentPlayer} Won!`;
        //     return;
        // }
        if(checkDraw()) {
            messageEl.textContent = 'It\'s a draw!'; 
            return;
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        if(currentPlayer === players[0]) {
            messageEl.textContent = 'Player X\'s turn';
        }
        else {
            messageEl.textContent = 'Player O\'s turn';
        }
    })
})
function checkDraw() {
    for(let i=0; i<9; i++) {
        if(childEl[i].textContent === '') { 
            return false;
        }
    }
    return true;
}
    

