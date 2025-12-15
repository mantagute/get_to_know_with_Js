// DOM MANIPULATION

// Event Listeners

//element.addEventListener("", function());


const buttonTwo = document.querySelector('.btn-2')

function alertBtn () {
    alert('I also love Js');
}

buttonTwo.addEventListener('click', alertBtn);


//Mouseover

const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'red'
}

newBackgroundColor.addEventListener('mouseover', changeBgColor)



