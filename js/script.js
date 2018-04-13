//Questions array
var questions = ["'OS' computer abbreviation usually means ?","'.MOV' extension refers usually to what kind of file?","Who created Pretty Good Privacy (PGP)?","'.BAT' extension refers usually to what kind of file?","In 100 m race, A covers the distance in 36 seconds and B in 45 seconds. In this race A beats B by: "];

//Choices array
var choices = ["Order of Significance","Open Software","Operating System","Optical Sensor","Image file","Animation/movie file","Audio file","MS Office document","Phil Zimmermann","Tim Berners-Lee","Marc Andreessen","Ken Thompson","Compressed Archive file","System file","Audio file","Backup file","20 m","25 m","22.5 m","9 m"];

//Correct choice array
var correctChoice = ["Operating System","Animation/movie file","Phil Zimmermann","System file","20 m"];

//variables initialization
var i;    //for questions array traversing 
var j;    //for choices traversing
var k = 0;    //for correct choice traversing
var playing = 0;    //playing=0 if not playing and 1 if playing
var choiceButtonSelector;   //for traversing through choices
var score = 0;
var totalScore = 5;
var timer = 50;     //initial countdown begins from this number
var action;     //for countdown timer

// function to load a question
function loadQuestion() {
    if(i<5)
        {
            document.getElementById("question").innerHTML=questions[i];
            i++;
        }
    else
        {
            gameover();
        }
}

// function to load choices
function loadChoices() {
    choiceButtonSelector=0;
    while(j<(i*4))
    {
        document.getElementById("button" + (choiceButtonSelector+1)).innerHTML=choices[j];
        j++;
        choiceButtonSelector++;
    }
}

// function to check the answer
function check(id) {
    var answer = document.getElementById(id).innerHTML;
    if(correctChoice[k]===answer)
        {
            score = score + 1;
            swal("Correct..!", "I know you are a champion.", "success");
            loadQuestion();
            loadChoices();
        }
    else
        {
            swal("Oops..!", "You can definately do better.", "error");
            loadQuestion();
            loadChoices();
        }
    k++;
}

//function for starting the game and ending also
function start() {
    i=0;
    j=0;
    if(playing==0)
        {
            loadQuestion();
            loadChoices();
            document.getElementById("start-game").innerHTML = "END GAME";
            playing=1;
            startCountdown();
        }
    else if(playing==1)
        {
            location.reload();
        }
}

// function for game over
function gameover() {
    playing=0;
    document.getElementById("start-game").innerHTML = "START GAME";
    document.getElementById("question").innerHTML = "QUESTION HERE!";
    choiceButtonSelector=0;
            while(choiceButtonSelector<4)
                {
                    document.getElementById("button" + (choiceButtonSelector+1)).innerHTML = "CHOICE " + (choiceButtonSelector+1);
                    choiceButtonSelector++;
                }
    document.getElementById("game-over-box").style.display = "block";
    document.getElementById("game-over").innerHTML = "<h2>You have got "+score+" questions correct out of "+totalScore+"</h2>";
    playermsg();
    stopCountdown();
}

//start counter
function startCountdown(){
    action = setInterval(function(){
        timer-=1;
        document.getElementById("counter").innerHTML=timer;
        if(timer == 0){// game over
            stopCountdown();
            gameover();
        }
    },1000);
}
//stop the counter
function stopCountdown(){
    clearInterval(action);
}

function playermsg() {
    if(score==5)
        document.getElementById("game-over-msg").innerHTML = "<p>CONGRATULATIONS! You are truely a Genius..</p>";
    if(score==4)
        document.getElementById("game-over-msg").innerHTML = "<p>You missed it by a bit. Grab on Again!</p>";
    if(score==3)
        document.getElementById("game-over-msg").innerHTML = "<p>I know you can do better! Just practice more..</p>";
    if(score==2)
        document.getElementById("game-over-msg").innerHTML = "<p>Don't Quit! Just follow the track in right direction..</p>";
    if(score==1)
        document.getElementById("game-over-msg").innerHTML = "<p>Better gain some knowledge and try once again..!</p>";
    if(score==0)
        document.getElementById("game-over-msg").innerHTML = "<p>This game is not for you..!</p>";
}