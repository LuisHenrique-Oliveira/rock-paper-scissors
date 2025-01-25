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
    let choice = Math.floor(Math.random() *  3) + 1;
    if (choice === 1){
        choice = "Rock";
        console.log(choice)
    }
    else if(choice === 2){
        choice = "Paper";
        console.log(choice)
    }
    else if(choice === 3){
        choice = "Scissors";
        console.log(choice)
    }
    else {
        console.log("putz")
    }
}

getComputerChoice();