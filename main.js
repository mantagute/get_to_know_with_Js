// DOM MANIPULATION

//EVENT DELEGATION

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;

    if (target.matches('li')){
        target.style.backgroundColor = 'green';
    }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);
