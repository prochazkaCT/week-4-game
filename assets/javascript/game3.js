
var snowflakes = ["#one","#two","#three","#four"];

var wins = 0;
var losses = 0;
var runFlakeNum = true;

var flakeNum = [];

var randomNumber = function () {
  var screenNumber = "";
  var minNumber = 15;
  var maxNumber = 50;
  var ranNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
  console.log("the randomNumber to guess is " + ranNumber);
  screenNumber = ranNumber;
  $("#number-to-guess").html(screenNumber);
};

randomNumber();

for (var i = 0; i < snowflakes.length; i++) {
  var random = Math.floor(Math.random() * 15);
  console.log(random);
  flakeNum.push(random);
  console.log("this is the flakeNum array: " + flakeNum);
  $("#one").val(flakeNum[0]);
  $("#two").val(flakeNum[1]);
  $("#three").val(flakeNum[2]);
  $("#four").val(flakeNum[3]);

  $(".snowflakes").on("click", "#one", function () {
    alert("you clicked me and I am worth :" + flakeNum[0]);
  });
}







