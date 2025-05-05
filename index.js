let humanScore = 0;
let computerScore = 0;


const btnPedra = document.querySelector("#btnPedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTesoura = document.querySelector("#btnTesoura");

const resultBox = document.querySelector("#resultBox");
const resultText = document.createElement("p");

const scoreBox = document.querySelector("#scoreBox");
const computerScoreText = document.createElement("p");
const humanScoreText = document.createElement("p");




btnPedra.addEventListener("click", function() {
    playRound("Pedra", getComputerChoice());
});
btnPapel.addEventListener("click", function() {
    playRound("Papel", getComputerChoice());
});
btnTesoura.addEventListener("click", function() {
    playRound("Tesoura", getComputerChoice());
});



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *  3) + 1;
    if (computerChoice === 1){
        computerChoice = "Pedra";
        return computerChoice;
    }
    else if(computerChoice === 2){
        computerChoice = "Papel";
        return computerChoice;
        
    }
    else if(computerChoice === 3){
        computerChoice = "Tesoura";
        return computerChoice;
        
    }
    else {
        console.log("putz")
    }
}



function playRound(humanChoice, computerChoice){
  let resultMessage = "";
 
    if(humanChoice === "Pedra" && computerChoice === "Tesoura"){
        resultMessage = "Você venceu essa rodada! Pedra vence Tesoura";
        
        humanScore++;
        scoreResult = humanScore, computerScore;
       
    }
    else if(humanChoice === "Tesoura" && computerChoice === "Papel"){
        //console.log(`Escolha do humano: ${humanChoice}`);
        resultMessage = "Você venceu essa rodada! Tesoura vence Papel";
        humanScore++;
        scoreResult = humanScore, computerScore;
 
    }
    else if(humanChoice === "Papel" && computerChoice === "Pedra"){
        resultMessage = "Você venceu essa rodada! Papel vence Pedra";
        humanScore++;
        scoreResult = humanScore, computerScore;
       
    }
    //situações de perca
    else if(humanChoice === "Pedra" && computerChoice === "Papel"){
        resultMessage = "Você Perdeu essa rodada! Pedra vence papel";
        computerScore++;
        scoreResult = humanScore, computerScore;
        
    }
    else if(humanChoice === "Papel" && computerChoice === "Tesoura"){
        resultMessage = "Você Perdeu essa rodada! Tesoura vence Papel";
        computerScore++;
       
    }
    else if(humanChoice === "Tesoura" && computerChoice === "Pedra"){
        resultMessage = "Você Perdeu essa rodada! Pedra vence Tesoura";
        computerScore++;
        
    }
    else if(humanChoice === computerChoice ){
        resultMessage = "Empate!";
    }
    else{
        resultMessage = "Putz, algo deu errado, culpe o programador";
    }

    resultText.textContent = `A sua escolha foi: ${humanChoice} e a do computador foi: ${computerChoice}. ${resultMessage} `
    
    resultBox.appendChild(resultText);

    humanScoreText.textContent = `Sua pontuação: ${humanScore}`;
    computerScoreText.textContent = `Pontuação do computador: ${computerScore}`;

    scoreBox.appendChild(humanScoreText);
    scoreBox.appendChild(computerScoreText);

}