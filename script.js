var timer = 60;
var score = 0;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var scoreelem = document.querySelector('#scoreelem');
var btmpnl = document.querySelector('#btmpnl');
var guessNumber;


//TIMER DIV
setInterval(function(){
    if(timer > 0){
        --timer;
        timerelem.textContent = timer;
    }
    else{
        btmpnl.innerHTML = '<h1 id = "center"> Game Over!!! </h1>';
    }
}, 1000);


//SCORE DIV
function makeBubbles(){
    for(var i = 0; i < 161; i++){
        var randomNumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}


//HIT DIV
function getNewGuess(){
    //get a random number
    guessNumber = Math.floor(Math.random() * 10);
    //and then place the random number inside ther game guess element
    hitelem.textContent = guessNumber;
}


btmpnl.addEventListener('click', function(details){
    var clickedBubblelValue = details.target.textContent;
    if(clickedBubblelValue == guessNumber){
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
    // else{
    //     score = score - 5;
    //     scoreelem.textContent = score;
    // }
})


getNewGuess();
makeBubbles();