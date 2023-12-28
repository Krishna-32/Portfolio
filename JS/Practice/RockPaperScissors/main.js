const array = ["Rock", "Paper", "Scissors"];
let x = Math.floor(Math.random()*3);
let y = Math.floor(Math.random()*3);
let p1 = array[x];
let p2 = array[y];

let result =
    p1 === p2 
        ? "Draw" 
        : p1 === array[0] && p2 === array[2]
        ? "Player 1 Wins!!!"
        : p1 === array[1] && p2 === array[0]
        ? "Player 1 Wins!!!"
        : p1 === array[2] && p2 === array[1]
        ? "Player 1 Wins!!!"
        : "Player 2 Wins!!!";


console.log("Player 1 : " + p1);
console.log("Player 2 : " + p2);
console.log(result);
