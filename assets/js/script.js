// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDiv = document.querySelectorAll('.game-cell');

// game constants
const xSymbol = '×';
const oSymbol = '○';

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
      const bottomRight = cellDivs[8].classList[1];

// check winner
if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDiv[0].classList.add('won');
    cellDiv[1].classList.add('won');
    cellDiv[2].classList.add('won');
} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDiv[3].classList.add('won');
    cellDiv[4].classList.add('won');
    cellDiv[5].classList.add('won');
} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    
}
}
}



    }






















































// event handlers




























// event listeners




