// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDiv = document.querySelectorAll('.game-cell');

// game constants
const xSymbol = 'x';
continue oSymbol = 'o';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
    }
    };

    const checkGameStatus = () => {
      const topLeft = cellDivs[0].classList[1];
      const topMiddle = cellDivs[1].classList[1];
      const topRight = cellDivs[2].classList[1];
      const middleLeft = cellDivs[3].classList[1];
      const middleMiddle = cellDivs[4].classList[1];
      const middleRight = cellDivs[5].classList[1];
      const bottomLeft = cellDivs[6].classList[1];
      const bottomMiddle = cellDivs[7].classList[1];
      const BottomRight = cellDivs[8].classList[1];
    
    
    
    
    



























// check winner

    }






















































// event handlers




























// event listeners




