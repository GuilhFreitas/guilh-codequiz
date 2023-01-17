let highscoresEl = document.querySelector("#highscores");
let clearEl = document.querySelector("#clear");

scoreDisplay();

// displays highscore list
function scoreDisplay(){
    let highscores = JSON.parse(localStorage.getItem("quizScores"));
    highscoresEl.innerHTML = "";

    if (highscores !== null){
        for (i = 0; i < highscores.length; i++){
            let score = highscores[i];
            let liEl = document.createElement("li");
            liEl.textContent = score[0] + " - " + score[1];
            highscoresEl.appendChild(liEl);
        }
    }else{
        return
    }

}


// clears highscore data
clearEl.addEventListener("click", function(){
    localStorage.removeItem("quizScores");
    scoreDisplay();
})
