const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let xScore = 0;
let oScore = 0;

squares.forEach(square => {
    square.addEventListener('click', () => {
        const index = Array.from(squares).indexOf(square);
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            if (checkWin()) {
                alert(currentPlayer + ' ganhou!');
                resetGame();
            } else if (checkTie()) {
                alert('Empate!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkTie() {
    return gameBoard.every(value => {
        return value !== '';
    });
}

function resetGame() {
    squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
}


