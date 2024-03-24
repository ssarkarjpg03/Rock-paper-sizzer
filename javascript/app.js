let userScore = 0;
let compScore = 0;
let gameActive = true;

const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const hands = document.querySelector(".hands");
// const changeimg = document.querySelector(".hands2");
const userrock  = document.querySelector("#user-rock");
const userpaper = document.querySelector("#user-paper");
const userscissor = document.querySelector("#user-scissor");
const pcrock = document.querySelector("#pc-rock");
const pcpaper = document.querySelector("#pc-paper");
const pcscissor = document.querySelector("#pc-scissor");


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
        setTimeout(function() {                
            msg.innerText = "You Win";
            msg.style.backgroundColor = "green";
        },1000)
        if(userScore >= 3) {
            let repeate = setInterval(party, 1000);                       
            setTimeout(function() {                
                window.location.reload();
            },3500)
        }
    }
    else {
        compScore ++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        setTimeout(function() {               
            msg.innerText = "You lose";
            msg.style.backgroundColor = "red";
        },1000)
        if(compScore >= 3) {
            // let repeate = setInterval(party, 1000);          
            setTimeout(function() {               
                window.location.reload();
            },3500)
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
        // hands.style.display = "none";
        // userrock.style.display = "flex";
        // pcrock.style.display = "flex";
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

    if(userchoise === "rock" && compChoise === "rock") {
        hands.style.display = "none";
        userrock.style.display = "flex";
        pcrock.style.display = "flex";        
        setTimeout(function() {
            hands.style.display = "flex";
            userrock.style.display = "none";
            pcrock.style.display = "none";
        },3000)
    }
    else if(userchoise === "paper" && compChoise === "paper") {
        hands.style.display = "none";
        userpaper.style.display = "flex";
        pcpaper.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userpaper.style.display = "none";
            pcpaper.style.display = "none";
        },3000)
    }
    else if(userchoise === "scissors" && compChoise === "scissors") {
        hands.style.display = "none";
        userscissor.style.display = "flex";
        pcscissor.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userscissor.style.display = "none";
            pcscissor.style.display = "none";
        },3000)
    }
    else if(userchoise === "rock" && compChoise === "paper") {
        hands.style.display = "none";
        userrock.style.display = "flex";
        pcpaper.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userrock.style.display = "none";
            pcpaper.style.display = "none";
        },3000)
    }
    else if(userchoise === "rock" && compChoise === "scissors") {
        hands.style.display = "none";
        userrock.style.display = "flex";
        pcscissor.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userrock.style.display = "none";
            pcscissor.style.display = "none";
        },3000)
    }
    else if(userchoise === "paper" && compChoise === "rock") {
        hands.style.display = "none";
        userpaper.style.display = "flex";
        pcrock.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userpaper.style.display = "none";
            pcrock.style.display = "none";
        },3000)
    }
    else if(userchoise === "paper" && compChoise === "scissors") {
        hands.style.display = "none";
        userpaper.style.display = "flex";
        pcscissor.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userpaper.style.display = "none";
            pcscissor.style.display = "none";
        },3000)
    }
    else if(userchoise === "scissors" && compChoise === "rock") {
        hands.style.display = "none";
        userscissor.style.display = "flex";
        pcrock.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userscissor.style.display = "none";
            pcrock.style.display = "none";
        },3000)
    }
    else if(userchoise === "scissors" && compChoise === "paper") {
        hands.style.display = "none";
        userscissor.style.display = "flex";
        pcpaper.style.display = "flex";
        setTimeout(function() {
            hands.style.display = "flex";
            userscissor.style.display = "none";
            pcpaper.style.display = "none";
        },3000)
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