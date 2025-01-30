'use strict';
//document.querySelector(".message").textContent = "Correct Number 🎉";
//document.querySelector(".number").textContent = 13;
//document.querySelector(".score").textContent = 20;
//document.querySelector(".guess").value = 23;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    else {
        if(number === guess) {
            document.querySelector('.message').textContent = 'You Won! 🎉';
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = number;

            if(score > highScore)
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;

            
        }
        else if(number > guess) {
            if(score > 1) {
                score = score-1;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = 'Too Low';
            } else {
                document.querySelector('.message').textContent = 'You lost the game😭';
            }
            
        }
        else if(number < guess) {
            if(score > 1) {
                score = score-1;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = 'Too High';
            }
            else {
                document.querySelector('.message').textContent = 'You lost the game😭';
            }
            
            
        }
    }


    
})


document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Start guessing...';
})