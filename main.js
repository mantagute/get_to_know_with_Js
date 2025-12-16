// DOM MANIPULATION
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if (hiddenContent.classList.contains('show')) {
        hiddenContent.classList.remove('show'); 
        revealBtn.classList.remove('active');   
    } else {
        hiddenContent.classList.add('show');   
        revealBtn.classList.add('active'); 
    }
}

revealBtn.addEventListener('click', revealContent);



