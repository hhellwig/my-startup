const cardList = [
    "porbeagle",
    "great_white",
    "bull_shark",
    "tiger_shark",
    "hammerhead",
    "nurse_shark"
]

let cardSet;
let board = [];
let rows = 3;
let columns = 4;
let cardOne;
let cardTwo;
let matchesLeft = 6;

let startTime;


function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000); // get the time now
    let diff = now - startTime; // diff in seconds between now and start
    let m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    let s = Math.floor(diff % 60); // get seconds value (remainder of diff)
    m = checkTime(m); // add a leading zero if it's single digit
    s = checkTime(s); // add a leading zero if it's single digit
    document.getElementById("time").innerHTML = m + ":" + s; // update the element where the timer will appear
    if (matchesLeft != 0) {
        let t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
    }
//     else {
//         let endTime = now - startTime;
//         const userScore = new UserScore;
//         userScore.saveScore(endTime);
//     }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function gamePlay() {
    matchesLeft = 6;
    let gameBoard = document.getElementById("game");
    if (gameBoard.hasChildNodes()) {
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild);
        }
    }
    startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
    localStorage.setItem('startTime', startTime); // Store it if I want to restart the timer on the next page
    shuffleCards();
    startTimeCounter();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    //shuffling
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("game").append(card);
        }
        board.push(row);
    }
    setTimeout(hideCards, 1000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "blue.jpg";
        }
    }
}

function selectCard() {
    if (this.src.includes("blue")) {
        if (!cardOne) {
            cardOne = this;

            let coords = cardOne.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            cardOne.src = board[r][c] + ".jpg";
        } else if (!cardTwo && this != cardOne) {
            cardTwo = this;

            let coords = cardTwo.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            cardTwo.src = board[r][c] + ".jpg";
            setTimeout(update, 1000);
        }
    } 
    
}

function update() {
    if (cardOne.src != cardTwo.src) {
        cardOne.src = "blue.jpg";
        cardTwo.src = "blue.jpg";
    } else if (cardOne.src === cardTwo.src) {
        matchesLeft = matchesLeft - 1;
    }
    cardOne = null;
    cardTwo = null;
}


// class UserScore {
    
//     saveScore(score) {
//         const userName = this.getPlayerName();
//         let scores = [];
//         const scoresText = localStorage.getItem('scores');
//         if (scoresText) {
//             scores = JSON.parse(scoresText);
//         }
//         scores = this.updateScores(userName, score, scores);

//         localStorage.setItem('scores', JSON.stringify(scores));
//     }
//     updateScores(userName, score, scores) {
//         const date = new Date().toLocaleDateString();
//         const newScore = { name: userName, score: score, date: date };

//         let found = false;
//         for (const [i, prevScore] of scores.entries()) {
//             if (score > prevScore.score) {
//                 scores.splice(i, 0, newScore);
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             scores.push(newScore);
//         }

//         if (scores.length > 10) {
//             scores.length = 10;
//         }

//         return scores;
//     }
//     getPlayerName() {
//         return localStorage.getItem('userName') ?? 'Mystery player';
//     }
// }