// User is presented with 5 questions - array of objects
    //  Format for questions???
    var startButton = document.querySelector(".start-button");
    var wins = false;
    var timerCount ;
    var timer ;
    var timerElement = document.querySelector(".timer-count");
    var currentQ = 0;

    let quizQ =
        {
        question:"Who created LOTR?",
        choices:["GRR Martin", "The Elders","JRR Tolkien"],
        answer:2,
        };//,{
        // question: "Who won the Ring of Power in a game of riddles?",
        // choices:["Frodo", "Bilbo","Gollum"],
        // answer:("Bilbo"),
        // },{
        // question:("What is Striders real name?"),
        // choices:["Aragorn","Legolas","Elrond"],
        // answer:("Aragorn"),
        // },{
        // question:("Who is Sauron?"),
        // choices:["The White Wizard","The Dark Lord, Ruler of Mordor", "The Black Wizard"],
        // answer:("The Dark Lord, Ruler of Mordor"),
        // },{
        // question:("What was the name of the dragon from The Hobbit?"),
        // choices:["Smaug","Balrog","Sauroman"],
        // answer:("Smaug"),
        // };
    
    function startQuiz() {
      startButton.addEventListener("click");
            wins = false;
            timerCount = 20;
            startButton.disabled = true;
            startTimer();
            displayQuestion(question);
    };

    function startTimer() {
        timer = setInterval(function() {
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
function displayQuestion(){
    
    //showQuestion = quizQ[currentQ];
    //document.append(showQuestion);
    let showQuestion = document.getElementById('question');
    showQuestion.textContent = quizQ.question;

    let displayChoices = document.querySelectorAll('.choices');
  console.log(displayChoices);
  displayChoices.forEach(function(element, index){
    element.textContent = quizQ.choices[index];
  });
}

//startButton.addEventListener('click')
        // Object that conatins {question: string, Choices: array, answer: string}
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next quesrion access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page