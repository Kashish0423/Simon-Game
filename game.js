var gamePattern= [] ;

var userClickedPattern= [] ;

var buttonColors= ["red", "blue", "green", "yellow"] ;

var started= false ;

var level=0;

$(document).keydown(function(){

if (!started)
{
    $("#level-title").text("Level 0") ;
    setTimeout(nextSequence, 1000) ;
    //nextSequence() ;
    started= true ;
}

}) ;


$(".btn").click(function(){

    //console.log(this.id) ;
                     
    var userChosenColor= this.id ;    // we could have also used atribute here 
   // userChosenColor.push(this.id) ;
    userClickedPattern.push(userChosenColor) ;

    playSound(userChosenColor) ;
    animatePress(userChosenColor) ;
    checkAnswer(userClickedPattern.length-1) ;

})



function checkAnswer(current_level)
{

if (userClickedPattern[current_level]==gamePattern[current_level]) 
{
    console.log("success") ;
     if (userClickedPattern.length== gamePattern.length)
     {

         setTimeout(nextSequence, 1000) ;
     }
}

else{

     console.log("wrong") ;
    playSound("wrong") ;
    $("body").addClass("red") ;

    setTimeout(function(){
        $("body").removeClass("red") ;
    }, 200) ;
    $("#level-title").text("Game Over, Press Any Key to Restart") ;
   
   
    startOver() ;
   
}

console.log(userClickedPattern) ;
console.log(gamePattern); 

}








function nextSequence()

{

    userClickedPattern= [] ;
    level++;

     var txt= "Level "+  level 
     $("h1")[0].textContent= txt ;
    var randomNumber= Math.floor(Math.random()*4) ;

    var randomChosenColor= buttonColors[randomNumber] ;

    gamePattern.push(randomChosenColor) ;

    var s=  randomChosenColor ;
   //  console.log( ;

   //$("h1").fadeOut(250).fadeIn(250) ;
     var buttonClicked= $( "#"+s )  ;
     //
     buttonClicked.fadeIn(100).fadeOut(100).fadeIn(100);

     playSound(s) ;

     
     //console.log(buttonClicked) ;
}




function playSound(curr_key)
{
    var music= "sounds/"+ curr_key+ ".mp3"
    var audio= new Audio(music) ;
         audio.play() ;

}

function animatePress(currentColor)
{

    $("#"+ currentColor).addClass("pressed");

    setTimeout(function(){

        $("#"+ currentColor).removeClass("pressed");
    }, 100) ;


}

function startOver()
{
    level=0;
    gamePattern=[];
    started= false ;
}

