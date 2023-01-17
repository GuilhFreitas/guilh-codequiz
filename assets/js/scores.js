let highscoresEl = document.querySelector("#highscores");
let clearEl = document.querySelector("#clear");

// displays highscore list
let highscores = JSON.parse(localStorage.getItem("quizScores"));

for (i = 0; i < highscores.length; i++){
    let score = highscores[i];
    let liEl = document.createElement("li");
    liEl.textContent = score[0] + " - " + score[1];
    highscoresEl.appendChild(liEl);
}

// clears highscore data
