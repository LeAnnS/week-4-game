//Global Variables (accessible by all functions)
// =============================================================

// Computer selected nunber will be stored here.
var targetNumber = "";

// Crystal type will be stored here.
var crystals = [1, 5, 10, 3];

//Create a for loop to create crystals for each type
for (var i=0; i <crystals.length; i++) {

  //each iteration creates an imageCrystal
  var imageCrystal = $("<img>");

  //add a class to each image for CSS to identify
  imageCrystal.addClass("crystal-image");

  //link the image
  imageCrystal.attr("src", "assets/images/1_diamond5.jpg");

  //add datat attribute equal to array value
  imageCrystal.attr("data-crystalvalue", crystals[i]);

  //add image to page
  $("#crystals").append(imageCrystal);
}




//Game counters
var winCounter
var lossCounter
var totalScoreCounter



//FUNCTIONS (code to call and run as needed)
// ===========================================================

//startGame()
//function startGame() {

  //Reset the current score to 0
  //var totalScore = 0;

  //This function generates a random number
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //This function assigns a value to each crystal

//}



//Capture click event on crystal image

    //This function adds the crystalValue to the totalScore


//checkScores function is code that needs to run to verify if totalScore matches TargetNumber.


//roundComplete function is code that needs to run after the totalScore has been compared to the targetNumber.


  //MAIN PROCESS (code that controls what is run)
  // ==============================================================

  // Start the game by running the startGame() function
  startGame();

  // Initate the function for capturing key clicks.
  document.onkeyup = function(event) {

    //Run code to add crystalValue to totalScore
    

    // Run the code to check totalScore = targetNumber
    //checkScores ()

    // Run code to end each round.
    //roundComplete();
};
