let highscoresEl = document.querySelector("#highscores");

// displays highscore list
let highscores = JSON.parse(localStorage.getItem("quizScores"));

let liEl = document.createElement("li");
for (i = 0; i < highscores.length; i++){
    let score = highscores[i];
    liEl.textContent = `${score[0]} - ${score[1]}`
    highscoresEl.appendChild(liEl);
}
