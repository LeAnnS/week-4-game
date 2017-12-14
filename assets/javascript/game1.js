//Global Variables (accessible by all functions)
// =============================================================

// Crystal variables
var crystals = {
  diamond:
  {
    name: "Diamond",
    value: 0
  },
  ruby:
  {
    name: "Ruby",
    value: 0
  },
  emerald:
  {
    name: "Emerald",
    value: 0
  },
  topaz:
  {
    name: "Topaz",
    value: 0
  },
};

//Scores (Target Number and Total Score)
var targetNumber = 0;
var totalScore   = 0;

//Game counters
var winCounter    = 0;
var lossCounter   = 0;


//Create a for loop to create crystals for each type
// for (var i=0; i <crystals.length; i++) {

//   //each iteration creates an imageCrystal
//   var imageCrystal = $("<img>");

//   //add a class to each image for CSS to identify
//   imageCrystal.addClass("crystal-image");

//   //link the image
//   imageCrystal.attr("src", "assets/images/1_diamond.jpg");

//   //add data attribute equal to array value
//   imageCrystal.attr("data-crystalvalue", crystals[i]);

//   //add image to page
//   $("#crystals").append(imageCrystal);
// }






//FUNCTIONS (code to call and run as needed)
// ===========================================================

//This function generates a random number
  var getRandom = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//create a function to start game
function startGame() {

  //Reset the current score to 0
  var totalScore = 0;

  //Set targetNumber between 19 and 120
  targetNumber = getRandom(19, 120);

  //Assign a value to each crystal between 1 and 12
  crystals.diamond.value = getRandom(1, 12);
  crystals.ruby.value = getRandom(1, 12);
  crystals.emerald.value = getRandom(1, 12);
  crystals.topaz.value = getRandom(1, 12);

  //Update the html file with the new Target Number & change the Total Score back to 0
  $("#targetNumber").html(targetNumber);
  $("#totalScore").html(totalScore);

  //testing console
  console.log("------------------------------------------------------")
  console.log("Target Number: " + targetNumber);
  console.log("Diamond: " + crystals.diamond.value + " | Ruby: " + crystals.ruby.value + " | Emerald: " + crystals.emerald.value + " | Topaz: " + crystals.topaz.value);
  console.log("------------------------------------------------------")
}


    //This function responds to the click event by adding the crystalValue to the totalScore
    var addValues = function(crystals) {
      totalScore = totalScore + crystals.value;

      //write this new Total Score to the html file
      $("#totalScore").html(totalScore);

      //run the checkScores function
      checkScores();

      //testing console
      console.log("Total Score: " + totalScore);
    }


//checkScores function is code that needs to run to verify if totalScore matches TargetNumber.
var checkScores = function() {

  //check if totalScore is larger than targetNumber
  if(totalScore > targetNumber) {
    alert("Sorry! You lost!");
    console.log("You Lost");

    //add to loss counter
    lossCounter++;

    //update html with new loss count
    $("#lossCounter").html(lossCounter);

    //restart game
    startGame();
  }

  if(totalScore == targetNumber) {
    alert ("Congratulations!  You Won!");
    console.log("You Won!");

    //add to win counter
    winCounter++;

    //update html with new win count
    $("#winCounter").html(winCounter);

    //restart game
    startGame();
  }
}

//roundComplete function is code that needs to run after the totalScore has been compared to the targetNumber.


  //MAIN PROCESS (code that controls what is run)
  // ==============================================================

  // Start the game by running the startGame() function
  startGame();

  // Initate the function for capturing key clicks.
  $("#Diamond").click(function() {
      addValues(crystals.diamond);
  });

  $("#Ruby").click(function() {
    addValues(crystals.ruby);
  });

  $("#Emerald").click(function() {
    addValues(crystals.emerald);
  });

  $("#Topaz").click(function() {
    addValues(crystals.topaz);
  });

    //Run code to add crystalValue to totalScore
    

    // Run the code to check totalScore = targetNumber
    //checkScores ()

    // Run code to end each round.
    //roundComplete();
