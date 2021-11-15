//Function to randomly select one of three options
function computerPlay() {
    let compArray = ["ROCK", "PAPER", "SCISSORS"];
    let compSelect = compArray[Math.floor(Math.random()*compArray.length)];
    return compSelect;
}
computerPlay();

function userPlay() {
    let user = prompt("Rock Paper Scissors ???");
    let userInput = user.toUpperCase();
    if (userInput === "ROCK") {
        console.log(userInput);
    }
    else if (userInput === "PAPER") {
        console.log(userInput);
    }
    else if(userInput === "SCISSORS") {
        console.log(userInput);
    } 
    else(console.log("Wrong Input! Try again."))
}
userPlay();