let humanScore = 0;
let computerScore = 0;

//Create a function getComputerChoice
//Create a variable for choice that will be equal to a random number between one and three
//if choice is equal to 1
// choice will have a new string value of Rock
// return choice
//Else if choice is equal to 2
// choice will have a new string value of Paper
// return choice
//Else if choice is equal to 3
// choice will have a new string value of Scissors
// return choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *  3) + 1;
    if (computerChoice === 1){
        computerChoice = "Rock";
        console.log(computerChoice);
        return computerChoice;
    }
    else if(computerChoice === 2){
        computerChoice = "Paper";
        console.log(computerChoice);
        return computerChoice;
        
    }
    else if(computerChoice === 3){
        computerChoice = "Scissors";
        console.log(computerChoice);
        return computerChoice;
        
    }
    else {
        console.log("putz");
    }
}

//Create a function getHumanChoice
//Create a variable for Choice and ask for the user "Choose Rock, Paper or Scissors" and put answer in choice
//Turn the choice to lower case so it can be case insensitive 
//if choice is equal to Rock
// return choice
//if choice is equal to Paper
// return choice
//if choice is equal to Scissors
// // return choice

function getHumanChoice(){
    
    let humanChoice = prompt("Chosse between Rock, Paper or Scissors");
   
    humanChoice = humanChoice.toLocaleLowerCase();

    if(!humanChoice){
        alert("Por favor, insira uma escolha válida!");
    }
   
    else if (humanChoice == "rock" || humanChoice == "pedra"){
        humanChoice = "Rock";
       
        console.log(humanChoice);
        return humanChoice;
    }
    
    else if(humanChoice == "paper" || humanChoice == "papel"){
        humanChoice = "Paper";
        
        console.log(humanChoice);
        return humanChoice;
    }
    
    else if(humanChoice == "scissors" || humanChoice == "tesoura"){
        humanChoice = "Scissors";
        
        console.log(humanChoice);
        return humanChoice;
    }
      
    else{
        console.log("Por favor,insira uma escolha válida!");
    }
}

//Create new function playRound
//Take humanChoice and computerChoice as parameters 
//If humanChoice is equal to Rock and computerChoice is equal to Scissors
//Return "You win! Rock beats Scissors"
//Else If humanChoice is equal to Scissors and computerChoice is equal to Paper
//Return "You win! Scissors beats Paper"
//Else If humanChoice is equal to Paper and computerChoice is equal to Rock
//Return "You win! Paper beats Rock"

//Else If humanChoice is equal to Scissors and computerChoice is equal to Rock
//Return "You lose! Rock beats Scissors"
//Else If humanChoice is equal to Paper and computerChoice is equal to Scissors
//Return "You lose! Scissors beats Paper"
//Else If humanChoice is equal to Rock and computerChoice is equal to Paper
//Return "You lose! Paper beats Rock"

function playRound(humanChoice, computerChoice){
  
    if(humanChoice === "Rock" && computerChoice === "Scissors"){
        
        console.log("You win! Rock beats Scissors");
        humanScore++;
       
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
 
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
       
    }
    //situações de perca
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("You lose! Womp womp, paper beats Rock");
        computerScore++;
        
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("You lose! Womp womp, Scissors beats Paper");
        computerScore++;
       
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("You lose! Womp womp, Rock beats Scissors");
        computerScore++;
        
    }
    else if(humanChoice === computerChoice ){
        console.log("Tie!");
    }
    else{
        console.log("putz");
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
console.log(humanScore, computerScore);
