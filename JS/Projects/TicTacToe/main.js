const cells = document.querySelectorAll(".cellIndex");
const status = document.querySelector("#status");
const result = document.querySelector("#result");
const winCondition = [
    // [0,1,2],
    // [3,4,5],
    // [6,7,8],
    // [0,3,6],
    // [1,4,7],
    // [2,5,8],
    // [0,4,8],
    // [2,4,6]

    [
        1,1,1,
        0,0,0,
        0,0,0
    ],
    [
        0,0,0,
        1,1,1,
        0,0,0
    ],
    [
        0,0,0,
        0,0,0,
        1,1,1
    ],
    [
        1,0,0,
        1,0,0,
        1,0,0
    ],
    [
        0,1,0,
        0,1,0,
        0,1,0
    ],
    [
        0,0,1,
        0,0,1,
        0,0,1
    ],
    [
        1,0,0,
        0,1,0,
        0,0,1
    ],
    [
        0,0,1,
        0,1,0,
        1,0,0
    ],
];
const cellValue = [0,0,0,0,0,0,0,0,0];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let running = false;

function cellClicked() {
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            const cellIndex = this.getAttribute('grid');
            console.log(cellIndex);

            options[cellIndex] = currentPlayer;
            console.log(options);

            if(currentPlayer === 'X'){
                cellValue[cellIndex]=1;
                console.log(cellValue);
            }        

            switchPlayer();
            checkWinner();
        });
    });
}

function switchPlayer(){
    switch(currentPlayer){
        case 'X':
            currentPlayer = 'O';
            break;
        default :
            currentPlayer = 'X';
            break;
    }
    console.log(currentPlayer);
}

function checkWinner() {
    for (let condition of winCondition) {
        let isWinner = true;

        for (let i = 0; i < condition.length; i++) {
            if (cellValue[i] !== condition[i]) {
                isWinner = false;
                break;
            }
        }

        if (isWinner) {
            console.log("Win!!!");
            running = true; // Optionally, set running to true to prevent further moves
            break;
        }
    }
}

cellClicked();





















// function updateCell(cell, cellIndex){
    
// }

// function changePlayer(){

// }

// function checkWinner(){

// }

// function restartGame(){

// }

// function InitializeGame(){

// }

