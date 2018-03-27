//Setting up the variables: 

var wins = 0;
$("#wins").text("Wins: ");
var losses = 0;
$("#losses").text("Losses: ");
var snow = ["assets/images/snowflake1.jpg", "assets/images/snowflake2.jpg", "assets/images/snowflake3.jpg", "assets/images/snowflake4.jpg"];
var screenNumber = "";
var snowValue = [];
var guessSum = 0;
var snowFlakes = $("#snowflakes");


//A random number is on the screen when you load the page and will update when the player wins or loses the game. 
var randomNumber = function () {
  screenNumber = "";
  var minNumber = 15;
  var maxNumber = 100;
  var ranNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
//   console.log("the randomNumber to guess is " + ranNumber);
  screenNumber = ranNumber;
  $("#number-to-guess").html(screenNumber);
};

//The random number generator and value assign function:
var snowFlakeRandom = function () {
  for (var i = 0; i < 4; i++) {
    var snowRandom = Math.floor(Math.random() * 20);
    snowValue.push(snowRandom);
//     console.log(snowValue[i]);
    var imageSnow = $("<img>");
    imageSnow.addClass("snow-image");
    imageSnow.attr("src", snow[i]);
    imageSnow.attr("data-snowvalue", snowValue[i]);
    snowFlakes.append(imageSnow);
  }
};

//The game reset function:
var reset = function () {
  $("#snowflakes").empty();
  snowValue = [];
  snowFlakeRandom();
  randomNumber();
}

//Here is the game playing part: 
snowFlakes.on("click", ".snow-image", function () {
  var flakeValue = ($(this).attr("data-snowvalue"));
  flakeValue = parseInt(flakeValue);
  guessSum += flakeValue;
//   console.log("New score: " + guessSum);
  $(".guessSum").html("Your guess so far: " + guessSum);
  var newScreen = parseInt(screenNumber);
    if (guessSum === newScreen) {
      wins++;
      $(".guessSum").html("Your score is: " + 0);
      alert("Whoohooooo you won!! You guessed exactly " + newScreen);
      $("#wins").html("Wins: " + wins);
      guessSum = 0;
      reset();
    }
      else if (guessSum >= newScreen) {
      alert("So sorry - you lost! You guessed: " + guessSum + " Please try again :)");
      losses++;
      $(".guessSum").html("Your guess so far: " + 0);
      $("#losses").html("Losses: " + losses);
      guessSum = 0;
      reset();
      }
});

//Calling the functions:
randomNumber();
snowFlakeRandom();
