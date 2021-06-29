//**alert("Hello I am your daddy");
var buttoncolours =["red","blue","green","yellow"];
var gamepattern =[];
var userClickedPattern =[];
var random;
var level = 0;
var started = false;

$(document).keypress(function(){
if(!started)
{
     nextsequence();
  $("h1").text("level "+ level);

  started = true;
}});


function nextsequence(){
 var randomnumber = Math.floor(Math.random()*4);
  random = buttoncolours[randomnumber];
 gamepattern.push(random);
    $("#" + random).fadeIn(100).fadeOut(100).fadeIn(100);
    playsouns(random);

}

function playsouns(name){
  var audio = new Audio('sounds/'+name+ '.mp3');
  audio.play();
}


$(".btn").click(function(event){
   var userchosencolour = event.target.id;
   userClickedPattern.push(userchosencolour);
    playsouns(event.target.id);
    animatepress(event.target.id);
    checkanswer(userClickedPattern.length - 2);
})

function animatepress(currentcolour){
$('#'+currentcolour).addClass("pressed");
setTimeout(function(){$('#'+currentcolour).removeClass("pressed")},100);
}

function checkanswer(currentlevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");
}
else if (gamePattern[currentLevel] != userClickedPattern[currentLevel]){
  var Wrong = new Audio('sounds/wrong.mp3');
  Wrong.play();
  $("body").adClass(".game-over");
  setTimeout(funtion(){$("body").removeClass(".game-over")},200);
$("level-title").text("Game Over, Press Any Key to Restart");
startover();
}
if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
  nextSequence();
}, 1000);

}}

function startover(){
  started = false;
  userClickedPattern =[];
  gamepattern =[];
  level = 0;
}
