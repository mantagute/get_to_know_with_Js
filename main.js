const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const highScoreDisplay = document.querySelector('.high-score');
const timerDisplay = document.querySelector('.timer-countdown');

const bonkSound = new Audio('https://raw.githubusercontent.com/wesbos/JavaScript30/master/30%20-%20Whack%20A%20Mole/play_burp.mp3');

let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 10;
let countdownTimer;

let highScore = localStorage.getItem('whackMoleHighScore') || 0;
highScoreDisplay.textContent = highScore;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        return randomHole(holes); 
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 700);
    const hole = randomHole(holes);
    hole.classList.add('up');
    
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startTimer() {
    timeLeft = 10;
    timerDisplay.textContent = `${timeLeft}s`;
    
    countdownTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
        }
    }, 1000);
}

function startGame() {
    scoreBoard.textContent = 0;
    scoreBoard.classList.remove('new-record-flash');
    timeUp = false;
    score = 0;
    
    startTimer();
    peep();
    
    setTimeout(() => {
        timeUp = true;
        checkHighScore();
    }, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; 
    
    score++;
    bonkSound.currentTime = 0; 
    bonkSound.play();
    
    this.parentElement.classList.remove('up'); 
    scoreBoard.textContent = score;

    if (score > highScore) {
        scoreBoard.classList.add('new-record-flash');
    }
}

function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('whackMoleHighScore', highScore);
        highScoreDisplay.textContent = highScore;
        
        highScoreDisplay.parentElement.style.transform = 'scale(1.2)';
        setTimeout(() => highScoreDisplay.parentElement.style.transform = 'scale(1)', 500);
    }
}

moles.forEach(mole => mole.addEventListener('click', bonk));