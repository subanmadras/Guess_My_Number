'use strict';
/*
console.log(document.querySelector('.message').textContent);

 //what is DOM(Document Object Module) allows to access HTML elements and manipulate them
document.querySelector('.message').textContent = '🎉correct number'

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 888;
console.log(document.querySelector('.guess').value);*/
//to manipulate on mouse click or button click listen
let secrentNumber = Math.trunc(Math.random()* 20 ) + 1;

let score = 20;
let highscore = 0;

//function to display message 
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess =Number( document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there's no input
    if(!guess){
        displayMessage('⛔ no number');

    //when player wins
    } else if(guess === secrentNumber){
        document.querySelector('.number').textContent = secrentNumber;
        displayMessage('🎉 correct number!');
        document.querySelector('body').style.backgroundColor =' #60b347';
        document.querySelector('.number').style.width = '30rem';

        //logic to set highscore value
        document.querySelector('.highscore').textContent = Math.max(highscore, score);
          
    } else if(guess !== secrentNumber){
        if(score > 1 ){
            //using ternary operator
            //document.querySelector('.message').textContent = guess > secrentNumber ? '📈 Too High' : '📉Too Low';
             displayMessage(guess > secrentNumber ? '📈 Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('😒 you lost the game');
                document.querySelector('.score').textContent = 0;
            }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor =' #222';
    score = 20;
    secrentNumber = Math.trunc(Math.random()* 20 ) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('start guessing');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});



