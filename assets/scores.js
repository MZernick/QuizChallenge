var showScores = document.querySelector("#score");
var showInitials = document.querySelector("#initials");

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