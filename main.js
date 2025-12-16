// VARIABLES
let openBtn = document.getElementById('open_button');
let modalContainer = document.getElementById('modal_container');
let closeBtn = document.getElementById('close_button');

// EVENT LISTENERS

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'flex'; 
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});