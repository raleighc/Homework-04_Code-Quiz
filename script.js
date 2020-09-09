console.log("Hello Twitter World.");

var fullNav = document.getElementById("fullNavbar");
var timerCountdown = document.getElementById("timer");

var startButton = document.getElementById("begin");
var titleEl = document.getElementById("title");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("questionsDiv");

var questionArray = [
  {
    question1: "Commonly used data types DO NOT include: ",
    wrong1: "1. strings",
    wrong2: "2. booleans",
    correct3: "3. alerts",
    wrong4: "4. numbers",
  },
  {
    question2:
      "The condition in an if/else statement is enclosed within __________.",
    wrong1: "1. quotes",
    wrong2: "2. curly brackets",
    correct3: "3. parentheses",
    wrong4: "4. square brackets",
  },
  {
    question3: "Arrays in JavaScript can be used to store __________.",
    wrong1: "1. numbers and strings",
    wrong2: "2. other arrays",
    wrong3: "3. booleans",
    correct4: "4. all of the above",
  },
  {
    question4:
      "String values must be enclosed within __________ when being assigned to variables.",
    wrong1: "1. commas",
    correct2: "2. parentheses",
    wrong3: "3. quotes",
    wrong4: "4. curly brackets",
  },
  {
    question5:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    correct1: "1. console.log",
    wrong2: "2. terminal/bash",
    wrong3: "3. for loops",
    wrong4: "4. JavaScript",
  },
];

var totalTimer = 75;
var wrongTimer = totalTimer - 15;

function beginTimer(){
    var timerInt = setInterval(function() {
        totalTimer--;
        timerCountdown.textContent = "Time remaining:" + totalTimer;
        

    }, 1000);
}

startButton.addEventListener("click", function(){
    beginTimer();

})