function randomize(max){
    return Math.floor(Math.random()*max);
}
function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    const computerAnswer = computerAnswers[randomize(computerAnswers.length)];
    return computerAnswer;   
}
function playerPlay(){
    let playerAnswer = prompt("Choose between Rock, Paper or Scissors");
    return playerAnswer.toLowerCase();
}



function playRound(computerSelection, playerSelection)
{
    if (playerSelection == "rock" && computerSelection == "rock")
    {
        return "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        computerScore++;
        return "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
        
        
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore++;
        return "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore++;
        return "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    else if (playerSelection == "paper" && computerSelection == "paper")
    {
        return "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        computerScore++;
        return "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        computerScore++;
        return "You lost this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        return "You won this round! You chose " + playerSelection + " | Computer chose: " +computerSelection  ;
        
    }
    
    else if (playerSelection == "scissors" && computerSelection == "scissors")
    {
        return "It's a tie this round! You chose: " + playerSelection + " | Computer chose: " + computerSelection;
    }
    

}

function showScore(){
    console.log("Current score is:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Rounds left: " + roundsLeft);
    if (roundsLeft === 0)
    {
        if (playerScore > computerScore)
        {
            console.log("The game is now over. You are the winner with " + playerScore + " points!");
        }
        else if (playerScore < computerScore)
        {
            console.log("The game is now over. Computer was the winner with " + computerScore +" points!");
        }
        else if (playerScore === computerScore)
        {
            console.log("The game is now over. It was a tie!");
        }
    }
}

function initializeGame(){
    computerScore = 0;
    playerScore = 0;
    roundsLeft = 5;
}

function game(){
    initializeGame();
    while (roundsLeft > 0)
    {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log(playRound(computerSelection,playerSelection));
    roundsLeft--;
    showScore();
    
    }
    
}

let computerScore = 0;
let playerScore = 0;
let roundsLeft = 5;



game();
// console.log(playRound(computerSelection,playerSelection));
