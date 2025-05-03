let humanScore = 0;
let computerScore = 0;


const btnPedra = document.querySelector("#btnPedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTesoura = document.querySelector("#btnTesoura");

btnPedra.addEventListener("click", function() {
    playRound("Rock", getComputerChoice());
});
btnPapel.addEventListener("click", function() {
    playRound("Paper", getComputerChoice());
});
btnTesoura.addEventListener("click", function() {
    playRound("Scissors", getComputerChoice());
});



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *  3) + 1;
    if (computerChoice === 1){
        computerChoice = "Rock";
        return computerChoice;
    }
    else if(computerChoice === 2){
        computerChoice = "Paper";
        return computerChoice;
        
    }
    else if(computerChoice === 3){
        computerChoice = "Scissors";
        return computerChoice;
        
    }
    else {
        console.log("putz")
    }
}


function playRound(humanChoice, computerChoice){
  
    if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You win! Rock beats Scissors");
        humanScore++;
       
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You win! Scissors beats Paper");
        humanScore++;
 
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You win! Paper beats Rock");
        humanScore++;
       
    }
    //situações de perca
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You lose! Womp womp, paper beats Rock");
        computerScore++;
        
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You lose! Womp womp, Scissors beats Paper");
        computerScore++;
       
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("You lose! Womp womp, Rock beats Scissors");
        computerScore++;
        
    }
    else if(humanChoice === computerChoice ){
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("Tie!");
    }
    else{
        console.log(`Escolha do humano: ${humanChoice}`);
        console.log(`Escolha do computador: ${computerChoice}`);
        console.log("putz")
    }
}