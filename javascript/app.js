let userScore = 0;
let compScore = 0;
let gameActive = true;

const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

function party() {
    confetti();
}

const genCompchoise = () => {
    //rock paper choise
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}

const drawGame = () => {
    // console.log("The game was draw");
    msg.innerText = "The game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin === true) {
        userScore ++;
        userScorePara.innerText = userScore;
        // console.log("You win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        if(userScore === 10) {
            let repeate = setInterval(party, 1000);
            choise.removeEventListener("click",clickHandler);
            setTimeout(function() {
                window.location.reload();
            },5000)
        }
    }
    else {
        compScore ++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        if(compScore === 10) {
            // let repeate = setInterval(party, 1000);
            setTimeout(function() {
                window.location.reload();
            },5000)
        }
    }
}

const playgame = (userchoise) => {
    // console.log("user choise", userchoise);
    //Generate computer choise
    const compChoise = genCompchoise();
    // console.log("Computer choise",compChoise);

    if(userchoise === compChoise) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userchoise === "rock") {
            //scissors, paper
            userWin = compChoise === "paper" ? false : true ;
        }
        else if(userchoise === "paper") {
            //rock, scissors
            userWin = compChoise === "scissors" ? false : true ;
        }
        else {
            //rock, paper 
            userWin = compChoise === "paper" ? true : false ;
        }
        showWinner(userWin);
    }

};

choices.forEach((choise) => {
    // console.log(choise);
    choise.addEventListener("click", () => {
        const userchoise = choise.getAttribute("id");
        // console.log("Choise was clicked", userchoise);
        playgame(userchoise);
    })
});



