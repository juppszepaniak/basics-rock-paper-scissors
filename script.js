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

    //random for opponent
    opponent = choices[Math.floor(Math.random() * 3)]; //floor --> makes 1.999 to 1 --> 0, 1 , 2 (Array)
    document.getElementById("opponent-choice").src = "assets/" + opponent + ".png";

    document.getElementById("your-score").style.color = "rgb(78, 78, 78)";
    document.getElementById("opponent-score").style.color = "rgb(78, 78, 78)";

    //check for winner
    if (you == opponent) {
        yourScore += 0;
        document.getElementById("your-score").style.color = "rgb(53, 102, 175)";
        opponentScore += 0;
        document.getElementById("opponent-score").style.color = "rgb(53, 102, 175)";
    } else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                document.getElementById("your-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("opponent-score").style.color = "rgb(143, 60, 60)";
            } else if (opponent == "paper"){
                opponentScore += 1;
                document.getElementById("opponent-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("your-score").style.color = "rgb(143, 60, 60)";
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
                document.getElementById("your-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("opponent-score").style.color = "rgb(143, 60, 60)";
            } else if (opponent == "scissors"){
                opponentScore += 1;
                document.getElementById("opponent-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("your-score").style.color = "rgb(143, 60, 60)";
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
                document.getElementById("your-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("opponent-score").style.color = "rgb(143, 60, 60)";
            } else if (opponent == "rock"){
                opponentScore += 1;
                document.getElementById("opponent-score").style.color = "rgb(60, 143, 88)";
                document.getElementById("your-score").style.color = "rgb(143, 60, 60)";
            }
        }
    }

    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("your-score").innerText = yourScore;
}