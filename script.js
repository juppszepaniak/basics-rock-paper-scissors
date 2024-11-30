let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

const choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        //<img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "assets/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id; /* refers to the id of choice*/
    document.getElementById("your-choice").src = "assets/" + you + ".png"

    //random fpr opponent
    opponent = choices[Math.floor(Math.random() * 3)]; //floor --> makes 1.999 to 1 --> 0, 1 , 2 (Array)
    document.getElementById("opponent-choice").src = "assets/" + opponent + ".png";

    //check for winner --> Add Green to Winner
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    } else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            } else if (opponent == "paper"){
                opponentScore += 1;
            }
        }
        if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            } else if (opponent == "cissors"){
                opponentScore += 1;
            }
        }
        if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            } else if (opponent == "rock"){
                opponentScore += 1;
            }
        }
    }

    document.getElementById("opponent-score").innerText = yourScore;
    document.getElementById("your-score").innerText = opponentScore;
}

function resetGame() {
}
