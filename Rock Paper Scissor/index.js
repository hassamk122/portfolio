const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("Playerdisplay");
const computerDisplay = document.getElementById("Computerdisplay");
const resultDisplay = document.getElementById("Resultdisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerscore = 0;
let computerscore = 0;

function playGame(playerchoice){
    const computerChoice =choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerchoice === computerChoice){
        result ="IT'S A TIE!"

    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors")? "You win" : "You lose";
                
                break;
            case "paper":
                result = (computerChoice === "rock")? "You win" : "You lose";
                break;
            case "scissors":
                result = (computerChoice === "paper")? "You win" : "You lose";
                break;
        }
    }

    playerDisplay.textContent = `Player :${playerchoice}`;
    computerDisplay.textContent = `Computer :${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You win":
            resultDisplay.classList.add("greenText");
            playerscore++;
            playerScoreDisplay.textContent =playerscore;
            break;
        case "You lose":
            resultDisplay.classList.add("redText");
            computerscore++;
            computerScoreDisplay.textContent = computerscore;
            break;
        
    }
}