console.log("Hello Twitter World.");

var fullNav = document.getElementById("fullNavbar");
var timerCountdown = document.getElementById("timer");

var startButton = document.getElementById("begin");
var titleEl = document.getElementById("title");
var startButton = document.getElementById("start");
var questionDiv = document.getElementById("questionsDiv");

var beginPageDiv = document.getElementById("beginning");

var questionEl = document.getElementById("currentQuestion")
var selectionButtonOne = document.getElementById("questionOne");
var selectionButtonTwo = document.getElementById("questionTwo");
var selectionButtonThree = document.getElementById("questionThree");
var selectionButtonFour = document.getElementById("questionFour");
var resultEl = document.getElementById("result");

var questionArray = [
  {
    question: "Commonly used data types DO NOT include: ",
    wrong1: "1. strings",
    wrong2: "2. booleans",
    correct: "3. alerts",
    wrong3: "4. numbers",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within __________.",
    wrong1: "1. quotes",
    wrong2: "2. curly brackets",
    correct: "3. parentheses",
    wrong3: "4. square brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store __________.",
    wrong1: "1. numbers and strings",
    wrong2: "2. other arrays",
    wrong3: "3. booleans",
    correct: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within __________ when being assigned to variables.",
    wrong1: "1. commas",
    correct: "2. parentheses",
    wrong2: "3. quotes",
    wrong3: "4. curly brackets",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    correct: "1. console.log",
    wrong1: "2. terminal/bash",
    wrong2: "3. for loops",
    wrong3: "4. JavaScript",
  },
];

var totalTimer = 75;



function beginTimer(){
    var timerInt = setInterval(function() {
        totalTimer--;
        timerCountdown.textContent = "Time remaining: " + totalTimer;
    }, 1000);
}

function wrongAnswer(){
    var wrongTimer = totalTimer - 15;
    totalTimer = wrongTimer;
}


var resultTimer = 3;

function resultTimerCorrect(){
    var resultInt = setInterval(function() {
        resultTimer--;
        resultEl.removeAttribute("class", "hide");
        resultEl.textContent = "CORRECT!";
        if (resultTimer === 0){
            resultEl.setAttribute("class", "hide");
            clearInterval(resultInt);
        }
    }, 1000);
}

function resultTimerWrong(){
    var resultInt = setInterval(function() {
        resultTimer--;
        resultEl.removeAttribute("class", "hide");
        resultEl.textContent = "WRONG!";
        if (resultTimer === 0){
            resultEl.setAttribute("class", "hide");
            clearInterval(resultInt);
        }
    }, 1000);
}


startButton.addEventListener("click", function(){
    beginTimer();
    beginPageDiv.setAttribute("class", "hide");
    firstQuestion();
    questionDiv.removeAttribute("class", "hide");

})

