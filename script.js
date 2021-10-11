function randomize(max){
    return Math.floor(Math.random()*max);
}
function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    const computerAnswer = computerAnswers[randomize(computerAnswers.length)];
    return computerAnswer;   
}
function playerPlay(){
    let playerAnswer = "rock";
    return playerAnswer;
    
}



function playRound(computerSelection, playerSelection)
{
    if (playerSelection == "rock" && computerSelection == "rock")
    {
        resultsPanel.textContent = "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        computerScore++;
        resultsPanel.textContent = "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
        
        
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore++;
        resultsPanel.textContent = "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore++;
        resultsPanel.textContent = "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    else if (playerSelection == "paper" && computerSelection == "paper")
    {
        resultsPanel.textContent = "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        computerScore++;
        resultsPanel.textContent = "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        computerScore++;
        resultsPanel.textContent = "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        resultsPanel.textContent = "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    
    else if (playerSelection == "scissors" && computerSelection == "scissors")
    {
        resultsPanel.textContent = "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    
playerDisplayScore.textContent = playerScore;
computerDisplayScore.textContent = computerScore;
roundsLeft--;
roundsLeftDisplay.textContent = roundsLeft;
showScore();

}

function showScore(){

    if (roundsLeft === 0)
    {
        if (playerScore > computerScore)
        {
            resultsPanel.textContent = "The game is now over. You are the winner with " + playerScore + " points!";
            continueGame = prompt("You won!!! Play again? Y/N");
        }
        else if (playerScore < computerScore)
        {
            resultsPanel.textContent = "The game is now over. Computer was the winner with " + computerScore +" points!";
            continueGame = prompt("You lost... Play again? :) Y/N");
        }
        else if (playerScore === computerScore)
        {
            resultsPanel.textContent = "The game is now over. It was a tie!";
            continueGame = prompt("It was a tie! Play again? Y/N");
        }
        
        if (continueGame === "Y")
        {
            initializeGame();
        }
        
    }
}

function initializeGame(){
    computerScore = 0;
    playerScore = 0;
    roundsLeft = 5;
    playerDisplayScore.textContent = playerScore;
    computerDisplayScore.textContent = computerScore;
    roundsLeftDisplay.textContent = roundsLeft;
    resultsPanel.textContent = "";
}



const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(btn){
        btn.addEventListener("click", function(){
            playerSelection = btn.textContent.toLowerCase();
            computerSelection = computerPlay();
           playRound(computerSelection, playerSelection);
           
        })
        
    })
    
let continueGame
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let roundsLeft = 5;

const resultsPanel = document.querySelector(".results");
const playerDisplayScore = document.querySelector(".playerScore");
const computerDisplayScore = document.querySelector(".computerScore");
const roundsLeftDisplay = document.querySelector(".roundsLeft");










