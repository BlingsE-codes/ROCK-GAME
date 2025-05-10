const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById(`playerDisplay`);
const computerDisplay = document.getElementById(`computerDisplay`);
const resultDisplay = document.getElementById(`resultDisplay`);
const computerscoreDiplay = document.getElementById(`computerscoreDiplay`);
const playerscoreDiplay = document.getElementById(`playerscoreDiplay`);
const winaudio = document.getElementById(`winaudio`);
const failaudio = document.getElementById(`failaudio`);
const lostaudio = document.getElementById(`lostaudio`);
const champaudio = document.getElementById(`champaudio`);
const tieaudio = document.getElementById(`tieaudio`);

let playerscore = 0;
let computerscore = 0;


function playgame(playersChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    let result = ""

    if(playersChoice === computerChoice){
        result = "IT'S A TIE"
        winaudio.play();
  
    }
    else{
        switch(playersChoice){
            case "rock":
              result = (computerChoice === 'scissors')? "YOU WIN!" : "YOU LOSE!"

              break

            case "paper":
              result = (computerChoice === 'rock')? "YOU WIN!" : "YOU LOSE!"
  
              break

            case "scissors":
              result = (computerChoice === 'paper')? "YOU WIN!" : "YOU LOSE!"
  
              break   
        }    

       
    }


    playerDisplay.textContent = `PLAYER: ${playersChoice} `;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerscore++;
            playerscoreDiplay.textContent = playerscore;
            tieaudio.play();
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerscore++;
            computerscoreDiplay.textContent = computerscore;
            failaudio.play();
            break;    
    }

    if(playerscore === 20){
        resultDisplay.textContent = "WINNER!!!🏆"
        resultDisplay.classList.add("greenText");
        champaudio.play();
        resetGame()
    }
    else if(computerscore === 20){
        resultDisplay.textContent = "YOU LOST!😠"
        resultDisplay.classList.add("redText");
        lostaudio.play();
        resetGame()
    }




    function resetGame(){
        playerscore = 0;
        computerscore = 0;
        playerscoreDiplay.textContent = playerscore;
        computerscoreDiplay.textContent = computerscore;
        playerDisplay.textContent = `PLAYER: `;
        computerDisplay.textContent = `COMPUTER:`;
        resultDisplay.classList.remove("greenText", "redText");
    }

}