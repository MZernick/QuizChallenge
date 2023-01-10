var startButton = document.querySelector(".start-button");
var wins = false;
var timerCount;
var timer;
var timerElement = document.querySelector(".timer-count");
var currentScore = 0;
var allChoices = document.querySelector("#choices");
var questionIndex = 0;
var showScores = document.querySelector(".scores");
var showInitials = document.querySelector(".initials");

let quizQ = [
  {
    question: "Who created LOTR?",
    choices: ["GRR Martin", "The Elders", "JRR Tolkien"],
    answer: 2,
  }, {
    question: "Who won the Ring of Power in a game of riddles?",
    choices: ["Frodo", "Bilbo", "Gollum"],
    answer: 1,
  }, {
    question: ("What is Striders real name?"),
    choices: ["Aragorn", "Legolas", "Elrond"],
    answer: 0,
  }, {
    question: ("Who is Sauron?"),
    choices: ["The White Wizard", "The Dark Lord, Ruler of Mordor", "The Black Wizard"],
    answer: 1,
  }, {
    question: ("What was the name of the dragon from The Hobbit?"),
    choices: ["Smaug", "Balrog", "Sauroman"],
    answer: 0,
  }
];

startButton.addEventListener("click", function () {
  timerCount = 20;
  startButton.disabled = true;
  startTimer();
  displayQuestion();
});

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (wins && timerCount > 0) {
        clearInterval(timer);
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);

    }
  }, 1000);
};
function displayQuestion() {
  let showQuestion = document.getElementById('question');
  let displayChoices = document.querySelectorAll('.choice');

    showQuestion.textContent = quizQ[questionIndex].question;
    displayChoices.forEach((element, index) => {
      element.textContent = quizQ[questionIndex].choices[index]; 
    }
    )};
  // user selects an answer(button,radio,checkboxes)data-answer = ""
choices.addEventListener("click",function(event){
  if (!event.target.matches("li")){
    return;
  } 
  var question = quizQ[questionIndex];
  var correctChoice = question.choices[question.answer];
  console.log(correctChoice);
  if (event.target.textContent === correctChoice) {
    currentScore = currentScore + 5;
  }
  else {
    timerCount = timerCount + 15;
  }
  questionIndex ++;
  displayQuestion();
  localStorage.setItem("scores", currentScore);
  // if (questionIndex = 4){
  //     var initials = window.prompt("Please enter your initials:");
  //     window.location.assign("./assets/scores.html");
  //     localStorage.setItem("initials", initials); 
  // };
});
function viewHighScores() {
  var endScore = localStorage.getItem("scores");
  var userInitials = localStorage.getItem("initials");
  
  // showScores.textContent = endScore;
  // showInitials.textContent = userInitials;
};
viewHighScores();

