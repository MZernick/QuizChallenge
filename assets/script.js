var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var currentScore = 0;
var allChoices = document.querySelector("#choices");
var questionIndex = 0;
var hideQuestions = document.querySelector(".quiz-section");

hideQuestions.style.display = "none";

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
  hideQuestions.style.display = "block";
  timerCount = 30;
  startButton.disabled = true;
  startButton.style.display = "none";
  startTimer();
  displayQuestion();
});

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount <= 0) {
      clearInterval(timer);
      var initials = window.prompt("Please enter your initials:");
      localStorage.setItem("initials", initials);
      window.location.assign("./assets/scores.html");
    }
  }, 1000);
};

function displayQuestion() {
  let showQuestion = document.getElementById('question');
  let displayChoices = document.querySelectorAll('.choice');

  showQuestion.textContent = quizQ[questionIndex].question;
  displayChoices.forEach((element, index) => {
    element.textContent = quizQ[questionIndex].choices[index];
  });
};

choices.addEventListener("click", function (event) {
  if (!event.target.matches("li")) {
    return;
  }
  var question = quizQ[questionIndex];
  var correctChoice = question.choices[question.answer];
  // console.log(correctChoice);
  if (event.target.textContent === correctChoice) {
    currentScore = currentScore + 5;
  }
  else {
    timerCount = timerCount - 10;
  }
  questionIndex++;
  displayQuestion();
  // console.log(quizQ);
  localStorage.setItem("scores", currentScore);
  // if (quizQ.answer = "end answer" ){ //doesnt work.. should this be put somewhere else?
  //     var initials = window.prompt("Please enter your initials:");
  //     window.location.assign("./assets/scores.html");
  //     localStorage.setItem("initials", initials); 
  // };
});

function viewHighScores() {

  var endScore = localStorage.getItem("scores");
  var userInitials = localStorage.getItem("initials");

  showScores.textContent = endScore;
  showInitials.textContent = userInitials;

  console.log(endScore);
  console.log(userInitials);
  console.log(showScores);
  console.log(showInitials);
};

viewHighScores();
