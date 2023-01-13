let timerEl = document.querySelector("#time");

function countdown(){
    let timeLeft = 75;

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