//beginning first questions function
function firstQuestion(){
    questionEl.textContent = questionArray[0].question;
 
    selectionButtonOne.textContent = questionArray[0].wrong1;
    selectionButtonTwo.textContent = questionArray[0].wrong2;
    selectionButtonThree.textContent = questionArray[0].correct;
    selectionButtonFour.textContent = questionArray[0].wrong3;
    

    selectionButtonOne.addEventListener("click", function(){
        if (selectionButtonOne.textContent === questionArray[0].correct){
            secondQuestion();
            resultTimerCorrect();
        } else {
            secondQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonTwo.addEventListener("click", function(){
        if (selectionButtonTwo.textContent === questionArray[0].correct){
            secondQuestion();
            resultTimerCorrect();
        } else {
            secondQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonThree.addEventListener("click", function(){
        if (selectionButtonThree.textContent === questionArray[0].correct){
            secondQuestion();
            resultTimerCorrect();
        } else {
            secondQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonFour.addEventListener("click", function(){
        if (selectionButtonFour.textContent === questionArray[0].correct){
            secondQuestion();
            resultTimerCorrect();
        } else {
            secondQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
}

//SECOND QUESTION
function secondQuestion(){
    questionEl.textContent = questionArray[1].question;
  
    selectionButtonOne.textContent = questionArray[1].wrong1;
    selectionButtonTwo.textContent = questionArray[1].wrong2;
    selectionButtonThree.textContent = questionArray[1].correct;
    selectionButtonFour.textContent = questionArray[1].wrong3;

    selectionButtonOne.addEventListener("click", function(){
        if (selectionButtonOne.textContent === questionArray[1].correct){
            thirdQuestion();
            resultTimerCorrect();
        } else {
            thirdQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonTwo.addEventListener("click", function(){
        if (selectionButtonTwo.textContent === questionArray[1].correct){
            thirdQuestion();
            resultTimerCorrect();
        } else {
            thirdQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonThree.addEventListener("click", function(){
        if (selectionButtonThree.textContent === questionArray[1].correct){
            thirdQuestion();
            resultTimerCorrect();
        } else {
            thirdQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonFour.addEventListener("click", function(){
        if (selectionButtonFour.textContent === questionArray[1].correct){
            thirdQuestion();
            resultTimerCorrect();
        } else {
            thirdQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
}

//THIRD QUESTION
function thirdQuestion(){
    questionEl.textContent = questionArray[2].question;
  
    selectionButtonOne.textContent = questionArray[2].wrong1;
    selectionButtonTwo.textContent = questionArray[2].wrong2;
    selectionButtonThree.textContent = questionArray[2].wrong3;
    selectionButtonFour.textContent = questionArray[2].correct;

    selectionButtonOne.addEventListener("click", function(){
        if (selectionButtonOne.textContent === questionArray[2].correct){
            fourthQuestion();
            resultTimerCorrect();
        } else {
            fourthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonTwo.addEventListener("click", function(){
        if (selectionButtonTwo.textContent === questionArray[2].correct){
            fourthQuestion();
            resultTimerCorrect();
        } else {
            fourthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonThree.addEventListener("click", function(){
        if (selectionButtonThree.textContent === questionArray[2].correct){
            fourthQuestion();
            resultTimerCorrect();
        } else {
            fourthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonFour.addEventListener("click", function(){
        if (selectionButtonFour.textContent === questionArray[2].correct){
            fourthQuestion();
            resultTimerCorrect();
        } else {
            fourthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
}

//FOURTH QUESTION
function fourthQuestion(){
    questionEl.textContent = questionArray[3].question;
  
    selectionButtonOne.textContent = questionArray[3].wrong1;
    selectionButtonTwo.textContent = questionArray[3].correct;
    selectionButtonThree.textContent = questionArray[3].wrong2;
    selectionButtonFour.textContent = questionArray[3].wrong3;

    selectionButtonOne.addEventListener("click", function(){
        if (selectionButtonOne.textContent === questionArray[3].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonTwo.addEventListener("click", function(){
        if (selectionButtonTwo.textContent === questionArray[3].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonThree.addEventListener("click", function(){
        if (selectionButtonThree.textContent === questionArray[3].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonFour.addEventListener("click", function(){
        if (selectionButtonFour.textContent === questionArray[3].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
}

//FIFTH QUESTION
function fifthQuestion(){
    questionEl.textContent = questionArray[4].question;
  
    selectionButtonOne.textContent = questionArray[4].correct;
    selectionButtonTwo.textContent = questionArray[4].wrong1;
    selectionButtonThree.textContent = questionArray[4].wrong2;
    selectionButtonFour.textContent = questionArray[4].wrong3;

    selectionButtonOne.addEventListener("click", function(){
        if (selectionButtonOne.textContent === questionArray[4].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonTwo.addEventListener("click", function(){
        if (selectionButtonTwo.textContent === questionArray[4].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonThree.addEventListener("click", function(){
        if (selectionButtonThree.textContent === questionArray[4].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
    selectionButtonFour.addEventListener("click", function(){
        if (selectionButtonFour.textContent === questionArray[4].correct){
            fifthQuestion();
            resultTimerCorrect();
        } else {
            fifthQuestion();
            resultTimerWrong();
            wrongAnswer();
        }
    })
}

