// get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')
const fsButton = player.querySelector('.fullscreen');

//functions

function togglePlay() {
    if (video.paused){
        video.play();
    }
    else {
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚'; 
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime = video.currentTime + parseFloat(this.dataset.skip)
}

function handleRangeupdate() {
    video[this.name] = this.value;
    if (this.name === 'volume') {
        console.log(`Volume atual: ${Math.round(this.value * 100)}%`);
    } else {
        console.log(`Velocidade atual: ${this.value}x`);
    }
}

function handleProgress() {
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX/ progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        player.requestFullscreen().catch(err => {
            alert(`Erro ao tentar entrar em tela cheia: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}


//hook

video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton)

video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('click', handleRangeupdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeupdate));


let mouseDown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));

progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false); 
fsButton.addEventListener('click', toggleFullscreen);
