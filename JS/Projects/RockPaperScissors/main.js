// Get references to HTML elements
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let button = document.getElementById('btn');
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;

// Array of choices for the game
const array = ["Rock", "Paper", "Scissors"];

let r;
let p;
let s;

// Function to update scores based on game result
function updateScores(result) {
    if (result === "You Win!!!") {
        score++;
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
            document.getElementById('hs').innerText = highscore;
        }
    } else if (result === "Computer Wins!!!") {
        score = 0;
    }
    document.getElementById('cs').innerText = score;
}

// Event listener for the Rock choice
rock.addEventListener('click', function(){
    r = 'Rock';
    let x = Math.floor(Math.random()*3);
    let computer = array[x];

    let resultr =
        r === computer
            ? document.getElementById('result').innerHTML = "Draw" 
            : r && computer === array[2]
            ? (document.getElementById('result').innerHTML = "You Win!!!", updateScores("You Win!!!"))
            : (document.getElementById('result').innerHTML = "Computer Wins!!!", updateScores("Computer Wins!!!"));
        
    document.getElementById('player').innerHTML = 'Rock';
    document.getElementById('comp').innerHTML = computer;
});

// Event listener for the Paper choice
paper.addEventListener('click', function(){
    p = 'Paper';
    let x = Math.floor(Math.random()*3);
    let computer = array[x];

    let resultp =
        p === computer
            ? document.getElementById('result').innerHTML = "Draw"
            : p && computer === array[0]
            ? (document.getElementById('result').innerHTML = "You Win!!!", updateScores("You Win!!!"))
            : (document.getElementById('result').innerHTML = "Computer Wins!!!", updateScores("Computer Wins!!!"));

    document.getElementById('player').innerHTML = 'Paper';
    document.getElementById('comp').innerHTML = computer;
});

// Event listener for the Scissors choice
scissors.addEventListener('click', function(){
    s = 'Scissors';
    let x = Math.floor(Math.random()*3);
    let computer = array[x];

    let results =
        s === computer
            ? document.getElementById('result').innerHTML = "Draw" 
            : s && computer === array[1]
            ? (document.getElementById('result').innerHTML = "You Win!!!", updateScores("You Win!!!"))
            : (document.getElementById('result').innerHTML = "Computer Wins!!!", updateScores("Computer Wins!!!"));

    document.getElementById('player').innerHTML = 'Scissors';
    document.getElementById('comp').innerHTML = computer;
});

// Event listener for the Random button
button.addEventListener('click', function(){
    let x = Math.floor(Math.random()*3);
    let y = Math.floor(Math.random()*3);
    let p1 = array[x];
    let computer = array[y];

    let result =
        p1 === computer 
            ? document.getElementById('result').innerHTML = "Draw"  
            : p1 === array[0] && computer === array[2]
            ? (document.getElementById('result').innerHTML = "You Win!!!", updateScores("You Win!!!"))
            : p1 === array[1] && computer === array[0]
            ? (document.getElementById('result').innerHTML = "You Win!!!", updateScores("You Win!!!"))
            : (document.getElementById('result').innerHTML = "Computer Wins!!!", updateScores("Computer Wins!!!"));
    
    document.getElementById('player').innerHTML = p1;
    document.getElementById('comp').innerHTML = computer;
});

// Set the initial high score on the page
document.getElementById('hs').innerText = highscore;
