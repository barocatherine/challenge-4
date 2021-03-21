var currentQuestion=0;
var totalScore=0;
var cQuestion=document.getElementById('currentQuestion');
var totalQuestions=document.getElementById('totalQuestions');
var splashScreen=document.getElementById('start');
var quizScreen=document.getElementById('quiz-screen');
var x=0;
var resultScreen=document.getElementById('resultScreen');
var timeLeft=document.getElementById('timeLeft');
var score=document.getElementById('score');
var question=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var btn=document.getElementsByClassName('btn');
var next=document.getElementById('next');
var quizQuestions=[
  {
    question:"At what temperature does water boil in degrees F?",
    choice1:"165",
    choice2:"212",
    choice3:"32",
    choice4:"112",
    ans:"212",
  },
     {
    question:"What is the largest organ on your body?",
    choice1:"Brain",
    choice2:"Small and Large Intestines",
    choice3:"Skin",
    choice4:"Lungs",
    ans:"Skin",
  },
     {
    question:"Which company is no longer making cellphones?",
    choice1:"Apple",
    choice2:"Samsung",
    choice3:"Google",
    choice4:"Amazon",
    ans:"Amazon",
  },
     {
    question:"All are Primary colors except:",
    choice1:"Pink",
    choice2:"Red",
    choice3:"Blue",
    choice4:"Yellow",
    ans:"Pink",
  },
     {
    question:"At what temperature is chicken completely cooked in degrees F?",
    choice1:"165",
    choice2:"212",
    choice3:"32",
    choice4:"112",
    ans:"165",
  }
];
function nextQuestion(no){
Inter(300);
cQuestion.textContent=" "+(no+0);
totalQuestions.textContent=" "+quizQuestions.length;
console.log("number "+no);
question.textContent=quizQuestions[no].question;
opt1.textContent=quizQuestions[no].choice1;
opt2.textContent=quizQuestions[no].choice2;
opt3.textContent=quizQuestions[no].choice3;
opt4.textContent=quizQuestions[no].choice4;
}
var z=setInterval(function(){
    if(x==1){
      clearInterval(z);
      splashScreen.style.display="none";
      quizScreen.style.display="block";
      nextQuestion(currentQuestion);
    }
    x++;
},2000);
for(var i=0;i<btn.length;i++){
  btn[i].onclick=function(){
    if(this.textContent==quizQuestions[currentQuestion].ans){
        totalScore++;
        if(currentQuestion<4){
        clearInterval(bar);
        currentQuestion++;
        nextQuestion(currentQuestion);
        console.log(totalScore);
        }else{
          endScreen();
        }
    }
    else{
      if(currentQuestion<4){
        currentQuestion++;
        clearInterval(bar);
        nextQuestion(currentQuestion);
        console.log(totalScore);
        }else{
          endScreen();
        }
    }
  }
}
var bar;
function endScreen(){
  quizScreen.style.display="none";
  resultScreen.style.display="block";
  score.textContent=totalScore;
}
function Inter(set){
var statusTime=set;
timeLeft.style.width=statusTime+"px";
bar=setInterval(function(){
 if(statusTime==0){
     clearInterval(bar); 
      if(currentQuestion<4){
        currentQuestion++;
        nextQuestion(currentQuestion);
      }
      else{
        endScreen();
      } 
       
    }
    timeLeft.style.width=statusTime+"px";
    statusTime=statusTime-30;
},1000); 
}
 next.onclick=function(){
if(currentQuestion<4){
currentQuestion++;
nextQuestion(currentQuestion);
}
else{
  endScreen();
}
 }




var userInitialsInput = document.querySelector('#user-initials');
var userScoreInput = document.querySelector('#score');
var logHereButton = document.querySelector('.btn');
var viewHighScoresButton = document.querySelector('#score');
var userScoreSpan = document.querySelector('#score');

function renderhighScoreWinners() {
    // Retrieve the last email and password from localStorage using `getItem()`
    //var email = localStorage.getItem('email');
    var userInitials = localStorage.getItem('initals');

    // If they are null, return early from this function
    // if (userInitials === null) {
        // displayMessage;
    

    // Set the text of the 'userinitialsSpan' to the corresponding values from localStorage
    userInitalsSpan.textContent = initials;
}

// renderhighScoreWinnersRegistered();


logHereButton.addEventListener('click', function(event) {
    event.preventDefault();
    

        // Save initials and scores to localStorage using `setItem()`
        localStorage.setItem('#user-initials', User);
        localStorage.setItem('#score', Score);
        // Render the last registered initials and scores
        renderhighScoreUsersRegistered();

        window.localStorage.getItem('#user-initials');
        window.localStorage.getItem('#score');
    }
);
