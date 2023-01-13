let timerEl = document.querySelector("#time");
let startButtonEl = document.querySelector("#start");
let startScreenEl =  document.querySelector("#start-screen");

let timeLeft = 75;

// starts the quiz when the button is clicked
startScreenEl.addEventListener("click", function(event){
    if (event.target.matches("#start")){
        startScreenEl.setAttribute("class", "hide");

    }
});

// starts timer on the top right of screen
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

