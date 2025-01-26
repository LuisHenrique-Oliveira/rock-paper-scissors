



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
    }
    else if(computerChoice === 2){
        computerChoice = "Paper";
        console.log(computerChoice);
        
    }
    else if(computerChoice === 3){
        computerChoice = "Scissors";
        console.log(computerChoice);
        
    }
    else {
        console.log("putz")
    }
}

getComputerChoice();











//Create a function getHumanChoice
function getHumanChoice(){
    //Create a variable for Choice and ask for the user "Choose Rock, Paper or Scissors" and put answer in choice
    let humanChoice = prompt("Chosse between Rock, Paper or Scissors");
    //Turn the choice to lower case so it can be case insensitive 
    humanChoice = humanChoice.toLocaleLowerCase();

    if(!humanChoice){
        alert("Por favor, insira uma escolha válida!");
    }
    //if choice is equal to Rock
    else if (humanChoice == "rock" || humanChoice == "pedra"){
        humanChoice = "Rock";
        // return choice
        console.log(humanChoice);
    }
    //if choice is equal to Paper
    else if(humanChoice == "paper" || humanChoice == "papel"){
        humanChoice = "Paper";
        // return choice
        console.log(humanChoice)
    }
    //if choice is equal to Scissors
    else if(humanChoice == "scissors" || humanChoic == "tesoura"){
        humanChoice = "Scissors";
        // return choice
        console.log(humanChoice)
    }
      
    else{
        console.log("Por favor,insira uma escolha válida!")
    }
}

getHumanChoice();

