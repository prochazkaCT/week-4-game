
$(function() {
  alert("Javascript Loaded!");
});

var snowflake = $("#snowflakes");
var randomNumber = 0;
var wins = 0;
var losses = 0;
var snowOptions = [10, 12, 13, 14];

$("#number-to-guess").text(randomNumber);

for (var i = 0; i < snowOptions.length; i++) {

  var imagesnowOne = $("<img>");

  imagesnowOne.addclass("flake1-image");

  imagesnowOne.attr("src", "assets/images/snowflake1.jpg").attr("width","200").attr("height","200");

  imagesnowOne.attr("data-flakevalue", snowOptions[i]);

  snowflake.append(imagesnowOne);
}

