var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var msg3=document.getElementById("message3");

var answer=Math.floor(Math.random()*100)+1;

var turn=0;
var yourGuess=[];

function play(){
 
 
  var userGuess=document.getElementById("guess").value;
  
  if(userGuess <1 || userGuess >100){
    alert("Please enter a number between 1 and 100!");
  }else{
    yourGuess.push(userGuess);
    
    turn += 1 ;
    

    if (userGuess < answer){
      msg1.textContent = "Your guess is too low" ;
      msg2.textContent = "turn : " +turn;
      msg3.textContent = "Guessed numbers are: "+yourGuess;
      
      
      
    }
    else if (userGuess > answer){
      msg1.textContent = "Your guess is too high";
      msg2.textContent = "turn : " +turn;
      msg3.textContent = "Guessed numbers are: "+yourGuess;
      

      
    } else if (userGuess == answer){
      msg1.textContent = "You Win";
      msg2.textContent = "The number was " + answer;
      msg3.textContent = "You guessed it in "+turn+ " guesses";
      document.getElementById(myBtn).disabled=true;
    }
    
  }
 
}