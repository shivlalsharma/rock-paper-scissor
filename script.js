// choice which user has to select either rock,paper or scissor
let choices = document.querySelectorAll(".choice");

// it display the user's score
let userMsg = document.querySelector("#user-score");

// it displays the computer's score
let compMsg = document.querySelector("#comp-score");

// it displays the game status either win, lose or draw
let gameStatus = document.getElementById("game-status");

// it displays the game result details
let winningInfo = document.getElementById("winning-info");

// button to clear the score history
let clearHistory = document.getElementById('clear-History');

// user and computer score by default 0
let userScore = JSON.parse(localStorage.getItem('yourScore')) ?? 0;
let compScore = JSON.parse(localStorage.getItem('compScore')) ?? 0;

// it generate the computers choice randomly and returns
const genCompChoice = ()=>{
    let options = ["Rock","Paper","Scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

// it display the winner either user or computer and displays the message
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        localStorage.setItem('yourScore',JSON.stringify(userScore));
        gameStatus.innerText = `You Won !!`;
        gameStatus.style.backgroundColor = "#008000";
        winningInfo.innerText = `Your ${userChoice} beats ${compChoice}`;
        winningInfo.style.display = 'block';
        userMsg.innerText = JSON.parse(localStorage.getItem('yourScore')) ?? userScore;
    }
    else{
        compScore++;
        localStorage.setItem('compScore',JSON.stringify(compScore));
        gameStatus.innerText = `You Lost !!`;
        gameStatus.style.backgroundColor = "#f00";
        winningInfo.innerText = `Computer's ${compChoice} beats ${userChoice}`;
        winningInfo.style.display = 'block';
        compMsg.innerText = JSON.parse(localStorage.getItem('compScore')) ?? compScore;
    }
}

// user's choices on which user click to beat the computer's option
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        let compChoice = genCompChoice();

        if(userChoice === compChoice){
            gameStatus.innerText = `Game Draw !!`;
            gameStatus.style.backgroundColor = "#531385";
            winningInfo.innerText = `Your ${userChoice} & Computer ${compChoice}`;
            winningInfo.style.display = 'block';
        }
        else{
            let userWin;
            if(userChoice === "Rock"){
                userWin = compChoice === "Paper"?false:true;
            }
            else if(userChoice === "Paper"){
                userWin = compChoice === "Scissor"?false:true;
            }
            else{
                userWin = compChoice === "Rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
    });
});

// action to clear the user's and computer's scores history
clearHistory.addEventListener('click',()=>{
    localStorage.removeItem('yourScore');
    localStorage.removeItem('compScore');
    userMsg.innerText = JSON.parse(localStorage.getItem('yourScore')) ?? 0;
    compMsg.innerText = JSON.parse(localStorage.getItem('compScore')) ?? 0;
    location.replace('index.html');
});

// get the user's and computer's scores from localStorage if it is set neither get the default score 0 for both
userMsg.innerText = JSON.parse(localStorage.getItem('yourScore')) ?? userScore;
compMsg.innerText = JSON.parse(localStorage.getItem('compScore')) ?? compScore;