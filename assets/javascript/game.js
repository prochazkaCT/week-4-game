
var snowflakes = ["#one", "#two", "#three", "#four"];
var wins = 0;
var losses = 0;
var flakeNum = [];
var runFlakeNum = true;

var randomNumber = function () {
  var screenNumber = "";
  var minNumber = 15;
  var maxNumber = 100;
  var ranNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
  console.log("the randomNumber to guess is " + ranNumber);
  screenNumber = ranNumber;
  $("#number-to-guess").html(screenNumber);
};

randomNumber();

for (var i = 0; i < snowflakes.length; i++) {
  var random = Math.floor(Math.random() * 15);
  console.log(random);
  var flakes = $(".snowflakes");
    flakes.attr( {
    "data-random": random
    });
  $(".snowflakes").append(flakes);  
};

$(".snowflakes").on('click', function() {
  var result;
  var num = $(this).attr('data-random');
  result += num;

  console.log($(this).attr('data-random'));
});






