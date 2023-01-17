let timerEl = document.querySelector("#time");
let startButtonEl = document.querySelector("#start");
let startScreenEl =  document.querySelector("#start-screen");
let quizEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let feedbackEl = document.querySelector("#feedback");
let endEl = document.querySelector("#end-screen");
let scoreEl = document.querySelector("#final-score");
let initialEl = document.querySelector("#initials");

let questionNumber = 0;
let timeLeft = 75;
let score = 0;

// starts the quiz when the button is clicked
startScreenEl.addEventListener("click", function(event){
    if (event.target.matches("#start")){
        startScreenEl.setAttribute("class", "hide");
        quizEl.removeAttribute("class", "hide");
        nextQuestion();
        countdown();
    }
});

// displays the next question
function nextQuestion(){

    if (questionNumber > questionList.length){
        finalScore();
    }else{
        choicesEl.innerHTML = "";
        questionEl.textContent = questionList[questionNumber].q;
    
        let listEl = document.createElement("ol");
        choicesEl.appendChild(listEl);
        listEl.addEventListener("click", answerButton);
    
        let but1 = document.createElement("button");
        let but2 = document.createElement("button");
        let but3 = document.createElement("button");
        let but4 = document.createElement("button");
    
        but1.textContent = "1. " + questionList[questionNumber].a1;
        but1.setAttribute("data-index", "1");
        but2.textContent = "2. " + questionList[questionNumber].a2;
        but2.setAttribute("data-index", "2");
        but3.textContent = "3. " + questionList[questionNumber].a3;
        but3.setAttribute("data-index", "3");
        but4.textContent = "4. " + questionList[questionNumber].a4;
        but4.setAttribute("data-index", "4");
    
        listEl.appendChild(but1);
        listEl.appendChild(but2);
        listEl.appendChild(but3);
        listEl.appendChild(but4);
    }
    
};

// runs when an answer is clicked, evaluates answer, displays feedback and runs nextQuestion
function answerButton(event){

    if (event.target.matches("button")){

        let chosenAnswer = event.target.getAttribute("data-index");
        let correctAnswer = questionList[questionNumber].correct;

        if (chosenAnswer != correctAnswer){
            timeLeft = timeLeft - 10;
            feedbackEl.textContent = "Wrong!";
        }else{
            feedbackEl.textContent = "Correct!";
            score++;
        }

        feedbackEl.removeAttribute("class", "hide");

        // hides feedback after 1 second
        let shortDisplay = setInterval(function() {
            
            feedbackEl.setAttribute("class", "hide");
            clearInterval(shortDisplay);
        }, 1000)
        questionNumber++;
        nextQuestion();
    }
}

// starts timer on the top right of screen, ends at 0
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

