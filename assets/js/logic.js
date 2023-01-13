let timerEl = document.querySelector("#time");
let startButtonEl = document.querySelector("#start");
let startScreenEl =  document.querySelector("#start-screen");

let timeLeft = 75;

startButtonEl.addEventListener("click", startQuiz);

function startQuiz(){
    startScreenEl.setAttribute("class", ".hide");
}

function countdown(){

    let timeInterval = setInterval(function() {

        if (timeLeft > 0){
            timerEl.textContent = timeLeft;

        }
        else{
            clearInterval(timeInterval);
            timerEl.textContent = timeLeft;

        }
        
        timeLeft--;

    }, 1000)

}

