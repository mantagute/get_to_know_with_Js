function playNote(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return; 
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key'); 
        playNote(keyCode);
    });
});

window.addEventListener('keydown', function(e) {
    playNote(e.code);
});
